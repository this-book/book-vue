<template>
  <div class="container">
    <div class="row">

      <div class="col-lg-2"></div>

      <div class="col-lg-8">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="img_1" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img :src="img_2" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img :src="img_3" class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <div class="col-lg-2"></div>

    <br><br>
  </div>
</template>

<script>
  export default {
    name: "menuAndSlideshow",
    data(){
      return{
        img_1: require("../../assets/img/5d88b143eeb411e2c529c2057e7241db.jpeg"),
        img_2: require("../../assets/img/8e1d0bf2152411d68f96379871f23225.jpeg"),
        img_3: require("../../assets/img/ee0a69bff82345ea7c67895d87f0e0bb.jpeg"),
      }
    }
  }
</script>

<style scoped>

</style>
