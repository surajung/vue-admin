import lazyLoading from './lazy-loading'

export default {
  name: 'Test',
  path: '/test',
  meta: {
    label: '테스트메뉴'
  },
  component: lazyLoading('test'),
  children: [
    {
      name: 'TestIndex',
      path: '',
      component: lazyLoading('test/Test'),
      meta: {
        label: '자식인덱스'
      }
    },
    {
      name: 'ChildTest',
      path: 'childtest',
      component: lazyLoading('test/ChildTest'),
      meta: {
        label: '자식테스트'
      }
    },
    {
      name: 'TileSystem',
      path: 'tile',
      component: lazyLoading('test/TileSystem'),
      meta: {
        label: '타일시스템'
      }
    }
  ]
}