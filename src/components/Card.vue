<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button @click="addNumber" @mouseover="sum">{{ button }}</button> 
    <p>{{number}}</p>
  </div>
    <!-- al boton le he puesto 2 eventos, si doy click modifica al padre por que estoy usando emit, si paso por encima al hijo -->
</template>

<script>
import Button from "./Button.vue";//no lo estoy usando para nada
export default {
    name: "Card",
    data(){
      return{
        number: 0,
      }
    },
    components: { 
      Button,
    },
    props:{ //Estos tres datos vienen del HomeView y se renderizan en la Card (los recibo por medio de props del padre). los tengo que definir en el padre de la siguiente manera   :title="post.title"
      title: String,
      description: String,
      button: String 
    },
    methods: {
      addNumber(){
        this.$emit("childClick") //#1 llamo al evento personalizado que he puesto en el padre y llama a la funcion addNumber 
      },
    sum(){
      this.number++
    }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    background-color: rgb(199, 144, 249);
    padding: 25px;
  }
</style>
