import Router from "vue-router";
// import { auth } from "../main";
import Vue from "vue";

const RecorridoAFrame = () => import("@/RecorridoAFrame.vue");
const Contenido = () => import("@/components/Contenido.vue");

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "recorridovirtual",
    component: RecorridoAFrame,
  },
  {
    path: "/mapa",
    name: "Mapa",
    component: Contenido,
  },
];

const router = new Router({ routes });

// Quitar comentario en caso de necesitar autencticación en ciertas rutas

//
//router.beforeEach((to, from, next) => {
//  const paginasPrivadas = ["/recorridovirtual"];
//  const usuario = auth.currentUser;
//  let estaLogueado = false;
//  if (!usuario) estaLogueado = false;
//  if (usuario && usuario.emailVerified) {
//    estaLogueado = true;
//  }
//  if (paginasPrivadas.includes(to.path) && estaLogueado == true) {
//    next();
//  } else if (paginasPrivadas.includes(to.path) && estaLogueado == false) {
//    next("/recorrido");
//  } else {
//    next();
//  }
//});
//
export default router;
