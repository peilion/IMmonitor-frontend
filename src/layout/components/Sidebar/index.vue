<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <logo :collapse="isCollapse" />
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <!--<div class="logo">-->
      <!--<a href="#" class="logo-mini">-->
      <!--<div class="logo-img">-->
      <!--<img src="/src/assets/motor/鹿.svg" alt="">-->
      <!--</div>-->
      <!--</a>-->
      <!--<a href="#" target="_blank" class="logo-normal">-->
      <!--Motor Platform-->
      <!--</a>-->
      <!--</div>-->
      <!--<el-divider class="divider"/>-->
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import logo from './Logo'
export default {
  components: { SidebarItem, logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
