import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/home";
import Register from "../views/register";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  ],
});
