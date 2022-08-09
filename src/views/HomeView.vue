<template>
   <div class="card-container">
     <Card v-for="post in posts" :key="post.title"
    :title="post.title"
    :description="post.description"
    :button="post.button"
    @childClick="addNumber"
    />
   </div>
    <!--#3 crear el  evento personalizado childCllick en el Padre, le puedo poner el nombre que quiera-->
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
      number: 0,//#1 crear la variable que voy a modificar, este number lo modifico desde el hijo.
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
  },
  //SINTAXIS DE DATA CON ARROW FUNCTION, NO SE PONE EL RETUR
  //   data: () => ({  
  //     number: 0,
  //     posts: [
  //       {
  //         title: "Titulo 1",
  //         description: "Descripcion 1",
  //         button: "button 1"
  //       },
  //       {
  //         title: "Titulo 2",
  //         description: "Descripcion 2",
  //         button: "button 2"
  //       },
  //       {
  //         title: "Titulo 3",
  //         description: "Descripcion 3",
  //         button: "button 3"
  //       },
  //     ]
  // }),
  methods: { //#2 crea el metodo que modificara la variable, Utilizar el evento personalizado llamando a la funcion addNumber.
   addNumber(){
      this.number++
   }
  }
}
</script>
<style scoped>
  .card-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;
  }
  p{
    font-size: 2rem;
    font-weight: bold;
  }
</style>
