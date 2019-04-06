import Vue from 'vue'
import VueDialog from './Dialog'

let instance
let globalConfig = {}

let initInstance = () => {
  instance = new (Vue.extend(VueDialog))({
    el: document.createElement('div')
  })

  instance.$on('input', value => {
    instance.value = value
  })

  document.body.appendChild(instance.$el)
}

let Dialog = options => {
  // return new Promise((resolve, reject) => {
  //   if (!instance) {
  //     initInstance()
  //   }

  //   Object.assign(instance, Dialog.currentOptions, options, {
  //     resolve,
  //     reject
  //   })
  // })
  if (!instance) {
    initInstance()
  }

  Object.assign(instance, globalConfig, options)
}

// Dialog.defaultOptions = {
//   value: true,
//   title: '',
//   message: '',
//   overlay: true,
//   className: '',
//   lockScroll: true,
//   beforeClose: null,
//   messageAlign: '',
//   confirmButtonText: '',
//   cancelButtonText: '',
//   showConfirmButton: true,
//   showCancelButton: false,
//   closeOnClickOverlay: false,
//   callback: action => {
//     instance[action === 'confirm' ? 'resolve' : 'reject'](action)
//   }
// }

// Dialog.alert = Dialog

// Dialog.confirm = options =>
//   Dialog({
//     showCancelButton: true,
//     ...options
//   })

// Dialog.close = () => {
//   if (instance) {
//     instance.value = false
//   }
// }

// Dialog.setDefaultOptions = options => {
//   Object.assign(Dialog.currentOptions, options)
// }

// Dialog.resetDefaultOptions = () => {
//   Dialog.currentOptions = {
//     ...Dialog.defaultOptions
//   }
// }

// Dialog.install = () => {
//   Vue.use(VueDialog)
// }

// Vue.prototype.$dialog = Dialog
// Dialog.resetDefaultOptions()

// export default Dialog

Dialog.install = (Vue, options) => {
  Vue.component(VueDialog.name, VueDialog)
  globalConfig = options
  Vue.prototype.$dialog = Dialog
}

export default Dialog
