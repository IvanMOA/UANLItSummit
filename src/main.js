import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";
import { auth, db } from "./firebase";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  "a-cylinder",
  "a-plane",
  "a-box",
  "a-sphere",
  "a-image",
  "a-sky",
  "a-entity",
  "a-cursor",
  "a-scene",
  "a-assets",
  "a-camera",
  "a-asset-item",
  "a-octahedron",
  "a-animation",
];

let vueApp;
auth.onAuthStateChanged((user) => {
  if (user) {
    let userProfile = user;
    db.collection("estudiantes")
      .doc(user.uid)
      .onSnapshot(function (doc) {
        let nuevosDatosAdicionales = doc.data();
        let user = { ...userProfile, ...nuevosDatosAdicionales };
        store.commit("User/setUser", { ...user });
      });
  }

  if (!vueApp) {
    vueApp = new Vue({
      store,
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
