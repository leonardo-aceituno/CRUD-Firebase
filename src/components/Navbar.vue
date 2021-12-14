<template>
  <v-app-bar app color="primary" dark>
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
    <v-tabs right>
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        v-text="item.text"
      ></v-tab>

      <v-tabs-slider color="pink"></v-tabs-slider>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Create", to: "/" },
      { text: "View users", to: "/view" },
    ],
  }),
};
</script>
