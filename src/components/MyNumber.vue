<template>
  <input v-model="myNumber" type="number" />
  <button @click="emitEvent">Count</button>
</template>

<script>
export default {
    name: "MyNumber",
    data(){
        return{
            myNumber: 0,
        };
    },
    methods: {
        emitEvent(){
            this.$emit("emmit", this.myNumber)
        },
    },
}
</script>

<style>

</style>