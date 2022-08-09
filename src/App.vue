<template>
  <nav>
    <router-link to="/">Home/Props- $emit</router-link> |
    <router-link to="/tweets">Tweets por props</router-link> |
    <router-link to="/tweetsbycomponents">Tweets separado en Components</router-link> |
    <router-link to="/about">$emit</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
