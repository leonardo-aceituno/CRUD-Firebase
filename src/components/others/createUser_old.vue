<template>
  <v-container class="my-10">
    <div class="text-center">
      <v-snackbar v-model="snackbar" :timeout="timeout" top app color="success">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <v-chip class="ma-1" color="primary" outlined pill>
      Create User
      <v-icon right class="mr-1"> mdi-account-plus-outline </v-icon>
    </v-chip>
    <form class="pa-10">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="15"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        outlined
      ></v-text-field>

      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        outlined
      ></v-text-field>

      <v-btn class="mr-4" color="success" @click="crear(name, email)">
        Create
      </v-btn>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { collection, getFirestore, addDoc } from "firebase/firestore";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) },
    email: { required, email },
  },
  data() {
    return {
      name: "",
      email: "",
      error: false,
      snackbar: false,
      text: "Registered user.",
      timeout: 2000,
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    async crear(name, email) {
      this.$v.$touch();
      const db = getFirestore();
      await addDoc(collection(db, "usuarios"), {
        name: name,
        email: email,
      });

      if (this.name && this.email) {
        this.snackbar = true;
        this.clear();
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
