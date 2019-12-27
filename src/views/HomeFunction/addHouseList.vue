<template>
  <div>
        <navBar title="上传列表" ></navBar>
        <houseList v-for="item in list"></houseList>
        
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:['','','']

        }
    }
}
</script>

<style>

</style>