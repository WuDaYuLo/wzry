<template>
  <div class="CategoryList">
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="Id" width="230"></el-table-column>
     
      <el-table-column prop="title" label="文章名称"></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        <el-button type="primary" size="small" @click="$router.push(`/articles/edit/${scope.row._id}`)">编辑</el-button>
        <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[]
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get('rest/articles')
      this.items = res.data
    },

    async remove(row){
      console.log("row=",row)
      this.$confirm(`是否确认删除文章 "${row.title}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.$http.delete(`rest/articles/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        });
    }
  },
  created(){
    this.fetch()
  }
}
</script>
