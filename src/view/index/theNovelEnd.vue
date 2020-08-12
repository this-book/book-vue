<template>
  <div class="container">
    <div class="row">

      <div class="col-lg-2"></div>

      <div class="col-lg-8" style="border-top: 0.3px solid #a0a2a4"  id="EndNovel">
        <br><br>






      </div>

      <div class="col-lg-2">

      </div>

    </div>
  </div>
</template>

<script>
  import {theovernovel} from '../../api/novel'

  $(function () {


  })

  export default {
    name: "theNovelEnd",
    data(){
      return{

      }
    },
    methods:{


      getEndNovels(){
        theovernovel().then(result =>{
          let list = result.data
          let row = ''
          for (let i = 0; i < list.length; i++) {

            if(i%2 == 0){
              row = '<div class="row novel_row">'
            }

            let novelTypeName = list[i].novelNoveltypes[0].novelTypeName
            if (list[i].novelNoveltypes[0].novelTypeName.length==2){
              novelTypeName += list[i].novelNoveltypes[1].novelTypeName
            }

            row += '<div class="col-lg-6 novel_col">\n' +
              '            <div class="novel_img">\n' +
              '              <a href=""><img src="'+list[i].novelImg+'"></a>\n' +
              '            </div>\n' +
              '            <div class="novel_info">\n' +
              '              <p class="novel_name"><a href="#">'+list[i].novelName+'</a></p>\n' +
              '              <div><span class="novel_details">'+list[i].workInfo+'</span></div>\n' +
              '              <p class="novel_down">\n' +
              '                <a href="" class="novel_author"><span>'+list[i].user.nickName+'</span></a>\n' +
              '                <a href="" class="novel_type"><span>'+novelTypeName+'</span></a>\n' +
              '              </p>\n' +
              '            </div>\n' +
              '          </div>'

            if(i%2 != 0){
              row += '</div>'
              $('#EndNovel').append(row)
            }

          }

        }).catch(error =>{
          console.log(error)
        })
      }


    },
    created() {
      this.getEndNovels()
    }

  }
</script>

<style scoped>

</style>
