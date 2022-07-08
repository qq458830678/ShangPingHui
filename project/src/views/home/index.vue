<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor1></Floor1>
    <Floor2></Floor2>
  </div>
</template>
<script>
import TypeNav from "./TypeNav/index.vue";
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank";
import Like from "./Like";
import Floor1 from "./Floor/Floor1";
import Floor2 from "./Floor/Floor2";
export default {
  name: "Home",
  components: { TypeNav, ListContainer, Recommend, Rank, Like, Floor1, Floor2 },
};
</script>
<style lang="less"></style>
