<template>
  <div>
    <div class="d-flex mt-4 justify-content-between">
      <button @click="getPrevArticles" :disabled="articles.prev_page_url === null" class="btn btn-warning">Prev Page
      </button>
      <button @click="getNextArticles" :disabled="articles.next_page_url === null" class="btn btn-warning">Next Page
      </button>
    </div>
    <div class="row" v-if="!loading">
      <div class="col-md-8 offset-md-2"
           v-for="article in articles.data" :key="article.id">
        <Article :article="article"></Article>
      </div>
    </div>
    <div class="loader text-center" v-else>
      <i class="fas fa-3x fa-spin fa-spinner"></i>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import config from '@/config'
  import Article from '@/components/Article'

  export default {
    name: "Home",
    data () {
      return {
        articles: {},
        loading: true
      }
    },
    mounted () {
      this.getArticles()
    },
    methods: {
      getArticles (url = `${config.apiUrl}/articles`) {
        this.loading = true
        Axios.get(url)
          .then(response => {
            this.loading = false
            this.articles = response.data.data
          })
      },
      getNextArticles () {
        this.getArticles(this.articles.next_page_url)
      },
      getPrevArticles () {
        this.getArticles(this.articles.prev_page_url)
      }
    },
    components: {
      Article
    }
  }
</script>

<style scoped>
  .btn-warning {
    color: #fff;
  }
</style>
