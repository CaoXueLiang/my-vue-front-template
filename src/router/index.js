import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/Home.vue");
const Layout = () => import("../views/layout/index.vue");
const Login = () => import("../views/login/login.vue");
const About = () => import("../views/About.vue");
const Workstage = () => import("../views/workstage/workstage.vue");
const UnreadMessage = () => import("../views/message/unreadMessage.vue");
const ReadedMessage = () => import("../views/message/readedMessage.vue");
const TotalMessage = () => import("../views/message/totalMessage.vue");
const Pending = () => import("../views/workflow/pending.vue");
const Processed = () => import("../views/workflow/processed.vue");
const Completed = () => import("../views/workflow/completed.vue");
const Basicsetting = () => import("../views/settings/basicsetting.vue");
const Securitysetting = () => import("../views/settings/securitysetting.vue");
const Noticesetting = () => import("../views/settings/noticesetting.vue");

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
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
];

const asyncRoutes = [
  {
    path: "/message",
    component: Layout,
    redirect: "/message/unreadMessage",
    name: "Message",
    meta: { title: "示例", icon: "el-icon-s-help", menuId: 10 },
    children: [
      {
        path: "unreadMessage",
        name: "UnreadMessage",
        component: UnreadMessage,
        meta: { title: "未读消息", icon: "UnreadMessage", menuId: 11 },
      },
      {
        path: "readedMessage",
        name: "ReadedMessage",
        component: ReadedMessage,
        meta: { title: "已读消息", icon: "ReadedMessage", menuId: 13 },
      },
      {
        path: "totalMessage",
        name: "TotalMessage",
        component: TotalMessage,
        meta: { title: "全部消息", icon: "TotalMessage", menuId: 13 },
      },
    ],
  },

  {
    path: "/workflow",
    component: Layout,
    redirect: "/workflow/pending",
    name: "Workflow",
    meta: { title: "待办事项", icon: "el-icon-s-help", menuId: 10 },
    children: [
      {
        path: "pending",
        name: "Pending",
        component: Pending,
        meta: { title: "待处理", icon: "Pending", menuId: 11 },
      },
      {
        path: "processed",
        name: "Processed",
        component: Processed,
        meta: { title: "已处理", icon: "Processed", menuId: 13 },
      },
      {
        path: "completed",
        name: "Completed",
        component: Completed,
        meta: { title: "已完成", icon: "Completed", menuId: 13 },
      },
    ],
  },

  {
    path: "/setttings",
    component: Layout,
    redirect: "/setttings/basicsetting",
    name: "Setting",
    meta: { title: "设置", icon: "el-icon-s-help", menuId: 10 },
    children: [
      {
        path: "basicsetting",
        name: "Basicsetting",
        component: Basicsetting,
        meta: { title: "基本信息", icon: "Basicsetting", menuId: 11 },
      },
      {
        path: "securitysetting",
        name: "Securitysetting",
        component: Securitysetting,
        meta: { title: "安全设置", icon: "Securitysetting", menuId: 13 },
      },
      {
        path: "noticesetting",
        name: "Noticesetting",
        component: Noticesetting,
        meta: { title: "通知设置", icon: "Noticesetting", menuId: 13 },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes: [...constRoutes, ...asyncRoutes],
});

export default router;
