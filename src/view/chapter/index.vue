<template>
  <div>
    {{novelID}}
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        novelID: null,
      }
    },



    created() {
      /*获取传来的小说ID*/
      this.novelID = this.$route.params.novelID
    }
  }
</script>

<style scoped>

</style>
