<template>
<div class="hello">
  <div class="holder">
    <form @submit.prevent="addSkill">
    <input type="text" placeholder="typr ur skill!" v-model="skill">
    <input type="checkbox" id="checkbox" v-model="checked">
    </form>

    <div class="holder">
      <ul>
        <li v-for="(data,index) in skills" :key='index'>
          {{ data.skill }}
        </li>
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
      this.skills.push({ "skill": this.skill });
      this.skill = '';
      console.log('checked field status:'+ this.checked)
    }
  }
}
</script>

<style scoped>
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

</style>