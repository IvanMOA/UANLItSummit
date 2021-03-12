import { db, auth } from "../../firebase.js";
import Swal from "sweetalert2";
const estudiantesCollection = db.collection("estudiantes");
console.log(estudiantesCollection);
const state = {
  // User, global variable
  user: null,
  tempUser: null,
  // Login
  loggingIn: false,
  loginError: null,
  manualLogin: false,
  // Register
  registering: false,
  registerError: null,
  justRegistered: false,
};

const actions = {
  login({ commit }, { email, password }) {
    commit("loginAttempt");
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      commit("errorLogin", error);
    });
  },
  async register({ commit, state }, { email, password, displayName }) {
    commit("registerAttempt");
    try {
      let user = await auth.createUserWithEmailAndPassword(email, password);
      await user.user.updateProfile({ displayName: displayName });
      state.user.displayName = displayName;
      await estudiantesCollection
        .doc(user.user.uid)
        .set({ idChats: [], id: user.user.uid });
    } catch (error) {
      commit("registerError", error);
    }
  },
  logout({ commit }) {
    commit("logout");
  },
};

const mutations = {
  setUser(state, user) {
    state.user = { ...user };
    state.loginError = false;
    state.registerError = false;
    if (state.manualLogin === true) {
      state.loggingIn = false;
      state.registering = false;
      state.manualLogin = false;
      Swal.fire({
        icon: "success",
        title: "Sesión iniciada",
        text:
          "Has iniciado sesión, ahora puedes abrir chats con los encargados de los stands.",
      });
    }
    if (state.justRegistered === true) {
      state.loggingIn = false;
      state.registering = false;
      Swal.fire({
        icon: "success",
        title: "Sesión iniciada",
        text:
          "Has iniciado sesión, ahora puedes abrir chats con los encargados de los stands.",
      });
    }

    state.logueando = false;
  },
  loginAttempt(state) {
    state.manualLogin = true;
    state.loggingIn = true;
  },
  registerAttempt(state) {
    state.justRegistered = true;
    state.registering = true;
  },
  registerError(state, error) {
    state.registering = false;
    state.registerError = error;
  },
  registerSuccess(state) {
    (state.registerError = false), (state.registering = false);
  },
  errorLogin(state, error) {
    state.loggingIn = false;
    state.loginError = error;
  },
  logout(state) {
    auth.signOut();
    state.user = null;
    Swal.fire({
      position: "bottom-end",
      icon: "info",
      iconColor: "#2A589F",
      title: "Sesión cerrada",
      showConfirmButton: false,
      timer: 1500,
    });
  },
  resetAlert(state) {
    state.loginError = null;
    state.registerError = null;
    state.loggingIn = false;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
