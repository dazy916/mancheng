import { createApp } from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem,Tab, Tabs,Image as VanImage,Icon,Col, Row,Divider,Popup ,Button,Overlay,Sidebar, SidebarItem  } from 'vant';
import routerIndex from '../router/router'

createApp(App)
.use(routerIndex)
.use(Tabbar)
.use(TabbarItem)
.use(Tab)
.use(Tabs)
.use(VanImage)
.use(Icon)
.use(Col)
.use(Row)
.use(Divider)
.use(Popup)
.use(Button )
.use(Overlay )
.use(Sidebar)
.use(SidebarItem)
.mount('#app')
