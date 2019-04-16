<template>
  <div class="card my-3">
    <div class="card-header font-weight-bold">{{article.title}}</div>
    <div class="card-body">
      <div class="my-3" v-html="article.content.substring(0,20)">
      </div>
      <router-link :to="`/article/${article.slug}`" class="btn btn-primary">Read More</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    props: ['article']
  }
</script>

<style scoped>

</style>
