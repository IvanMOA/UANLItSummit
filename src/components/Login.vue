<template>
  <div class="col-12">
    <form class="text-secondary">
      <h5 class="text-dark">Iniciar sesión</h5>
      <div class="form-row">
        <div class="form-group col-sm-12 col-md-6">
          <label for="inputEmail">Correo</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="inputEmail4"
          />
        </div>
        <div class="form-group col-sm-12 col-md-6">
          <label for="inputPassword">Contraseña</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="inputPassword4"
          />
        </div>
      </div>

      <button
        v-on:click.prevent="iniciarSesion"
        type="submit"
        class="btn btn-outline-success"
      >
        Iniciar sesión
      </button>
    </form>
    <!--
    <div class="mt-2">
      <a class="forgotPass" type="button" v-on:click="resetPassword"
        >Olvidé mi contraseña</a
      >
    </div>
    -->
    <div
      v-if="loginError"
      class="mt-2 alert-danger alert alert-dismissible fade show"
      role="alert"
    >
      <strong>Correo o contraseña incorrectos</strong>
      Por favor intentalo de nuevo
      <button
        type="button"
        class="close"
        v-on:click="resetAlert"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- Button trigger modal -->
    <!-- Modal -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState("User", ["user", "loggingIn", "loginError"]),
  },
  methods: {
    ...mapActions("User", ["login"]),
    ...mapMutations("User", ["resetAlert"]),
    iniciarSesion() {
      this.login({ email: this.email, password: this.password });
    },
  },
};
</script>

<style>
.forgotPass {
  color: gray !important;
}
</style>
