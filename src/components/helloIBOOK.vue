<template>
  <div>

    <!--首部导航栏-->
    <navigation></navigation>

    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="height: 50px"></div>
      </div>
    </div>

    <!--菜单、轮播图-->
    <menuAndSlideshow></menuAndSlideshow>

    <!--经典完结-->
    <theNovelEnd></theNovelEnd>


  </div>
</template>

<script>
  import {test} from '../api/testAPI'
  import navigation from "../view/index/navigation";
  import menuAndSlideshow from "../view/index/menuAndSlideshow";
  import theNovelEnd from "../view/index/theNovelEnd";

  $(function () {
    $('.carousel').carousel({
      interval: 3000
    })
  })

  export default {
    name: 'helloIBOOK',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    methods: {

      submit: function () {
        test('Hxb', '579').then(result => {
          console.log(result)
        }).catch(error => {
          console.log(error.msg + ' ' + error.data)
        })
      }

    },
    created() {
      layui.use('element', function () {
        let element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

        //监听导航点击
        element.on('nav(demo)', function (elem) {
          layer.msg(elem.text());
        });
      });
    },
    components: {
      //头部组件注册
      navigation,
      //菜单、轮播图
      menuAndSlideshow,
      theNovelEnd,
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    cursor: pointer;
  }
</style>
