<template>
  <nav>
    <v-toolbar text color="#00416B">
      <v-toolbar-title class="text-uppercase grey--text">
        <a style="text-decoration: none; color:#FFE600;" text>BUSCACEP</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="#FFE600" to="/buscaendereco" class="mr-4">Buscar Endereço</v-btn>
      <v-btn text color="#FFE600" to="/buscacep" class="mr-4">Buscar CEP</v-btn>
    </v-toolbar>
  </nav>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

