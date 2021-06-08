import Vue from "vue";
import VueRouter from "vue-router";
const Layout = () => import("../views/layout/index.vue");
const Login = () => import("../views/login/login.vue");
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

const CompanyStatistics = () => import("../views/labour/companyStatistics.vue");
const TeamStatistics = () => import("../views/labour/teamStatistics.vue");
const OperatingPerson = () => import("../views/labour/operatingPerson.vue");
const ManagementPerson = () => import("../views/labour/managementPerson.vue");

const TowerList = () => import("../views/tower/towerList.vue");
const OperationRecord = () => import("../views/tower/operationRecord.vue");
const ReadingRecord = () => import("../views/tower/readingRecord.vue");
const VideoExamine = () => import("../views/tower/videoExamine.vue");

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
export const constRoutes = [
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

export const asyncRoutes = [
  {
    path: "/workstage",
    component: Layout,
    name: "Workstage",
    meta: {
      title: "工作台",
      icon: "el-icon-s-help",
      menuId: 100,
      code: "CONTROLBOARD",
    },
    children: [
      {
        path: "companyStatistics",
        name: "CompanyStatistics",
        component: CompanyStatistics,
        meta: {
          title: "参建单位统计",
          icon: "CompanyStatistics",
          menuId: 101,
          code: "LPRN",
        },
      },
      {
        path: "teamStatistics",
        name: "TeamStatistics",
        component: TeamStatistics,
        meta: {
          title: "项目班组统计",
          icon: "TeamStatistics",
          menuId: 102,
          code: "LPRN",
        },
      },
      {
        path: "operatingPerson",
        name: "OperatingPerson",
        component: OperatingPerson,
        meta: {
          title: "施工作业人员",
          icon: "OperatingPerson",
          menuId: 103,
          code: "LPRN",
        },
      },
      {
        path: "managementPerson",
        name: "ManagementPerson",
        component: ManagementPerson,
        meta: {
          title: "施工管理人员",
          icon: "ManagementPerson",
          menuId: 104,
          code: "LPRN",
        },
      },
      {
        path: "towerList",
        name: "TowerList",
        component: TowerList,
        meta: {
          title: "塔机列表",
          icon: "icon-person_location_manage",
          menuId: 105,
          code: "TCVA",
        },
      },
      {
        path: "operationRecord",
        name: "OperationRecord",
        component: OperationRecord,
        meta: {
          title: "运行记录",
          icon: "icon-personLoacation_another_config",
          menuId: 106,
          code: "TCVA",
        },
      },
      {
        path: "readingRecord",
        name: "ReadingRecord",
        component: ReadingRecord,
        meta: {
          title: "读数记录",
          icon: "icon-personlocationAnother_01",
          menuId: 107,
          code: "TCVA",
        },
      },
      {
        path: "videoExamine",
        name: "VideoExamine",
        component: VideoExamine,
        meta: {
          title: "录像查看",
          icon: "icon-personlocationAnother_04",
          menuId: 108,
          code: "TCVA",
        },
      },
    ],
  },

  {
    path: "/message",
    component: Layout,
    redirect: "/message/unreadMessage",
    name: "Message",
    meta: { title: "消息", icon: "el-icon-s-help", menuId: 200 },
    children: [
      {
        path: "unreadMessage",
        name: "UnreadMessage",
        component: UnreadMessage,
        meta: { title: "未读消息", icon: "UnreadMessage", menuId: 201 },
      },
      {
        path: "readedMessage",
        name: "ReadedMessage",
        component: ReadedMessage,
        meta: { title: "已读消息", icon: "ReadedMessage", menuId: 202 },
      },
      {
        path: "totalMessage",
        name: "TotalMessage",
        component: TotalMessage,
        meta: { title: "全部消息", icon: "TotalMessage", menuId: 203 },
      },
    ],
  },

  {
    path: "/workflow",
    component: Layout,
    redirect: "/workflow/pending",
    name: "Workflow",
    meta: { title: "待办事项", icon: "el-icon-s-help", menuId: 300 },
    children: [
      {
        path: "pending",
        name: "Pending",
        component: Pending,
        meta: { title: "待处理", icon: "Pending", menuId: 301 },
      },
      {
        path: "processed",
        name: "Processed",
        component: Processed,
        meta: { title: "已处理", icon: "Processed", menuId: 302 },
      },
      {
        path: "completed",
        name: "Completed",
        component: Completed,
        meta: { title: "已完成", icon: "Completed", menuId: 303 },
      },
    ],
  },

  {
    path: "/setttings",
    component: Layout,
    redirect: "/setttings/basicsetting",
    name: "Setting",
    meta: { title: "设置", icon: "el-icon-s-help", menuId: 400 },
    children: [
      {
        path: "basicsetting",
        name: "Basicsetting",
        component: Basicsetting,
        meta: { title: "基本信息", icon: "Basicsetting", menuId: 401 },
      },
      {
        path: "securitysetting",
        name: "Securitysetting",
        component: Securitysetting,
        meta: { title: "安全设置", icon: "Securitysetting", menuId: 402 },
      },
      {
        path: "noticesetting",
        name: "Noticesetting",
        component: Noticesetting,
        meta: { title: "通知设置", icon: "Noticesetting", menuId: 403 },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes: [...constRoutes],
});

export default router;
