import Vue from 'vue'
import DemoCode from '../components/demo-code'
import Popup from '../components/popup'
import Dialog from '../components/dialog'
import Loading from '../components/loading'
import Select from '../components/select'
import Toast from '../components/toast'
import IconClose from '../pages/css-icon/icon-close'

let components = [
    Popup,
    DemoCode,
    Select,
    IconClose
]

Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Toast)

components.forEach((elem)=>{
    Vue.component(elem.name, elem)
})

// export default ({
//     Vue, // VuePress 正在使用的 Vue 构造函数
//     options, // 附加到根实例的一些选项
//     router, // 当前应用的路由实例
//     siteData // 站点元数据
// }) => {
//     // ...做一些其他的应用级别的优化
// }
