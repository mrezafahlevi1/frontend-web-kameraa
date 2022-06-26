import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../views/LogIn.vue";
import InputCameraVue from "../views/InputCamera.vue";
import DataPeminjamVue from "../views/DataPeminjam.vue";
import RiwayatPeminjamVue from "../views/RiwayatPeminjam.vue";
import HomeViewVue from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LogIn,
    },
    {
      path: "/HomeView",
      name: "HomeView",
      component: HomeViewVue,
    },
    {
      path: "/InputCamera",
      name: "InputCamera",
      component: InputCameraVue,
    },
    {
      path: "/DataPeminjam",
      name: "DataPeminjam",
      component: DataPeminjamVue,
    },
    {
      path: "/RiwayatPeminjam",
      name: "RiwayatPeminjam",
      component: RiwayatPeminjamVue,
    },
  ],
});

export default router;
