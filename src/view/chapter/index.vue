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
      this.novelID = this.$route.params.novelID



    }
  }
</script>

<style scoped>

</style>
