<template>
  <v-app id="news">
    <v-content>
      <h1>Notcias MX</h1>
      <v-container class="fill-height" fluid>
        <router-view />

        <div class="noticias" v-for="noticia in noticias">
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex>
                <v-card class="mx-auto" max-width="400" :elevation="hover ? 24 : 6">
                  <v-img
                    class=" headline white--text align-end"
                    height="200px"
                    :src="noticia.urlToImage"
                    
                  >
                    <v-card-title>{{ noticia.title }}</v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">{{ noticia.name }}</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>
                      {{noticia.author}}
                      </div>

                    <div>{{noticia.content | cut }}...</div>
                  </v-card-text>

                  <v-card-actions>
                    
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "noticias",
  data() {
    return {
      noticias: [],
      prueba:"perro"
    };
  },

  created() {
    this.news();
  },
  methods: {
    news() {
      axios({
        method: "GET",
        url:
          "http://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=2636b23185a54a2c879fbcb2e3b7be9b",
      })
        .then((response) => {
          this.noticias = response.data.articles;
          console.log(this.noticias);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    
  },
  filters:{

    cut: function (value) {
    if (!value) return ''
    value = value.toString()
    value = value.split( " ",10)
  }
  }
};
</script>

<style>

</style>
