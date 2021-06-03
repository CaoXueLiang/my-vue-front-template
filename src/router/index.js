import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
const Layout = () => import("../views/layout/index.vue");
const Login = () => import("../views/login/login.vue");
const About = () => import("../views/About.vue");
const Workstage = () => import("../views/workstage/workstage.vue");

Vue.use(VueRouter);
const constRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/workstage",
    children: [
      {
        path: "/workstage",
        name: "Workstage",
        component: Workstage,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  routes: constRoutes,
});

export default router;
