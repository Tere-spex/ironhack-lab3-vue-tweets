<template>
  <div class="card">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button @click="addNumber">{{ button }}</button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
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
    props:{
      title: String,
      description: String,
      button: String
    },
    methods: {
      addNumber(){
        this.number++
      },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    background-color: aqua;
    padding: 40px;
    margin: 25px;
  }
</style>
