<template>
  <!--首部导航栏-->
  <div>
    <div class="col-lg-14" style="width: 100%;position: fixed;top: 0px;z-index: 99999;">
      <ul class="layui-nav">
        <li class="layui-nav-item"><a href="">首页</a></li>
        <li class="layui-nav-item layui-this">
          <a href="javascript:;">分类</a>
          <dl class="layui-nav-child">
            <dd><a>古代</a></dd>
            <dd><a>言情</a></dd>
            <dd><a>武侠</a></dd>
            <dd><a>仙侠</a></dd>
            <dd><a>灵异</a></dd>
            <dd><a>恐怖</a></dd>
            <dd><a>玄幻</a></dd>
            <dd><a>奇幻</a></dd>
            <dd><a>穿越</a></dd>
            <dd><a>都市</a></dd>
            <dd><a>其他书籍</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a>免费</a></li>
        <li class="layui-nav-item">
          <a href="javascript:;">排行</a>
                    <dl class="layui-nav-child">
                      <dd><a>年度排行</a></dd>
                      <dd><a>月度排行</a></dd>
                      <dd><a>7天排行</a></dd>
                      <dd><a>一天排行</a></dd>
                      <dd><a>小时排行</a></dd>
                    </dl>
        </li>
        <li class="layui-nav-item"><a>完结</a></li>
      </ul>
    </div>
    <br><br>
  </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>
