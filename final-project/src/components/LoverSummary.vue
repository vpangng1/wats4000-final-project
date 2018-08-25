<template>
  <div class="lover-summary">
    
    <form v-on:submit.prevent="findLove">
      <p>Find rhymes for <input type="text" v-model="blank"> related to <input type="text" v-model="blank"> <button type="submit">Calculate</button></p>
    </form>
    
  </div>
</template>

<script>

	export default {
	  name: 'LoverSummary',
	  components: {
	    
	  },
	  data () {
	    return {
	      
	    }
	  }
	}



methods: {
  
   
}

</script>


<style scoped>

</style>
