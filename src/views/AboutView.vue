<template>
  <MyNumber @emmit="addNumber"/>
  <p>My number is {{number}}</p>
</template>

<script>
import MyNumber from '../components/MyNumber.vue'
export default {
  name:"AboutView",
  components: {
    MyNumber
  },
  data: () => ({
    number: 0,
  }),
  methods: {
    addNumber(number){
      console.log(number);
      this.number += number;
    },
  },
}
</script>
