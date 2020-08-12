<template>
  <!--首部导航栏-->
  <div>
    <div class="col-lg-14" style="width: 100%;position: fixed;top: 0px;z-index: 99999;">
      <ul class="layui-nav">
        <li class="layui-nav-item"><a href="">最新活动</a></li>
        <li class="layui-nav-item layui-this">
          <a href="javascript:;">产品</a>
          <dl class="layui-nav-child">
            <dd><a>选项1</a></dd>
            <dd><a>选项2</a></dd>
            <dd><a>选项3</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a>大数据</a></li>
        <li class="layui-nav-item">
          <a href="javascript:;">解决方案</a>
          <dl class="layui-nav-child">
            <dd><a>移动模块</a></dd>
            <dd><a>后台模版</a></dd>
            <dd class="layui-this"><a>选中项</a></dd>
            <dd><a>电商平台</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a>社区</a></li>
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
