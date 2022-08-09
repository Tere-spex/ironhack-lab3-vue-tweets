<template>
  <img className="profile" :src="image" alt="profile">
</template>

<script>
export default {
  name: "ProfileImage",
  props:["image"],
}
</script>

<style>

</style>