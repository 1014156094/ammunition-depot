import Vue from 'vue'
import Loading from './Loading'

let instance
let globalConfig = {}
let ToastConstructor = Vue.extend(Loading)

let initInstance = () => {
  instance = new ToastConstructor({
    el: document.createElement('div'),
    data: {
      content: ''
    }
  })
  document.body.appendChild(instance.$el)
}

let timer = null

let _Loading = options => {
  if (!instance) {
    initInstance()
  }

  instance.resetData && instance.resetData()

  if (typeof options === 'string') {
    options = {
      text: options
    }
  }

  Object.assign(instance.$data, globalConfig, options)

  instance.show = true

  if (instance.duration !== 0) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      instance.show = false
    }, instance.duration || 1500)
  }
  return instance
}

export default {
  install(Vue, options) {
    globalConfig = options
    Vue.prototype.$loading = _Loading
  }
}
