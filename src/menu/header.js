// 菜单 顶栏
export default [
  { path: '/index', title: 'Home page', icon: 'home' },
  {
    title: 'The demo page',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: 'page 1' },
      { path: '/demo/page2', title: 'page 2' },
      { path: '/demo/page3', title: 'page 3' }
    ]
  }
]
