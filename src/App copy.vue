<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main> -->

    HOLA SUPER LEO

    <v-text-field color="success" v-model="documentID" loading></v-text-field>

    <v-btn @click="crear(documentID)">CREAR</v-btn>
    <v-btn @click="getDocument">GET HERE</v-btn>
    <v-btn @click="getDocuments">GET HERE - TODOS</v-btn>

    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in usuarios" :key="i">
          {{ item.data.nombre }}
          <v-btn @click="deleteuser(item.id)">delete</v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-app>
</template>

<script>
import {
  setDoc,
  collection,
  getFirestore,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

export default {
  name: "App",

  data() {
    return {
      user: "MobddbskPLPDqq4E59Zr",
      documentID: "",
      usuarios: [],
    };
  },

  methods: {
    async crear(nombre) {
      const db = getFirestore();

      await addDoc(collection(db, "usuarios"), {
        name: nombre,
      });
    },
    async getDocument() {
      const db = getFirestore();
      const { documentID } = this;
      const docRef = doc(db, "usuarios", documentID);
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data());
      const usuario = {
        id: docSnap.id,
        data: docSnap.data(),
      };

      console.log("here", usuario);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

        this.documentID = usuario.data;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },

    async getDocuments() {
      const db = getFirestore();
      // console.log("TODOD", db);
      const collectionRef = collection(db, "usuarios");
      const documents = await getDocs(collectionRef);
      // console.log(docSnap.data());

      console.log("todos los usuarios", documents);

      const users = [];
      documents.forEach((doc) => {
        users.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      this.usuarios = users;
      console.log("aui usuaios", users);
    },

    async deleteuser(userID) {
      const db = getFirestore();
      console.log("BORRAR");
      // console.log(userID);
      await deleteDoc(doc(db, "usuarios", userID));
    }, //End fc
  },
};
</script>
