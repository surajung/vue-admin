import home from './home'
import test from './test'
import user from './user'

const state = {
  items: [
    home,
    test,
    user
  ]
}

const getters = {
  menus: state => state.items
}

export default {
  state,
  getters
}