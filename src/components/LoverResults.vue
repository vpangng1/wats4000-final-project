<template>

  <div class="secret">
    <h1>{{message}}</h1>

  </div>
</template>

<script>
export default {
    name: 'loveResults',
    data () {
      return {
        message: 'The Results are In:'
        
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>