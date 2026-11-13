// 每张幻灯分别填写日间与夜间截图路径，如 /screenshots/bazi-overview-day.webp。
// 使用 App 原始截图即可，iPhone 外框由页面统一绘制。
export const modules = [
  { id: 'bazi', title: '四柱八字', headline: '从四柱之间，\n梳理五行脉络。', description: '把干支与五行的关系放回同一张盘面。从整体结构开始观察，再沿着细节逐步深入，让每一次对照都有清晰的起点。', points: ['观察四柱与五行关系', '结合盘面进行学习与推演', '对照典籍，加深理解'], slides: [
    {"title": "命局研习", description: "从四柱与日主开始，观察干支、藏干和十神。将盘面信息与下方的命局关系放在一起，逐步建立整体理解。", points: ["四柱干支与藏干", "日主与十神关系", "命局结构对照"], "caption": "从日主、干支与五行关系展开研习。", "day": "/screenshots/bazi-01-day.webp", "night": "/screenshots/bazi-01-night.webp"},
    {"title": "流运对照", description: "在命局与流运之间往返对照，查看大运、流年与流月的干支变化，把不同时间层次放回同一个研习视角。", points: ["大运阶段浏览", "流年与流月对照", "命局与流运同屏"], "caption": "对照大运、流年与流月。", "day": "/screenshots/bazi-02-day.webp", "night": "/screenshots/bazi-02-night.webp"},
    {"title": "五运六气", description: "将出生时令与地域放在一起观察。结合节气、气候带和五运六气信息，为传统文化研习补充时间与地理视角。", points: ["地域与气候带", "出生时令与节气", "五运六气信息"], "caption": "结合节气与地域信息观察五运六气。", "day": "/screenshots/bazi-03-day.webp", "night": "/screenshots/bazi-03-night.webp"},
    {"title": "流运层级", description: "从大运逐层展开到年、月、日、时，在同一张盘面中观察不同时间层级的干支，沿着时间脉络继续推演。", points: ["大运与流年", "流月与流日", "流时干支对照"], "caption": "在大运、流年、流月、流日与流时之间逐层对照。", "day": "/screenshots/bazi-04-day.webp", "night": "/screenshots/bazi-04-night.webp"},
    {"title": "大运流年总览", description: "按大运纵览各阶段的流年分布，让多年变化在一屏中展开，方便回看年份与干支之间的对应关系。", points: ["按大运分列", "逐年干支总览", "年龄与年份对照"], "caption": "展开大运下的流年分布，纵览不同阶段的干支变化。", "day": "/screenshots/bazi-05-day.webp", "night": "/screenshots/bazi-05-night.webp"},
  ] },
  { id: 'ziwei', title: '紫微斗数', headline: '星曜落宫，\n关系由此展开。', description: '以十二宫位为线索，在星曜分布与宫位关系之间来回对照。让复杂的星命体系，有一个可以反复观察的入口。', points: ['浏览十二宫位结构', '探索星曜与宫位关系', '从整体到局部研习星命'], slides: [
    {"title": "综合盘面", description: "将十二宫位、主星与辅曜放在一张盘面中，结合中央命盘信息及下方限运，形成紫微研习的整体视角。", points: ["十二宫位布局", "主星与辅曜信息", "命盘与限运同屏"], "caption": "展开十二宫位与星曜信息。", "day": "/screenshots/ziwei-01-day.webp", "night": "/screenshots/ziwei-01-night.webp"},
    {"title": "星曜分布", description: "聚焦十二宫中的星曜分布，从主星落宫切入，观察不同宫位的组合，让盘面关系更容易逐一对照。", points: ["主星落宫", "星曜组合", "宫位间对照"], "caption": "查看星曜在十二宫中的分布。", "day": "/screenshots/ziwei-02-day.webp", "night": "/screenshots/ziwei-02-night.webp"},
    {"title": "四化关系", description: "沿着盘面的四化连线查看宫位之间的联系，将禄、权、科、忌放回命盘结构中理解。", points: ["四化连线", "禄权科忌标记", "宫位关联观察"], "caption": "沿着四化连线，对照宫位关系。", "day": "/screenshots/ziwei-04-day.webp", "night": "/screenshots/ziwei-04-night.webp"},
  ] },
  { id: 'qimen', title: '奇门遁甲', headline: '九宫有序，\n复杂也能细读。', description: '从起局方式到盘面样式，按照自己的研习习惯展开奇门。观察九宫中的结构，在一次次起局与复盘之间积累理解。', points: ['选择不同起局方式', '切换飞盘与转盘样式', '对照盘面进行复盘'], slides: [
    {"title": "阴盘奇门", description: "在阴盘九宫中查看星、门、神与干支信息，结合盘面外圈及下方时间信息，逐项梳理布局。", points: ["阴盘九宫布局", "星门神与干支", "起局时间信息"], "caption": "在九宫结构中观察阴盘奇门。", "day": "/screenshots/qimen-01-day.webp", "night": "/screenshots/qimen-01-night.webp"},
    {"title": "转盘奇门", description: "展开转盘奇门的九宫盘面，查看各宫中的门、星、神与干支，结合下方信息进行对照研习。", points: ["转盘九宫盘面", "各宫信息对照", "干支与时令信息"], "caption": "查看转盘盘面中的门、星与神。", "day": "/screenshots/qimen-02-day.webp", "night": "/screenshots/qimen-02-night.webp"},
    {"title": "宫位解读", description: "从盘面进入具体宫位，查看宫位、宫支、九星与八门等说明，把抽象术语与当前布局对应起来。", points: ["宫位与宫支说明", "九星与八门解读", "盘面与说明对照"], "caption": "在盘面之外，进一步阅读宫位说明。", "day": "/screenshots/qimen-03-day.webp", "night": "/screenshots/qimen-03-night.webp"},
    {"title": "阴盘宫位解读", description: "结合阴盘布局查看具体宫位的说明，在宫位、星门和传统取象之间逐步建立联系。", points: ["阴盘宫位说明", "星门信息", "传统取象参考"], "caption": "结合阴盘布局查看宫位说明。", "day": "/screenshots/qimen-04-day.webp", "night": ""},
  ] },
  { id: 'liuren-liuyao', title: '六壬与六爻', headline: '课式与卦象，\n各有观察之道。', description: '让不同的传统术数在同一处相遇。以课式或卦象为起点，沿着各自的体系深入，在切换视角中丰富自己的研习路径。', points: ['探索大六壬与小六壬', '对照六爻本卦与变卦', '阅读卦辞与爻辞'], slides: [
    {"title": "大六壬", description: "从天地盘、四课与三传切入，结合占时、月将等起课信息，沿着课式结构展开研习。", points: ["天地盘与四课", "三传信息", "占时与月将"], "caption": "从天地盘、四课与三传展开研习。", "day": "/screenshots/liuren-liuyao-01-day.webp", "night": "/screenshots/liuren-liuyao-01-night.webp"},
    {"title": "小六壬", description: "用简洁的六宫盘面查看起课结果，同时对照干支与节气时间，为小六壬研习提供清晰的入口。", points: ["六宫盘面", "时间起课信息", "节气时间对照"], "caption": "查看小六壬盘面与起课信息。", "day": "/screenshots/liuren-liuyao-02-day.webp", "night": "/screenshots/liuren-liuyao-02-night.webp"},
    {"title": "六爻卦象", description: "并排对照本卦与变卦，查看六爻、六亲、世应及变化信息，在同一画面中展开卦象研习。", points: ["本卦与变卦", "六亲与世应", "爻位变化对照"], "caption": "对照本卦、变卦与六爻信息。", "day": "/screenshots/liuren-liuyao-03-day.webp", "night": "/screenshots/liuren-liuyao-03-night.webp"},
    {"title": "六爻卦辞", description: "从卦象进入卦辞、象辞与爻辞阅读，在文字与盘面之间往返，对照不同卦象的经典表达。", points: ["卦辞与象辞", "爻辞阅读", "本卦及其他卦象切换"], "caption": "从卦象进入卦辞与爻辞阅读。", "day": "", "night": "/screenshots/liuren-liuyao-04-night.webp"},
  ] },
  { id: 'qizheng', title: '七政四余', headline: '循着星辰，\n读天象的语言。', description: '把目光投向更广阔的天幕。沿着星盘探索星曜与天体运行，将天象观察与传统文化研习连接起来。', points: ['探索七政四余星盘', '观察星曜与天体运行', '连接天象与传统星命文化'], slides: [
    {"title": "七政星盘", description: "以圆形星盘展开七政四余，观察星曜落点、宫位与度数，并结合日月升落、地点及限运信息继续探索。", points: ["星曜与宫位度数", "日月升落与地点", "限运信息对照"], "caption": "观察星盘、星曜与天体运行。", "day": "/screenshots/qizheng-01-day.webp", "night": "/screenshots/qizheng-01-night.webp"},
  ] },
  { id: 'books', title: '随身古籍', headline: '翻开典籍，\n让理解有源可溯。', description: '研习不止于一张盘。让《五行大义》《六壬大全》等典籍成为身边的参考，在阅读与实践之间，慢慢建立自己的理解。', points: ['按术数分类浏览典籍', '查看书籍阅读进度', '回看摘录与阅读笔记'], slides: [
    { title: '分类书架', description: "按七政、八字、六壬等类别浏览典籍。在书架中查看书名和阅读进度，为下一次阅读找到起点。", points: ["按术数分类浏览", "典籍封面书架", "阅读进度查看"], caption: '按七政、八字、六壬等分类浏览典籍，查看阅读进度。', day: '/screenshots/books-01-day.webp', night: '/screenshots/books-01-night.webp' },
    { title: '摘录笔记', description: "把阅读中留下的原文摘录与笔记集中回看，结合书籍来源和日期，重新找回当时的阅读线索。", points: ["原文摘录", "阅读笔记", "书籍来源与日期"], caption: '回看原文摘录与笔记，追溯对应典籍。', day: '/screenshots/books-02-day.webp', night: '/screenshots/books-02-night.webp' },
  ] },
]
