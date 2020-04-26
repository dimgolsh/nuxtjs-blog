<template>
 <el-container>
  <el-header>
<AppNavigation></AppNavigation>

  </el-header>
  <el-main>
    <nuxt />
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>


</template>

<script>
import AppNavigation from '@/components/main/Navigation'
export default {
  components:{
    AppNavigation
  }
}
</script>

<style>

</style>
