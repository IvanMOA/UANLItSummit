<template>
  <div>
    <nav
      class="topnav navbar navbar-expand shadow navbar-light bg-white"
      id="sidenavAccordion"
    >
      <a v-on:click.prevent="Nada" class="navbar-brand text-innovation" href="">
        <img src="static/img/PNGLOGO.png" alt="" class="img-fluid" />
        FCQ UANL
      </a>
      <button
        class="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
        id="sidebarToggle"
        href="#"
      >
        <i data-feather="menu"></i>
      </button>
      <form
        v-on:submit.prevent="Nada"
        class="form-inline mr-auto d-none d-md-block"
      ></form>
      <ul class="navbar-nav align-items-center ml-auto">
        <li class="nav-item dropdown no-caret mr-3 d-md-none">
          <a
            class="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="searchDropdown"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i data-feather="search"></i
          ></a>
          <!-- Dropdown - Search-->
          <div
            class="dropdown-menu dropdown-menu-right p-3 shadow animated--fade-in-up"
            aria-labelledby="searchDropdown"
          >
            <form class="form-inline mr-auto w-100">
              <div class="input-group input-group-joined input-group-solid">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <i data-feather="search"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li class="nav-item no-caret mr-3 d-none d-md-inline">
          <a
            class="nav-link"
            id="navbarDropdownDocs"
            href=""
            v-on:click.prevent="Nada"
          >
            <div class="d-none d-md-inline font-weight-500">
              {{ this.usuario.perfil }}
            </div>
          </a>
        </li>
        <li class="nav-item dropdown no-caret mr-2 dropdown-user">
          <a
            class="btn btn-icon btn-transparent-dark dropdown-toggle"
            id="navbarDropdownUserImage"
            href="javascript:void(0);"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><img
              v-if="usuario.uid != null"
              class="img-fluid"
              :src="
                'https://ui-avatars.com/api/?name=' +
                usuario.displayName +
                '&background=dc5c64&color=FFF'
              "
          /></a>
          <div
            class="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
            aria-labelledby="navbarDropdownUserImage"
          >
            <h6 class="dropdown-header d-flex align-items-center">
              <img
                v-if="usuario.uid != null"
                class="dropdown-user-img"
                :src="
                  'https://ui-avatars.com/api/?name=' +
                  usuario.displayName +
                  '&background=dc5c64&color=FFF'
                "
              />
              <div class="dropdown-user-details">
                <div class="dropdown-user-details-name">
                  {{ this.usuario.displayName }}
                </div>
                <div class="dropdown-user-details-email">
                  {{ this.usuario.email }}
                </div>
              </div>
            </h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="" v-on:click.prevent="Nada">
              <div class="dropdown-item-icon">
                <i data-feather="settings"></i>
              </div>
              Perfil
            </a>
            <a class="dropdown-item" href="" v-on:click.prevent="salir">
              <div class="dropdown-item-icon">
                <i data-feather="log-out"></i>
              </div>
              Salir
            </a>
          </div>
        </li>
      </ul>
    </nav>
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-light">
          <div class="sidenav-menu">
            <div class="nav accordion" id="accordionSidenav">
              <div class="sidenav-menu-heading">Tablero</div>
              <a
                v-on:click.prevent="EjecutarRuta('Dashboard')"
                :class="{
                  li_active: menu.opcion_activa == 'Dashboard',
                }"
                class="nav-link"
                href=""
              >
                <div class="nav-link-icon">
                  <i data-feather="activity"></i>
                </div>
                Dashboard
              </a>
              <div class="sidenav-menu-heading">{{ this.usuario.perfil }}</div>
              <a
                v-on:click.prevent="EjecutarRuta('Posters')"
                :class="{
                  li_active: menu.opcion_activa == 'Posters',
                }"
                class="nav-link"
                href=""
              >
                <div class="nav-link-icon">
                  <i class="fas fa-images"></i>
                </div>
                Posters
              </a>
              <div class="sidenav-menu-heading">Config</div>
              <a
                v-on:click.prevent="EjecutarRuta('Usuarios')"
                :class="{
                  li_active: menu.opcion_activa == 'Usuarios',
                }"
                class="nav-link"
                href=""
              >
                <div class="nav-link-icon">
                  <i class="fas fa-user-cog"></i>
                </div>
                Usuarios
              </a>
            </div>
          </div>
          <div class="sidenav-footer">
            <div class="sidenav-footer-content">
              <div class="sidenav-footer-subtitle">Iniciado Sesión:</div>
              <div class="sidenav-footer-title">
                {{ this.usuario.displayName }}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <header class="page-header page-header-dark bg-innovation pb-10">
            <div class="container-fluid">
              <div class="page-header-content pt-4">
                <div class="row align-items-center justify-content-between">
                  <div class="col-auto mt-4">
                    <h1 class="page-header-title">
                      <div class="page-header-icon">
                        <i data-feather="activity"></i>
                      </div>
                      {{ menu.opcion_activa }}
                    </h1>
                    <div class="page-header-subtitle">
                      {{ menu.opcion_activa_descripcion }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <!-- Main page content-->
          <div class="container-fluid mt-n10">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    ...mapActions("usuario", ["cerrarSesion"]),
    EjecutarRuta(route_name) {
      this.$router.push({ name: route_name });
    },
    Nada() {},
    salir() {
      this.cerrarSesion();
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState("usuario", ["usuario"]),
    ...mapState(["menu"]),
  },
  mounted() {},
};
</script>

<style scoped></style>
