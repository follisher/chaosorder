<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps({ module: { type: Object, required: true }, number: { type: Number, required: true } })
const mode = ref('night')
const index = ref(0)
const playing = ref(false)
const hovered = ref(false)
const focused = ref(false)
const inView = ref(false)
const loadFailed = ref(false)
const root = ref(null)
const reducedMotion = ref(false)
const hasScreenshots = computed(() => props.module.slides.some(item => item.day || item.night))
const availableSlides = computed(() => {
  const available = props.module.slides.filter(item => item[mode.value])
  return available.length ? available : props.module.slides.slice(0, 1)
})
const slide = computed(() => availableSlides.value[index.value] || availableSlides.value[0])
const src = computed(() => slide.value[mode.value])
function move(step) { index.value = (index.value + step + availableSlides.value.length) % availableSlides.value.length }
function manualMove(step) { playing.value = false; move(step) }
function selectSlide(i) { playing.value = false; index.value = i }
function switchMode(value) {
  const currentTitle = slide.value.title
  playing.value = false
  mode.value = value
  const matchingIndex = availableSlides.value.findIndex(item => item.title === currentTitle)
  index.value = matchingIndex >= 0 ? matchingIndex : 0
}
function onKey(event) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); manualMove(event.key === 'ArrowRight' ? 1 : -1) }
}
let startX = 0, startY = 0
function touchStart(e) { startX = e.changedTouches[0].clientX; startY = e.changedTouches[0].clientY }
function touchEnd(e) {
  const dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY
  if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) manualMove(dx < 0 ? 1 : -1)
}
watch([index, mode], () => { loadFailed.value = false })
// Warm only neighboring slides and the other theme of the visible screenshot.
const warmedImages = new Map()
function preloadNeighbors() {
  if (typeof window === 'undefined' || !inView.value) return
  const slides = availableSlides.value
  const previous = slides[(index.value - 1 + slides.length) % slides.length]
  const next = slides[(index.value + 1) % slides.length]
  const candidates = [previous?.[mode.value], next?.[mode.value], slide.value[mode.value === 'day' ? 'night' : 'day']]
  for (const path of candidates) {
    if (!path || path === src.value || warmedImages.has(path)) continue
    const image = new Image()
    image.decoding = 'async'
    image.onerror = () => warmedImages.delete(path)
    warmedImages.set(path, image)
    image.src = withBase(path)
  }
}
watch([src, inView], preloadNeighbors, { flush: 'post' })

let timer, observer, media
function syncMotion(e) { reducedMotion.value = e.matches; if (e.matches) playing.value = false }
onMounted(() => {
  media = window.matchMedia('(prefers-reduced-motion: reduce)'); syncMotion(media); media.addEventListener('change', syncMotion)
  observer = new IntersectionObserver(entries => { inView.value = entries[0].isIntersecting }, { threshold: .25 }); observer.observe(root.value)
  timer = window.setInterval(() => {
    if (availableSlides.value.length > 1 && playing.value && inView.value && !hovered.value && !focused.value && !reducedMotion.value && !document.hidden) move(1)
  }, 5000)
})
onUnmounted(() => { clearInterval(timer); observer?.disconnect(); media?.removeEventListener('change', syncMotion) })
</script>

<template>
  <section :id="`feature-${module.id}`" ref="root" class="feature-detail section-wrap" :aria-labelledby="`title-${module.id}`" @mouseenter="hovered = true" @mouseleave="hovered = false" @focusin="focused = !$event.target.closest('.gallery-play')" @focusout="focused = false" @keydown="onKey">
    <div class="detail-copy">
      <div class="slide-copy" :aria-live="playing ? 'off' : 'polite'" aria-atomic="true">
      <p class="eyebrow caption-3">{{ String(number).padStart(2, '0') }} / {{ module.title }}</p>
      <h2 :id="`title-${module.id}`" class="heading-2 detail-title">{{ slide.title }}</h2>
      <p class="body-3 muted detail-description">{{ slide.description || slide.caption }}</p>
      <ul class="detail-points"><li v-for="point in (slide.points || module.points)" :key="point" class="body-3"><span aria-hidden="true">✦</span>{{ point }}</li></ul>
            <p class="caption-2 muted slide-summary">{{ slide.caption }}</p>
      </div>
      <div v-if="availableSlides.length > 1" class="gallery-controls">
        <button type="button" class="gallery-arrow" :aria-label="`${module.title}上一张截图`" @click="manualMove(-1)">←</button>
        <div class="gallery-dots" role="group" aria-label="选择截图"><button v-for="(item, i) in availableSlides" :key="item.title" type="button" :aria-label="`第 ${i + 1} 张：${item.title}`" :aria-pressed="index === i" @click="selectSlide(i)"><span></span></button></div>
        <button type="button" class="gallery-arrow" :aria-label="`${module.title}下一张截图`" @click="manualMove(1)">→</button>
        <span class="slide-count caption-2">{{ index + 1 }} / {{ availableSlides.length }}</span>
        <button type="button" class="gallery-play button-sm" :disabled="reducedMotion" :aria-label="playing ? '暂停幻灯' : '播放幻灯'" :aria-pressed="playing" @click="playing = !playing">{{ playing ? '暂停' : '播放' }}</button>
      </div>
      <a class="detail-back button-sm" href="#explore">返回功能总览 <span aria-hidden="true">↑</span></a>
    </div>
    <div class="phone-gallery" role="region" aria-roledescription="轮播图" :aria-label="`${module.title}功能截图`">
      <div v-if="hasScreenshots" class="mode-switch" role="group" :aria-label="`${module.title}截图显示模式`">
        <button type="button" class="button-sm" :disabled="!module.slides.some(item => item.day)" :aria-pressed="mode === 'day'" @click="switchMode('day')"><span aria-hidden="true">☼</span> 日间</button>
        <button type="button" class="button-sm" :disabled="!module.slides.some(item => item.night)" :aria-pressed="mode === 'night'" @click="switchMode('night')"><span aria-hidden="true">☾</span> 夜间</button>
      </div>
      <p class="caption-2 muted preview-note">{{ hasScreenshots ? '切换查看日间与夜间实机截图' : '功能截图待补充' }}</p>
      <div class="iphone-stage">
        <div class="iphone-frame" :class="`preview-${mode}`" tabindex="0" :aria-label="`${module.title}，${slide.title}，${mode === 'day' ? '日间' : '夜间'}模式。可使用左右方向键切换截图。`" @touchstart.passive="touchStart" @touchend.passive="touchEnd">
          <div class="iphone-screen">
            <Transition name="screen-fade">
              <img v-if="src && !loadFailed" :key="src" class="app-screenshot" :src="withBase(src)" :alt="`${module.title}：${slide.title}，${mode === 'day' ? '日间' : '夜间'}模式截图`" loading="lazy" decoding="async" @error="loadFailed = true">
              <div v-else :key="`${mode}-${index}-empty`" class="screenshot-empty">
                <img :src="withBase('/app-icon.png')" width="48" height="48" alt="">
                <p class="title-3">{{ module.title }}</p><span class="empty-divider"></span>
                <p class="heading-6">{{ loadFailed ? '截图暂时无法加载' : '功能截图待补充' }}</p>
                <p class="body-6">{{ slide.title }}<br>{{ mode === 'day' ? '日间' : '夜间' }}模式</p>
                <button v-if="loadFailed" type="button" class="button-sm retry-screenshot" @click="loadFailed = false">重新加载</button>
                <p v-else class="caption-2">真实 App 截图将在这里展示</p>
              </div>
            </Transition>
          </div>
          <div class="dynamic-island" aria-hidden="true"><span></span></div><div class="home-indicator" aria-hidden="true"></div>
        </div>
      </div>


    </div>
  </section>
</template>
