import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Laundry from "../views/Laundry.vue";
import OrderDetail from "../views/OrderDetail.vue";
import HistoryView from "../views/History.vue";
import SearchView from "../views/SearchView.vue";
import MapView from "../views/MapView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/laundry",
    name: "Laundry",
    component: Laundry,
  },
  {
    path: "/orderDetail",
    name: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "/historyView",
    name: "historyView",
    component: HistoryView,
  },
  {
    path: "/searchView",
    name: "searchView",
    component: SearchView,
  },
  {
    path: "/mapView",
    name: "mapView",
    component: MapView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
