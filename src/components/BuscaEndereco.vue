<template>
  <div class="busca-endereco">
      
        <v-container>
        <v-form v-model="valid" ref="form">
          <v-row justify="center">
            <v-col cols="12" lg="6" md="8" sm="12">
          <v-text-field
            v-model="cidade"
            label="Cidade"
            :rules="cidadeRules"
            required
          ></v-text-field>
          </v-col>
         </v-row>

         <v-row justify="center">
            <v-col cols="12" lg="6" md="8" sm="12">
          <v-text-field
            v-model="endereco"
            label="Endereço"
            :rules="enderecoRules"
            required
          ></v-text-field>
          </v-col>
         </v-row>

         <v-row justify="center">
            <v-col cols="12" lg="6" md="8" sm="12">
              <v-select
                :items="uf"
                label="UF"
                v-model="estado"
                :rules="ufRules"
                required
              ></v-select>
            </v-col>
         </v-row>

         <v-row justify="center" align="center">
           <v-col cols="12" lg="6" md="8" sm="12">
              <v-btn class="mr-4" @click="buscarEndereco" :class="{ red: !valid, green: valid }">BUSCAR</v-btn>
          </v-col>
          </v-row>
        </v-form>

        
         <v-row justify="center" align="center">
           <v-col cols="12" lg="6" md="8" sm="12">
             <v-item-group v-for="resultado in resultados" :key="resultado.cep">
                <v-card
                  class="mx-auto mb-4"
                  max-width="700"
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
      resultados: [],
      valid: false,
      uf: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
      ufRules: [
        (v) => !!v || 'UF requerida'
      ],
      cidade: '',
      cidadeRules: [
        (v) => !!v || 'Cidade requerida'
      ],
      endereco: '',
      enderecoRules: [
        (v) => !!v || 'Endereço requerido'
      ],
      estado: ''
    }
  },

  methods: {
      buscarEndereco(){
        this.$api.get(`${this.estado}/${this.cidade}/${this.endereco}/json/`)
          .then(res => this.resultados = res.data).then(this.$refs.form.validate())
      }
    }
 
};
</script>




