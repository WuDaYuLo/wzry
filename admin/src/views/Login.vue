<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      model:{}
    }
  },
  methods:{
    async login(){
      if(this.model.username===''||this.model.username===null||this.model.username===undefined){
        this.$message({
          type:'error',
          message:'用户名没填写'
        })
        return false;
      }

      if(this.model.password===''||this.model.password===null||this.model.password===undefined){
        this.$message({
          type:'error',
          message:'密码没填写'
        })
        return false;
      }
      const res = await this.$http.post('login',this.model)
      // 浏览器关闭就没了
      // sessionStorage.token = res.data.token
      
      // 关闭浏览器还在 只要同一个网址就行
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type:'success',
        message:'登录成功'
      })
    }
  }
}
</script>


<style>

.login-card{
  width: 25rem;
  margin: 5rem auto;
}
</style>
