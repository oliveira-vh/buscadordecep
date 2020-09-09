<template>
  <div class="busca-cep">
      
        <v-container>
        <form>
          <v-row justify="center">
            <v-col cols="12" lg="4" md="8" sm="12">
          <v-text-field
            v-model="cep"
            label="CEP"
            required
          ></v-text-field>
          </v-col>
         </v-row>

         <v-row justify="center" align="center">
           <v-col cols="12" lg="4" md="8" sm="12">
          <v-btn class="mr-4" @click="buscarCep">BUSCAR</v-btn>
          </v-col>
          </v-row>
        </form>
        
        </v-container>

        <v-container>
          <v-row justify="center">
            <v-col cols="12" lg="6" md="8" sm="12">
              <v-item-group v-show="resultado != 0">
                <v-card
                  class="mx-auto"
                  max-width="500"
                >
                  <v-card-text>
                    <div>{{ resultado.cep }}</div>
                    <p class="display-1 text--primary">
                      {{ resultado.logradouro }}
                    </p>
                    <p><strong>Bairro: </strong>{{ resultado.bairro }}</p>
                    <p><strong>Cidade: </strong>{{ resultado.localidade }}</p>
                    <p><strong>Estado: </strong>{{ resultado.uf }}</p>
                  </v-card-text>
               
                </v-card>
              </v-item-group>
          </v-col>
         </v-row>
        </v-container>
      
  </div>
</template>

<script>

export default {
  data(){
    return {
      resultado: '',
      cep: ''
    }
  },
  methods: {
      buscarCep(){
        this.$api.get(`${this.cep}/json/`)
          .then(res => this.resultado = res.data)
      },
      setCep(value) {
        this.name = value
        this.$v.name.$touch()
    }
    }
 
};
</script>

