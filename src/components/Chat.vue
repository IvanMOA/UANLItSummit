<template>
  <div>
    <div class="mensajes">
      <div class="mt-1 container">
        <div class="messaging">
          <div class="inbox_msg">
            <div class="mesgs">
              <div :class="`msg_history${index} msg_history`">
                <div
                  v-for="mensaje in mensajes"
                  :key="mensaje.creado.seconds"
                  :class="
                    user.uid == mensaje.idAutor
                      ? 'outgoing_msg'
                      : 'received_msg'
                  "
                >
                  <div
                    :class="
                      user.uid == mensaje.idAutor
                        ? 'sent_msg'
                        : 'received_withd_msg'
                    "
                  >
                    <p>{{ mensaje.mensaje }}</p>
                    <span class="time_date">{{
                      obtenerFecha(mensaje.creado.seconds)
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="type_msg">
                <div class="input_msg_write">
                  <form>
                    <input
                      v-model="entradaMensaje"
                      type="text"
                      class="write_msg"
                      placeholder="Escribe un mensaje"
                    />
                    <button
                      class="msg_send_btn"
                      v-on:click.prevent="enviarMensaje"
                      type="submit"
                    >
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase.js";
import { mapState } from "vuex";
import firebase from "firebase/app";
export default {
  props: ["chat", "index"],
  name: "Chat",
  data: () => ({
    mensajes: [],
    entradaMensaje: "",
  }),
  computed: {
    ...mapState("User", ["user"]),
  },
  methods: {
    enviarMensaje() {
      if (this.entradaMensaje == "") return;
      let that = this;
      db.collection("chats")
        .doc(this.chat.idChat)
        .collection("mensajes")
        .add({
          mensaje: this.entradaMensaje,
          creado: new Date(),
          idAutor: this.user.uid,
        })
        .then(async () => {
          await db
            .collection("chats")
            .doc(that.chat.idChat)
            .update({
              actualizado: new Date(),
              ultimoMensajeEstudiante: that.entradaMensaje,
              noVistosFacultad: firebase.firestore.FieldValue.increment(1),
            });
          that.entradaMensaje = "";
        });
    },
    obtenerFecha(segundos) {
      let fecha = new Date(segundos * 1000);
      let horasRaw = fecha.getHours();
      let horas = horasRaw < 10 ? `0${horasRaw}` : horasRaw;
      let minutosRaw = fecha.getMinutes();
      let minutos = minutosRaw < 10 ? `0${minutosRaw}` : minutosRaw;
      return `${horas}:${minutos}`   },
    obtenerMes(numeroMes) {
      switch (numeroMes) {
        case 0:
          return "Ene";
        case 1:
          return "Feb";

        case 2:
          return "Mar";

        case 3:
          return "Abr";

        case 4:
          return "May";

        case 5:
          return "Jun";

        case 6:
          return "Jul";

        case 7:
          return "Ago";

        case 8:
          return "Sep";

        case 9:
          return "Oct";

        case 10:
          return "Nov";

        case 11:
          return "Dic";
        default:
          return "";
      }
    },
  },
  watch: {
    mensajes() {
      setTimeout(() => {
        let msgHistory = document.querySelector(".msg_history" + this.index);
        console.log(msgHistory.scrollHeight);
        msgHistory.scrollTop = msgHistory.scrollHeight;
      }, 50);
    },
  },
  mounted() {
    let msgHistory = document.querySelector(".msg_history" + this.index);
    msgHistory.scrollTop = msgHistory.scrollHeight;
    this.$bind(
      "mensajes",
      db
        .collection("chats")
        .doc(this.chat.idChat)
        .collection("mensajes")
        .orderBy("creado")
    );
  },
};
</script>

<style>
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  height: 100%;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  padding: ;
}
.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 0 0 8px 0;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  width: 92%;
}
.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 10px;
  background-color: rgb(179, 179, 179, 0.5);
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  float: left;
  height: 94%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.sent_msg p {
  background: #007cba none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 5px 26px;
}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 85%;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  margin-top: 5px;
  position: relative;
}
.msg_send_btn {
  background: #007cba none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging {
  padding: 0 0 0 0;
  height: 95vh;
  bottom: 0;
}
.msg_history {
  height: 90vh;
  overflow-y: auto;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
input:focus {
  outline: 1px solid rgb(179, 179, 179, 0.5);
}
</style>
