<template>
  <div className="tweet">
    <img src="https://i.imgur.com/9yw1Fyw.jpg" className="profile" alt="profile"/>
    <div className="body">
      <div className="top">
        <span className="user">
          <span className="name">{{ name }}</span>
          <span className="handle">{{ handle }}</span>
        </span>
        <span className="timestamp">{{ timestamp }}</span>
      </div>
      <p className="message">{{ message }}🚀</p>
      <div className="actions">
        <!-- Font Awesome icons -->
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div>
    </div>
    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script>
export default {
    name: "Tweet",
    props:{
        name: String,
        handle: String,
        timestamp:String,
        message:String,
        image: URL
    }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>