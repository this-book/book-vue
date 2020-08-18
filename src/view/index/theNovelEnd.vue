<template>
  <div class="container">
    <div class="row">


      <div class="col-lg-2"></div>

      <div class="col-lg-8" style="background-color: rgba(224,163,163,0.06)">
        <span style="font-family: 华文楷体;font-size: 30px;line-height: 50px">经典完结</span>
        <div id="EndNovel" style="border-top: 1px solid #a0a2a4;width: 100%;">

          <!--遍历完结小说-->
          <span v-for="novels in theNovelEnd">
            <div class="row novel_row">

              <div class="col-lg-6 novel_col">
                <div class="novel_img">
                  <router-link :to="{name: 'getChapters', params: { novelID: novels[0].novelID }}"><img :src="novels[0].novelImg"></router-link>
                </div>
                <div class="novel_info">
                  <p class="novel_name"><router-link :to="{name: 'getChapters', params: { novelID: novels[0].novelID }}">{{novels[0].novelName}}</router-link></p>
                  <div><span class="novel_details">{{novels[0].workInfo}}</span></div>
                  <p class="novel_down">
                    <a href="" class="novel_author"><span>{{novels[0].user.nickName}}</span></a>
                    <a href="" class="novel_type"><span>{{novels[0].noveltypes[0].novelTypeName}}</span></a>
                  </p>
                </div>
              </div>

              <div class="col-lg-6 novel_col">
                <div class="novel_img">
                  <router-link :to="{name: 'getChapters', params: { novelID: novels[1].novelID }}"><img :src="novels[1].novelImg"></router-link>
                </div>
                <div class="novel_info">
                  <p class="novel_name"><router-link :to="{name: 'getChapters', params: { novelID: novels[1].novelID }}">{{novels[1].novelName}}</router-link></p>
                  <div><span class="novel_details">{{novels[1].workInfo}}</span></div>
                  <p class="novel_down">
                    <a href="" class="novel_author"><span>{{novels[1].nickName}}</span></a>
                    <a href="" class="novel_type"><span>{{novels[1].noveltypes[0].novelTypeName}}</span></a>
                  </p>
                </div>
              </div>


            </div>

          </span>

        </div>
      </div>
      <div class="col-lg-2"></div>

    </div>
  </div>
</template>

<script>
  import {theovernovel} from '../../api/novel'

  $(function () {


  })

  export default {
    name: "theNovelEnd",
    data() {
      return {
        theNovelEnd: null,
      }
    },
    methods: {


      /*获取小说数据*/
      getEndNovels() {
        theovernovel().then(result => {
          this.theNovelEnd = result.data
        }).catch(error => {
          console.log(error)
        })
      },
      getChapters(novelID) {
        alert(novelID)
      }


    },
    /*获取8个完结小说*/
    created() {
      this.getEndNovels()
    }

  }
</script>

<style scoped>

</style>
