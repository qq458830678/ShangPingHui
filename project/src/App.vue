<template>
  <div class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Home from "@/views/home/index.vue";
export default { name: "App", components: { Header, Footer, Home } };
</script>
<style></style>
