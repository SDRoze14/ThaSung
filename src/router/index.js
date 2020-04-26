import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Equipment from '../views/Equipment.vue'
import OrderEquipment from '../views/OrderEquipment.vue'
import Medical from '../views/Medical.vue'
import OrderMedical from '../views/OrderMedical.vue'
import PatientInfo from '../views/PatientInfo.vue'
import Schedule from '../views/Schedule.vue'
import SettingUser from '../views/SettingUser.vue'
import Setting from '../views/Setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Equipment',
    name: 'Equipment',
    component: Equipment
  },
  {
    path: '/OrderEquipment',
    name: 'OrderEquipment',
    component: OrderEquipment
  },
  {
    path: '/Medical',
    name: 'Medical',
    component: Medical
  },
  {
    path: '/OrderMedical',
    name: 'OrderMedical',
    component: OrderMedical
  },
  {
    path: '/PatientInfo',
    name: 'PatientInfo',
    component: PatientInfo
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/SettingUser',
    name: 'SettingUser',
    component: SettingUser
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
