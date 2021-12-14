<template>
  <div class="about">
    <getUsers />
  </div>
</template>

<script>
import getUsers from "../components/getUsers";

export default {
  name: "about",
  components: {
    getUsers,
  },
};
</script>
