<template>
  <div class="chat text-dark">
    <!-- Selector de chat -->
    <div class="chat-groups shadow-lg">
      <div class="row">
        <div class="btn-group row col-12 m-0 p-0">
          <!-- Cerrar el chat -->
          <button
            type="button"
            class="col-2 btn bg-OTTAzul text-white text-center p-0"
            v-on:click="$emit('toggleChat')"
          >
            <i class="fas fa-times ml-2"></i>
          </button>
          <!-- Nombre del chat seleccionado -->
          <button
            type="button"
            class="col-8 btn text-dark nombre-empresa btn-secondary"
          >
            {{
              chatsCargados.length > 0 && datosChatActual
                ? datosChatActual.nombreFacultad
                : "Seleccionar chat"
            }}
          </button>
          <!-- Flecha para mostrar los chats disponibles -->
          <button
            type="button"
            class="col-2 btn btn-secondary dropdown-flecha p-0 dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only text-primary"></span>
          </button>
          <div class="dropdown-menu w-100">
            <!-- Chats disponibles -->
            <button
              class="dropdown-item"
              v-for="chat in chats"
              v-show="datosChatActual.idFacultad != chat.idFacultad"
              v-on:click="seleccionarChat(chat.idChat)"
              :key="chat.idChat"
            >
              {{ chat.nombreFacultad }}
              <span
                v-show="chat.noVistosEstudiante > 0"
                class="mensajes-pendientes"
              >
                {{
                  chat.noVistosEstudiante > 0
                    ? " " + chat.noVistosEstudiante
                    : ""
                }}</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Display de mensajes -->
    <div v-if="chatsCargados.length > 0" />
    <Chat
      v-for="(chat, index) in chatsCargados"
      v-show="chat.idChat == datosChatActual.idChat"
      :key="chat.idChat"
      :chat="chat"
      :index="index"
    />
  </div>
</template>

<script>
import Chat from "./Chat.vue";
import { db } from "../firebase.js";
import { mapState } from "vuex";
const chatsCollection = db.collection("chats");

export default {
  name: "Chats",
  components: { Chat },
  data: () => {
    return {
      chatsCargados: [],
      idChatSeleccionado: "",
      chats: [],
    };
  },
  watch: {
    idChatSeleccionado(value) {
      let chat = this.chats.filter((chat) => {
        return chat.idChat == value;
      })[0];
      if (chat.noVistosEstudiante > 0) {
        chatsCollection.doc(value).update({ noVistosEstudiante: 0 });
      }
    },
    chats: {
      deep: true,
      handler(value) {
        if (value.length == 0) return;
        let that = this;
        let chat = value.filter((chat) => {
          return chat.idChat == that.idChatSeleccionado;
        })[0];
        if (!chat) return;
        if (chat.length == 0) return;
        if (chat.noVistosEstudiante > 0) {
          chatsCollection
            .doc(that.idChatSeleccionado)
            .update({ noVistosEstudiante: 0 });
        }
      },
    },
  },
  methods: {
    seleccionarChat(nuevaId) {
      this.idChatSeleccionado = nuevaId;
      let yaEstaCargado = false;
      this.chatsCargados.forEach((chat) => {
        if (chat.idChat == nuevaId) {
          yaEstaCargado = true;
        }
      });
      if (yaEstaCargado == false) {
        this.chatsCargados.push(this.datosChatActual);
      }
    },
  },
  computed: {
    ...mapState("User", ["user"]),
    datosChatActual: function () {
      if (!this.chats || this.idChatSeleccionado == "") {
        return {};
      } else {
        let datosChatActual = this.chats.filter((chat) => {
          return chat.idChat == this.idChatSeleccionado;
        });
        return datosChatActual[0];
      }
    },
  },
  mounted() {
    console.log(this.user.uid);
    this.$bind(
      "chats",
      db.collection("chats").where("idEstudiante", "==", this.user.uid)
    );
  },
};
</script>

<style>
.chat-groups .nombre-empresa {
  border-radius: 0 !important;
  border: none;
  background: #e5e3e7 !important;
}
.chat-groups .dropdown-menu {
  -webkit-box-shadow: 0px 0px 37px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px -13px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 37px -13px rgba(0, 0, 0, 0.75);
  overflow: scroll;
}
.chat {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.empresa-nombre {
  background: #d7d2d548;
  font-size: 1.2em;
}
.dropdown-flecha {
  border: none;
  border-radius: 0 !important;
  background: #f0047f !important;
}
.dropdown-item {
  outline: none;
  display: flex;
  justify-content: center;
  white-space: normal;
  text-align: center;
  font-size: 0.9em;
}

@media (max-width: 576px) {
  .dropdown-item {
  font-size: 0.8em !important;
  }
}
.dropdown-item:focus {
  outline: none;
}
.mensajes-pendientes {
  background: #f0047f;
  color: white;
  border-radius: 3px;
  margin-left: 3px;
  padding: 2px 10px;
}
.write_msg:focus {
  outline: none;
}
</style>
