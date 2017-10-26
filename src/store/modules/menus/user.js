import lazyLoading from './lazy-loading'

export default {
  name: 'User',
  path: '/user',
  meta: {
    label: '유저 목록'
  },
  component: lazyLoading('user')
}