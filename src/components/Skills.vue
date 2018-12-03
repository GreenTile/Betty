<template>
<div class="hello">
  <div class="holder">
    <form @submit.prevent="addSkill">
    <transition name="alert-in" enter-active-class="animated flipInX " leave-active-class="animated flipOutX">
    <p class="alert" v-if="errors.has('skill')"> {{ errors.first('skill') }} </p>
    <!-- <p class="alert" >{{ errorMsg }}</p> -->
    </transition>
    <input 
      type="text"
      placeholder="typr ur skill!"
      v-model="skill"
      v-validate="'min:5'"
      name="skill">


    </form>

    <div class="holder">
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data,index) in skills" :key='index'>
          {{ data.skill }}
          <i class="fa fa-minus-circle" @click="remove(index)"></i>
        </li>
        </transition-group>
      </ul>
    </div>

  <p>these are the skills u have</p>
  
  </div>
  </div>
</template>

<script>

export default {
  name: 'Skills',
  data() {
    return {
      name: 'MohammadBagher',
      errorMsg: '',
      checked: false,
      skill: '',
      skills: [
        { "skill": "vue-js"},
        {"skill": "front end developer"},
        { "skill": "vue-js"},
      ],
    }
  },
  methods: {
    addSkill(){

      this.$validator.validateAll().then((result) => {
        if(result){
          this.skills.push({ "skill": this.skill });
          this.skill = '';
          this.errorMsg = '';
        }else{
          this.errorMsg = 'failed to add...';
        }
      });

    },
    remove(id){
      this.skills.splice(id,1);
    }
  }
}
</script>

<style scoped>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
  @import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  /* .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(1);
    }
  } */
  i{
    float: right;
    cursor:pointer;
  }

  
</style>