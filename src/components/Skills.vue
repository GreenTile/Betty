<template>
  <div class="hello">
    {{ name }}

    {{ btnState ? 'the buttun is disabled' : 'the bu'}}
  <button @click="changeName"
          :disabled="btnState">
  Change Name
  </button>
  <div class="holder">
    <ul>
      <li v-for="(data,index) in skills" :key='index'>
        {{ index+1 }}. {{ data.skill }}
      </li>
    </ul>
  </div>
  <p v-if="skills.length >= 2">u have more than one skill</p>
  <p v-else>u have just one skill or none</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: 'MohammadBagher',
      btnState: true,
      skills: [
        { "skill": "vue-js"},
        // {"skill": "front end developer"},
        // { "skill": "vue-js"},

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
