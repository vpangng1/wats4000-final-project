<template>
  <div class="home">
    <div v-show="showForm" class="form-container">
      <h1>Love Calculator</h1>
      <p v-show="showError" class="error">There are errors in your form. Please try again.</p>
      <form v-on:submit.prevent="findLove">

        <p><label for="personOne">
        <input type="text" id="personOne" v-model="personOne" placeholder="Enter your full name">
        </label></p>

        <p><label for="personTwo">
        <input type="text" id="personTwo" v-model="personTwo" placeholder="Enter crush's full name">
        </label></p>

        <p><input type="submit" value="Calculate Love Compatibility"></p>
      </form>
    </div>

   <!-- <div v-show="!showForm" class="success-message"> -->
      <lover-results v-bind:loveResults="loveResults"></lover-results>
   <!-- </div> -->
    
  </div>
</template>

<script>
import axios from 'axios'
import LoverResults from '@/components/LoverResults';


export default {
  name: 'Home',
  data () {
    return {
      personOne: '',
      personTwo: '',
      showForm: true,
      showError: false,
      percentage: '',
      result: ''
    }
  },
  methods: {
    validateForm: function () {
      if ((this.personOne != '') && (this.personTwo != '')){
      console.log('Form is valid');
      this.showForm = false;
      } else {
      console.log('Form is NOT valid');
      this.showError = true;
      }
      console.log('validating form...')

    }
  },
   findLove: function() {
    axios.get('https://love-calculator.p.mashape.com/getPercentage', {
      params: {
        api_key: 'SHNlQk5A0umshAPSGGbcNoi8hu9yp1abuwwjsn8zZG7MTpLj1C',
        fname: this.personOne,
        sname: this.personTwo,
      }
    })
      .then(response => {
        this.percentage = response.data
      })
      .catch(error => {
        this.errors.push(error)
      });
  },
  components: {
    'lover-results': LoverResults
  }
}
</script>


<style scoped>

</style>
