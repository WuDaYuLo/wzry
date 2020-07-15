<template>
    <el-container style="height: 100vh">
      <!-- 头部 -->
      <el-header style="text-align: right; font-size: 12px">
      <div class="logo-title">
          <img src="../assets/img/home/logo1.png" alt="王者荣耀">
          <h2>王者荣耀后台管理系统</h2>
      </div>
        <el-button type="text" size="middle" style="color:grey" @click="loginOut"> <i class="el-icon-switch-button" style="color:#fdb933"></i> 退出</el-button>
      </el-header>


          <el-container>
            <!-- 侧边栏菜单 -->
              <el-aside width="201px" style="background-color: #252a40">
                <el-menu router :default-active="activePath" unique-opened
            background-color="#252a40" text-color="#fff" active-text-color="#fdb933">
                  <!-- 内容管理一级菜单 -->
                  <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>分类管理</template>
                    <!-- 内容管理二级菜单 -->
                    <el-menu-item-group>
                      <template slot="title">分类</template>
                      <el-menu-item index="/categories/create">新建分类</el-menu-item>
                      <el-menu-item index="/categories/list">分类列表</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <!-- 物品管理一级菜单 -->
                  <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>物品管理</template>
                    <!-- 物品管理二级菜单 -->
                    <el-menu-item-group>
                      <template slot="title">物品</template>
                      <el-menu-item index="/items/create">新建物品</el-menu-item>
                      <el-menu-item index="/items/list">物品列表</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                    
                  <!-- 英雄管理一级菜单 -->
                  <el-submenu index="3">
                    <template slot="title"><i class="el-icon-message"></i>英雄管理</template>
                    <!-- 英雄管理二级菜单 -->
                    <el-menu-item-group>
                      <template slot="title">英雄</template>
                      <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
                      <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <!-- 文章管理 -->
                  <el-submenu index="4">
                    <template slot="title"><i class="el-icon-message"></i>文章管理</template>
                    <!--文章管理二级菜单 -->
                    <el-menu-item-group>
                      <template slot="title">文章</template>
                      <el-menu-item index="/articles/create">新建文章</el-menu-item>
                      <el-menu-item index="/articles/list">文章列表</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <!-- 广告位管理 -->
                  <el-submenu index="5">
                    <template slot="title"><i class="el-icon-message"></i>运营管理</template>
                    <el-menu-item-group>
                      <template slot="title">广告位</template>
                      <el-menu-item index="/ads/create">新建广告位</el-menu-item>
                      <el-menu-item index="/ads/list">广告位列表</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>

                  <!-- 系统设置 -->
                  <el-submenu index="6">
                    <template slot="title"><i class="el-icon-message"></i>系统设置</template>
                    <el-menu-item-group>
                      <template slot="title">管理员</template>
                      <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
                      <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
                    </el-menu-item-group>

                  </el-submenu>

                </el-menu>
              </el-aside>
        
                  <!-- 内容主体区域 -->
              <el-main>
                <router-view></router-view>
              </el-main>
      </el-container>

  </el-container>

    
</template>


<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    computed: {
      activePath() {
        return this.$route.path
      },
    },
    methods: {
    // 退出登陆
      loginOut() {
        this.$confirm('是否退出当前账户?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async () => {
            window.localStorage.clear()
            this.$router.push('/login')
          })
        
      }
    }
  };
</script>


<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#11131f, #252a40);
  color: #eee;
}
.logo-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>