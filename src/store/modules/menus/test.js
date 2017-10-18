import lazyLoading from './lazy-loading'

export default {
  name: 'Test',
  path: '/test',
  meta: {
    label: 'TEST'
  },
  component: lazyLoading('test')
}