import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import Dashboard from "@/views/dashBoard.vue";
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "home page",
      needNav: true,
      needFooter: true,
    },
    // redirect: "/testone",
    // component: () => import("@/views/HomePage.vue"),
    component: () => import("@/views/testone.vue"),
    // component: () => import("@/views/testone"),
  },
  {
    path: "/coupon",
    name: "coupon",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/coupon.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/landing.vue"),
  },
  {
    path: "/testone",
    name: "testone",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/testone.vue"),
  },
  {
    path: "/testtwo",
    name: "testtwo",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/testtwo.vue"),
  },
  {
    path: "/testthree",
    name: "testthree",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/testthree.vue"),
  },
  {
    path: "/testFour",
    name: "testFour",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/testFour.vue"),
  },
  {
    path: "/testFive",
    name: "testFive",
    meta: {},
    // redirect: "/home",
    component: () => import("@/views/testFive.vue"),
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("@/views/notFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  // history: createWebHistory('/Godsword/'),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (!store.getters.g_isLogin && to.name !== "Login") {
//     const _authData = sessionStorage.getItem("authData")
//       ? JSON.parse(sessionStorage.getItem("authData"))
//       : null;

//     if (!!_authData?.token) {
//       store.commit("m_setUserData", _authData);
//       next();
//     } else {
//       next({ name: "Login" });
//     }
//   } else {
//     next();
//   }
// });

export default router;
