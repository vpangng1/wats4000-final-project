<template>
  <div class="home">
    <div v-show="showForm" class="form-container">
      <h1>Love Calculator</h1>
      

      <p v-show="showError" class="error">There are errors in your form. Please try again.</p>

      <form v-on:submit.prevent="validateForm">

        
        <p><label for="personOne">
        <input type="text" id="personOne" v-model="personOne" placeholder="Enter your full name">
        </label></p>

        <p><label for="personTwo">
        <input type="text" id="personTwo" v-model="personTwo" placeholder="Enter crush's full name">
        </label></p>


        <p><input type="submit" value="Calculate Love Compatibility"></p>
      </form>
    </div>


  </div>



</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      personOne: '',
      personTwo: '',
      showForm: true,
      //showError: false
    }
  },
  methods: {
    validateForm: function () {
      if ((this.personOne != '') && (this.personTwo != '')){
      console.log('Form is valid');
      this.$router.push('LoverResults')
      } else {
      console.log('Form is NOT valid');
      this.showError = true;
      }
      console.log('validating form...')

    }
  },
    findLove: function(){
    axios.get('https://love-calculator.p.mashape.com/getPercentage', {
      params: {
        fname: '',
        sname: ''
      }
    })
  }
}
</script>


<style scoped>

</style>
