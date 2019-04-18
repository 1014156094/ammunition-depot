import Vue from 'vue'
import Toast from './Toast'

let instance
let globalConfig = {}
let ToastConstructor = Vue.extend(Toast)

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

let _Toast = options => {
  if (!instance) {
    initInstance()
  }

  instance.resetData && instance.resetData()

  options = {
    text: options
  }

  Object.assign(instance.$data, globalConfig, options)

  instance.show = true

  if (instance.duration !== 0) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      instance.show = false
    }, instance.duration || 1500)
  }
}

export default {
  install(Vue, options) {
    globalConfig = options
    Vue.prototype.$toast = _Toast
  }
}
