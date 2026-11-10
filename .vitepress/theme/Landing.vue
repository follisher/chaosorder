<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useData, withBase } from 'vitepress'
import { downloads } from './downloads'
const { page } = useData()
const menu = ref(false)
const legal = ref('')
const features = [
  ['01', '四柱八字', '从干支流转，读懂命盘结构。', '将四柱与五行关系放在清晰的盘面中，方便学习、推演与对照。', '甲 乙 丙 丁'],
  ['02', '紫微斗数', '十二宫位，展开另一种视角。', '在星曜与宫位之间梳理关系，探索传统星命的表达方式。', '紫 微 天 府'],
  ['03', '奇门遁甲', '让复杂的局，变得有迹可循。', '支持不同起局方式与盘面样式，为研习与复盘提供工具。', '休 生 伤 杜'],
  ['04', '大六壬与六爻', '多一种方法，多一层理解。', '从课式到卦象，在同一个应用中切换不同的传统术数视角。', '乾 坤 坎 离'],
  ['05', '七政四余', '抬头看星，也低头研习。', '探索星曜与天体的运行，以星盘连接天象与传统文化。', '日 月 金 木'],
  ['06', '随身古籍', '有据可查，才能学得更深。', '从《五行大义》到《六壬大全》，让典籍阅读与术数研习相伴。', '经 史 子 集'],
]
const faqs = [
  ['混沌与秩序是什么？', '一款面向传统术数与星象爱好者的工具应用，整合多种排盘工具及古籍阅读，供学习、研究与文化探索使用。'],
  ['可以使用哪些工具？', 'App 已包含四柱八字、紫微斗数、奇门遁甲、大六壬、六爻、七政四余和古籍阅读等模块，具体功能以安装版本为准。'],
  ['Android 和 iOS 都能下载吗？', downloads.android && downloads.ios ? '可以。iOS 用户可前往 App Store 下载，Android 用户可通过下载入口获取 APK。当前 Android 安装包适用于 ARM64 设备。' : '请查看下方下载区，已开放的平台可直接下载；尚未开放的平台会标注即将上线。'],
  ['初学者也可以使用吗？', '可以从自己感兴趣的一种术数开始，对照古籍学习盘面与术语。应用提供工具，不替代系统的基础学习。'],
  ['排盘结果应该如何使用？', '请将相关内容用于传统文化学习与研究，不作为医疗、投资或其他重大决策的依据。'],
  ['版本、价格和设备要求在哪里查看？', '正式发布后，请以对应应用商店或安装包发布说明中的版本、价格和设备要求为准。'],
]
let observer
onMounted(() => {
  observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }), { threshold: .2 })
  document.querySelectorAll('.reveal, .tagline span').forEach(el => observer.observe(el))
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <a class="skip button-md" href="#main">跳至正文</a>
  <header class="nav">
    <a :href="withBase('/')" class="brand title-3" aria-label="混沌与秩序首页"><img :src="withBase('/app-icon.png')" alt="" width="32" height="32"> <span>混沌与秩序</span></a>
    <nav aria-label="主导航" :class="{ open: menu }">
      <a class="title-4" href="#explore" @click="menu = false">探索功能</a><a class="title-4" href="#journey" @click="menu = false">开始研习</a><a class="title-4" href="#faq" @click="menu = false">常见问题</a>
    </nav>
    <a class="nav-download button-sm" href="#download">获取 App <span>↗</span></a>
    <button class="menu-toggle button-md" @click="menu = !menu" :aria-expanded="menu" aria-label="切换导航">{{ menu ? '关闭' : '菜单' }}</button>
  </header>
  <main id="main">
    <section v-if="page.isNotFound" class="error-page"><p class="caption-1">404 · 星图之外</p><h1 class="heading-2">这里还没有留下轨迹。</h1><a class="button button-md" :href="withBase('/')">返回首页</a></section>
    <template v-else>
    <section class="hero section-wrap">
      <div class="hero-copy">
        <p class="eyebrow caption-3"><span class="status-dot"></span> CHAOSORDER · 混沌与秩序</p>
        <h1 class="heading-1">于混沌中，<br>见万象之序。</h1>
        <p class="hero-description body-3">让古老的智慧，拥有当代的表达。<br>集术数排盘、星象探索与古籍阅读于一身，<br class="desktop-break">在方寸之间，展开你的研习天地。</p>
        <a class="button primary button-md" href="#download">获取混沌与秩序 <span>↗</span></a>
        <p class="availability caption-2">Android & iOS <span> / </span> 下载入口见下方</p>
        <div class="hero-note caption-2"><span class="tiny-orbit">✦</span> 以工具辅助研习，以典籍追溯本源</div>
      </div>
      <div class="cosmos" role="img" aria-label="以二十八宿、十二地支和阴阳构成的星盘示意，非实际排盘结果">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div>
        <div class="cross cross-x"></div><div class="cross cross-y"></div>
        <span v-for="(word, i) in ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']" :key="word" class="zodiac caption-1" :style="{ transform: `rotate(${i * 30}deg) translateY(-174px) rotate(${-i * 30}deg)` }">{{ word }}</span>
        <span v-for="i in 60" :key="i" class="tick" :style="{ transform: `rotate(${i * 6}deg) translateY(-218px)` }"></span>
        <div class="star-label north caption-3">玄 武 · 北</div><div class="star-label south caption-3">朱 雀 · 南</div>
        <div class="core"><span class="core-symbol">☯</span><span class="caption-3">万 象 归 序</span></div>
        <span class="star s1">✦</span><span class="star s2">✧</span><span class="star s3">✦</span>
        <div class="chart-label caption-3">天有其时 · 地有其理</div>
      </div>
      <div class="hero-bottom caption-3"><span>传统智慧 / 数字新境</span><a href="#explore">向下探索 ↓</a><span>天地 · 星辰 · 人间</span></div>
    </section>
    <section id="explore" class="features section-wrap reveal">
      <div class="section-heading"><div><p class="eyebrow caption-3">01 / 探索万象</p><h2 class="heading-2">一处天地，<br>多重视角。</h2></div><p class="body-3 muted">从一张命盘，到一页古籍。<br>让不同的研习路径，在这里交汇。</p></div>
      <div class="feature-grid"><article v-for="f in features" :key="f[0]" class="feature"><div class="feature-top caption-3"><span>{{ f[0] }}</span><span class="glyphs">{{ f[4] }}</span></div><h3 class="heading-5">{{ f[1] }}</h3><p class="title-3 benefit">{{ f[2] }}</p><p class="body-6 muted">{{ f[3] }}</p></article></div>
    </section>
    <section class="manifesto section-wrap"><p class="eyebrow caption-3">在变化里，寻找脉络</p><h2 class="tagline heading-2"><span v-for="(word, i) in ['让','繁复的','万象，']" :key="i" :style="{ transitionDelay: `${i * 100}ms` }">{{ word }}</span><br><span v-for="(word, i) in ['成为','可以探索的','秩序。']" :key="i + 3" :style="{ transitionDelay: `${(i + 3) * 100}ms` }">{{ word }}</span></h2><p class="body-3 muted">保留对未知的好奇，也保留独立思考的空间。</p></section>
    <section id="journey" class="journey section-wrap reveal"><div class="section-heading"><div><p class="eyebrow caption-3">02 / 从此刻开始</p><h2 class="heading-2">研习，自有路径。</h2></div></div><div class="steps"><article v-for="(step, i) in [['选择一个视角','从八字、紫微或你熟悉的工具开始。'],['展开一张盘面','录入所需信息，观察盘面结构与关系。'],['回到典籍与思考','对照古籍，记录理解，继续自己的探索。']]" :key="i"><span class="step-number heading-4">0{{ i + 1 }}</span><h3 class="heading-6">{{ step[0] }}</h3><p class="body-6 muted">{{ step[1] }}</p></article></div></section>
    <section id="faq" class="faq section-wrap reveal"><div><p class="eyebrow caption-3">03 / 你可能想知道</p><h2 class="heading-2">一些解答。</h2></div><div class="questions"><details v-for="f in faqs" :key="f[0]"><summary class="title-3">{{ f[0] }}<span aria-hidden="true">＋</span></summary><p class="body-6 muted">{{ f[1] }}</p></details></div></section>
    <section id="download" class="download section-wrap reveal"><div class="download-symbol">✦</div><p class="eyebrow caption-3">CHAOSORDER / 随身的研习天地</p><h2 class="heading-2">万象在手，<br>探索由你。</h2><p class="body-3 muted">将混沌与秩序，装进口袋。</p><div class="download-buttons"><template v-for="platform in ['ios', 'android']" :key="platform"><a v-if="downloads[platform]" class="store" :href="downloads[platform]" target="_blank" rel="noopener noreferrer"><span class="platform-icon">{{ platform === 'ios' ? '◈' : '↓' }}</span><span><small class="caption-2">{{ platform === 'ios' ? 'App Store' : 'Android' }}</small><strong class="button-md">{{ platform === 'ios' ? '下载 iOS 版' : '下载 Android 版' }}</strong></span><span>↗</span></a><div v-else class="store unavailable" aria-disabled="true"><span class="platform-icon">{{ platform === 'ios' ? '◈' : '↓' }}</span><span><small class="caption-2">{{ platform === 'ios' ? 'iOS 版' : 'Android 版' }}</small><strong class="button-md">即将上线</strong></span><span class="caption-3">筹备中</span></div></template></div><p class="caption-2 muted">{{ downloads.android && downloads.ios ? 'iOS 前往 App Store · Android 下载 ARM64 安装包' : '尚未开放的平台将在下载地址确认后提供下载。' }}</p></section>
    </template>
  </main>
  <footer class="section-wrap"><div class="footer-top"><a class="brand title-3" :href="withBase('/')"><img :src="withBase('/app-icon.png')" width="32" height="32" alt="">混沌与秩序</a><p class="caption-2 muted">传统智慧，当代表达。</p><div class="footer-links"><button class="caption-2" @click="legal = '隐私说明'">隐私说明</button><button class="caption-2" @click="legal = '使用说明'">使用说明</button></div></div><div class="footer-bottom caption-2 muted"><span>© {{ new Date().getFullYear() }} ChaosOrder</span><span>仰观天文，俯察地理。</span></div></footer>
  <div v-if="legal" class="modal-backdrop" @click.self="legal = ''" @keydown.esc="legal = ''"><section role="dialog" aria-modal="true" aria-labelledby="legal-title" class="legal-modal"><h2 id="legal-title" class="heading-5">{{ legal }}</h2><p class="body-3 muted">{{ legal === '隐私说明' ? '此落地页不包含注册表单、广告追踪或分析脚本。App 的数据处理方式与隐私政策，请以正式发布版本中的政策为准。正式政策链接将在发布时补充。' : '本页介绍混沌与秩序的功能与下载状态。应用内容用于传统文化学习与研究，具体功能及使用条款以正式发布版本为准。' }}</p><button autofocus class="button primary button-md" @click="legal = ''">关闭</button></section></div>
</template>
