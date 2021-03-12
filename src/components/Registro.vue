<template>
  <div class="col-12">
    <form class="text-secondary">
      <h5 class="text-dark">Crear cuenta</h5>
      <div class="form-row">
        <div class="form-group col-sm-12 col-md-6">
          <label for="inputEmail">Correo</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            :class="{
              'is-valid': emailValido === true,
              'is-invalid': emailValido === false,
            }"
            id="inputEmail4"
          />
          <div
            v-if="emailValido === false"
            id="validationServer03Feedback"
            class="invalid-feedback"
          >
            Por favor ingresa un email válido
          </div>
        </div>
        <div class="form-group col-sm-12 col-md-6">
          <label for="inputPassword">Contraseña</label>
          <input
            :class="{
              'is-valid': passwordValida === true,
              'is-invalid': passwordValida === false,
            }"
            type="password"
            v-model="password"
            class="form-control"
            id="inputPassword4"
          />

          <div
            v-if="passwordValida === false"
            id="validationServer03Feedback"
            class="invalid-feedback"
          >
            La contraseña tiene que ser de más de 6 caracteres
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="inputNombre">Nombre completo</label>
        <input
          :class="{
            'is-valid': nombreValido === true,
            'is-invalid': nombreValido === false,
          }"
          v-model="nombre"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder=""
        />
        <div
          v-if="nombreValido === false"
          id="validationServer03Feedback"
          class="invalid-feedback"
        >
          Por favor ingresa tu nombre
        </div>
      </div>

      <button
        :disabled="registering"
        v-on:click.prevent="registrarCuenta"
        type="submit"
        class="btn btn-outline-success mt-2"
      >
        {{ registering ? "Registrando cuenta..." : "Crear cuenta" }}

        <img
          v-if="registering"
          class="loader"
          src="../assets/loader.svg"
          alt=""
        />
      </button>
    </form>
    <div
      v-if="registerError"
      class="mt-4 alert alert-dismissible fade show"
      :class="registerError === false ? 'alert-success' : 'alert-danger'"
      role="alert"
    >
      <strong>Creación de cuenta fallida</strong>
    </div>
    <!-- Button trigger modal -->
    <!-- Modal -->
    <p class="p-2">
      Con una cuenta registrada y habiendo iniciado sesión podrás abrir un chats
      con los encargados de los stands.
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Registro",
  data() {
    return {
      email: "",
      password: "",
      nombre: "",
      // Validation
      emailValido: null,
      passwordValida: null,
      nombreValido: null,
    };
  },
  computed: {
    ...mapState("User", ["registering", "registerError"]),
  },
  methods: {
    ...mapActions("User", ["register"]),
    registrarCuenta() {
      this.nombreValido = this.nombre.length > 0 ? true : false;
      this.passwordValida = this.password.length > 5 ? true : false;
      this.emailValido = this.email.includes("@") ? true : false;
      if (this.nombreValido && this.passwordValida && this.emailValido) {
        this.register({
          email: this.email,
          password: this.password,
          displayName: this.nombre,
        });
      }
    },
  },
};
</script>

<style>
.curriculum-preview {
  min-width: 100%;
  min-height: 95%;
}
.modal-body-curriculum {
  min-height: 80vh;
}
.modal-dialog-curriculum {
  min-width: 60vw !important;
}
.loader {
  height: 1em;
}
</style>
