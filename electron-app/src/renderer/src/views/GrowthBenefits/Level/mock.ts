/** 等级权益 */
/**
 * @param title 标题
 * @param icon 图标
 */
const levelEquiltyList = [
  {
    title: '主动发起私信',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d4e44d7ac964da1b0a14429fe9af8f6~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '发起投票',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c351fbde9e2a4d358f8e679982afeb22~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '评论区权限设置',
    icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae7e24f58b354d5d97bd39123d60b804~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '评论区Mark',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3279d545076046edbcb8a98268468c3b~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '使用掘金特色表情',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4c31461044f4a5eb82594eabd41d5d5~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '个性装扮',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96f8fd7660c84248a62a87a6fc429989~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '升级矿石奖励',
    icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7cde83c13644265b23f1bfccdc2eb2f~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '参选掘金神评官',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fcb7557767ae46fba1d63cd1d73107e2~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '参选小册评审团',
    icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2aedfb55a654c3ea0a7ec1c8063553a~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '参选掘金内容众议官',
    icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d65b6d5e9534fbcbb7121c07c311748~tplv-k3u1fbpfcp-zoom-1.png'
  },
  {
    title: '荣获“掘金共建者”身份',
    icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/826c9b77f22c4c90854536e1c41eeb54~tplv-k3u1fbpfcp-zoom-1.png'
  }
]

/** 等级分值 */
/**
 * @param height 外柱高度
 * @param barHeight 内柱高度
 * @param score 升级所需分值
 * @param level 等级
 */
const levelScoreList = [
  {
    height: '70px',
    barHeight: '10px',
    score: 0,
    level: 1
  },
  {
    height: '80px',
    barHeight: '20px',
    score: 15,
    level: 2
  },
  {
    height: '90px',
    barHeight: '30px',
    score: 30,
    level: 3
  },
  {
    height: '100px',
    barHeight: '40px',
    score: 150,
    level: 4
  },
  {
    height: '110px',
    barHeight: '50px',
    score: 500,
    level: 5
  },
  {
    height: '120px',
    barHeight: '60px',
    score: 2000,
    level: 6
  },
  {
    height: '130px',
    barHeight: '70px',
    score: 7000,
    level: 7
  },
  {
    height: '140px',
    barHeight: '80px',
    score: 25000,
    level: 8
  }
]

/** 升级行为 */
/**
 * @param title 标题
 * @param finish 已完成 可选
 * @param total 所有 可选
 * @param icon 图标
 * @param btnText 按钮文案
 */
const levelBehaviorList = [
  {
    title: '社区基础',
    children: [
      {
        title: '修改个性昵称',
        score: 1,
        finish: 0,
        total: 1,
        icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/425548414cec415fa97ab5f6c659a286~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去修改'
      }
    ]
  },
  {
    title: '社区活跃',
    children: [
      {
        title: '移动端每日登录访问',
        score: 2,
        finish: 1,
        total: 1,
        icon: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e272f3ca0b4457a9e97c735c1c1c45c~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '已完成'
      },
      {
        title: '发布一篇文章',
        score: 8,
        finish: 0,
        total: 2,
        icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3dd4804d26d84ed0b2cb4d8ac2c39419~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去发布'
      },
      {
        title: '发布一条沸点',
        score: 8,
        finish: 0,
        total: 2,
        icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dddab19fa47e4c928d5ff2f50e37a333~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去发布'
      },
      {
        title: '评论一篇文章',
        score: 2,
        finish: 0,
        total: 2,
        icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72a37dbd04454fa1b682af47ddec726b~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去评论'
      },
      {
        title: '评论一条沸点',
        score: 2,
        finish: 0,
        total: 5,
        icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72a37dbd04454fa1b682af47ddec726b~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去评论'
      },
      {
        title: '点赞一篇文章',
        score: 1,
        finish: 0,
        total: 2,
        icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7244d549dd45485d9e2e5283df11db32~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去点赞'
      },
      {
        title: '点赞一条沸点',
        score: 1,
        finish: 0,
        total: 2,
        icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7244d549dd45485d9e2e5283df11db32~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去点赞'
      },
      {
        title: '收藏一篇文章',
        score: 1,
        finish: 0,
        total: 2,
        icon: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bae13c020b414af9a8ca20392e3e5ed5~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去收藏'
      },
      {
        title: '关注一位掘友',
        score: 4,
        finish: 0,
        total: 2,
        icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/478e68e613564603b42d509946245f96~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去关注'
      }
    ]
  },
  {
    title: '社区学习',
    children: [
      {
        title: '浏览一篇文章/课程',
        score: 0.5,
        finish: 5,
        total: 5,
        icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c4368ebc1a549f19ccb0f2d2b7b015c~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '已完成'
      }
    ]
  },
  {
    title: '社区影响力',
    children: [
      {
        title: '被一位掘友关注',
        score: 0.1,
        finish: 0,
        total: 0,
        icon: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2aabd4a3b104270a1ff987a8a4bd0c1~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去分析'
      },
      {
        title: '沸点获得一个点赞',
        score: 0.1,
        finish: 0,
        total: 0,
        icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08099905b76f44549af5921dac1d4e09~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去发布'
      },
      {
        title: '文章获得一个点赞',
        score: 0.1,
        finish: 0,
        total: 0,
        icon: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08099905b76f44549af5921dac1d4e09~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp',
        btnText: '去创作'
      }
    ]
  }
]
export { levelEquiltyList, levelScoreList, levelBehaviorList }
