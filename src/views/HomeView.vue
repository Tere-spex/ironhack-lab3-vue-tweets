<template>
    <Card v-for="post in posts" :key="post.title"
    :title="post.title"
    :description="post.description"
    :button="post.button" />

    <p>My number is {{number}}</p>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'HomeView',
  components: {
    Card
  },
  data(){
    return{
      number: 0,
      posts: [
        {
          title: "Titulo 1",
          description: "Descripcion 1",
          button: "button 1"
        },
        {
          title: "Titulo 2",
          description: "Descripcion 2",
          button: "button 2"
        },
        {
          title: "Titulo 3",
          description: "Descripcion 3",
          button: "button 3"
        },
      ]
    }
  }
}
</script>
<style scoped>

</style>
