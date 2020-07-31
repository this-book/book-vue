<template>
  <div>



    <ul class="layui-nav" style="width: 100%;margin-top: 0px;position: fixed;top: 0px">
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


    <div style="height: 10000px">
      <br><br><br><br><br>
      <button type="button" class="btn btn-primary" @click="submit">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>

  </div>
</template>

<script>
  import {test} from '../api/testAPI'

$(function () {


})

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

    submit: function () {
      test('Hxb', '579').then(result => {
        console.log(result)
      }).catch(error => {
        console.log(error.msg+' '+error.data)
      })
    }

  },
  created() {
    layui.use('element', function(){
      var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

      //监听导航点击
      element.on('nav(demo)', function(elem){
        //console.log(elem)
        layer.msg(elem.text());
      });
    });
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    cursor: pointer;
  }
</style>
