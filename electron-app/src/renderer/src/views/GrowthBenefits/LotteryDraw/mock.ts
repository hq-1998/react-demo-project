/** 转盘奖品 */
/**
 * @param title 奖品名称
 * @param icon 奖品图片
 */
const lotteryList = [
  {
    title: '随机矿石',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp'
  },
  {
    title: 'Bug',
    icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4ce25d48b8405cbf5444b6195928d4~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp'
  },
  {
    title: '「码赛克」掘金贴纸',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77d5e1e091a944b1b894029d22cdfcf0~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '码赛克系列运动毛巾',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9cb9f9a3e354d358653071eeb586606~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '曼秀雷敦唇膏',
    icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8a65cb2605c493faa24351c8c4590ef~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '「睡眠日」小夜灯',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35f3358d60834e6e8dce52e684ce8aab~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '稀土掘金兔年春节礼盒',
    icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d748a2d93d6840da84e9f9c2ac347241~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '再抽1次解锁',
    icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef82c2f354b44e91b70e0fcaa6e321f2~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp'
  },
  {
    title: '再抽1次解锁',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcd370642600427c9c32bee96040f67b~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  }
]

/** 围观大奖 */
/**
 * @param title 奖品名称
 * @param username 获奖者姓名
 * @param list 围观者列表
 * @param num 围观者人数
 * @param unit 围观者(单位)
 */
const grandLotteryList = [
  {
    title: '稀土掘金兔年春节礼盒',
    username: '酥兮月',
    list: [
      '小der',
      '起飞啦',
      'Nityyy',
      'Yanet',
      'ldeyun',
      'SosoChiu',
      '2hao',
      'BUG预言家',
      '知道我叫什么吗',
      'Asuwish'
    ],
    id: 1,
    num: 2351,
    unit: '人',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/d3fa63c577583f0769bfaf629d784ac5~100x100.awebp',
    icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d748a2d93d6840da84e9f9c2ac347241~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '稀土掘金兔年春节礼盒',
    username: 'situ...',
    list: [
      '11王',
      'frlr',
      'LW2333',
      'June_Solstice',
      '金小钗',
      '赵镇',
      '怪554',
      '用户6394378541528',
      '妖妖零灬',
      '渐行渐远渐无书9527'
    ],
    id: 2,
    num: 29027,
    unit: '人',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/f5837ce662120a4a0ea0bc2f973890a3~100x100.awebp',
    icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d748a2d93d6840da84e9f9c2ac347241~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '稀土掘金兔年春节礼盒',
    username: '爱在西元...',
    list: [
      'hopkin',
      '努力学习前端的小橙子',
      'THIS_IS_TRUE',
      '重生之神级程序员',
      '咩呀咩',
      '白帽子耗子',
      '梦想成为百万富翁',
      '淘金小能手',
      '是小白_鸭',
      '妖孽白',
      'づ Yoon A'
    ],
    id: 3,
    num: 12812,
    unit: '人',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/1c1d818628578d96a8ec4cad94a0428d~100x100.awebp',
    icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d748a2d93d6840da84e9f9c2ac347241~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '「睡眠日」小夜灯',
    username: '不写Bu...',
    list: [
      '点赞狂人',
      '满眼春风百事非',
      'mjl2020',
      '改名中大奖',
      '唯一立场',
      '前端开发工程师请求出战',
      '相濡丷',
      '王路飞啊',
      '摸鱼倔强青铜',
      'Ye_is_ready'
    ],
    id: 4,
    num: 5653,
    unit: '人',
    avatar: 'https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5035712059~100x100.awebp',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35f3358d60834e6e8dce52e684ce8aab~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  },
  {
    title: '「睡眠日」小夜灯',
    username: 'No_0',
    list: [
      '逃离地球的羊',
      'Quinn本尊77931',
      '起床时间到',
      '飞鱼_',
      'NidhoggDJoking',
      '叶璇',
      '杨慕晚',
      'marvelous-sj',
      'liyingkui',
      '小菜鸟的成长之路'
    ],
    id: 5,
    num: 7286,
    unit: '人',
    avatar:
      'https://p3-passport.byteimg.com/img/user-avatar/5d66882bdf76f146f1361a9da5a34dae~100x100.awebp',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35f3358d60834e6e8dce52e684ce8aab~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?'
  }
]

export { lotteryList, grandLotteryList }
