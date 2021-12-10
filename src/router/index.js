import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import showStudent from "../views/showStudent.vue";
import showCapstones from "../views/showCapstones.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/student/:id", name: "showStudent", component: showStudent },
  { path: "/student/capstone", name: "showCapstones", component: showCapstones },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
