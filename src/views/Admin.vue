<template>
  <div class="admin">
    <el-container>
        <!-- 头部区域 -->
        <el-header>
             <div class="title">
                 电商后台管理
             </div>
             <el-button type="primary" size="medium">
                 退出
             </el-button>

        </el-header>
         <!-- 内容区域 -->
        <el-container>
                <!-- 左侧区域 -->
                <el-aside width="200px">
                    <!--  左侧伸缩  -->
                       <div class="topbar">|||</div>
                       <!-- 左侧菜单 -->
 <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
     
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>选项1</span>
                </template>
            </el-menu-item>
      </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="2-1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>选项1</span>
                </template>
            </el-menu-item>
      </el-submenu>
    </el-menu>




                </el-aside>
                <!-- 右侧内容 -->
                <el-main>
                      <!-- 子路由的出口 -->

                </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  async created(){
      var res = await this.http.get("/menus");

      console.log(res)
  },
  mounted(){}
}
</script>
<style scoped lang="scss">
.admin{
    height: 100%;

.el-header{
    background-color: #373d41;
    justify-content: space-between;
    display: flex;
    align-items: center;
    .title{
        font-size: 24px;
        color:#fff;

    }
}
.el-container{
    height: 100%;
    .el-aside{
            background-color: #333744;
            height: 100%;
            .topbar{
                    background-color: #4a5064;
                    color: #fff;
                    font-size: 12px;
                    text-align: center;
                    line-height: 22px;
                    cursor: pointer;
                    letter-spacing: .12em;
            }
        }
}

}
</style>