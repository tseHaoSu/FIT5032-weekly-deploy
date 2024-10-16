import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import LandingPage from "../components/LandingPage.vue";
import HomePage from "../components/HomePage.vue";
import AdminPage from "../components/AdminPage.vue";
import SideNavigation from "../components/SideNavigation.vue";
import AddBook from "../components/AddBook.vue";
import GetBookCountView from "../components/GetBookCountView.vue";
import WeatherView from "../components/WeatherView.vue";



const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/sidenav",
    name: "SideNavigation",
    component: SideNavigation,
  },
  {
    path: "/addbook",
    name: "AddBook",
    component: AddBook,
  },
  {
    path: "/getBookCount",
    name: "GetBookCountView",
    component: GetBookCountView,
  },
  {
    path: "/weather",
    name: "WeatherView",
    component: WeatherView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
