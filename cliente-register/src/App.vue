<template>
  <v-app>


    <div>
      <v-card color="dark">
      <teste />
      </v-card>
    </div>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import teste from "./components/appbar";

export default {
  name: "App",

  components: {
    HelloWorld, teste
  },

  data: () => ({
    //
  })
};
</script>
