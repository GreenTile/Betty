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

  <div :class="alertObject"></div>

  <div :style="{ backgroundColor: bg.color, width: bg.width, height: bg.height}"></div>
  </div>
</template>

<script>
export default {
  name: 'train',
  data() {
    return {
      name: 'MohammadBagher',
      btnState: true,
      skills: [
        { "skill": "vue-js"},
        {"skill": "front end developer"},
        { "skill": "vue-js"},
      ],
      alertObject: { 
        alert: true,
        'another-class':true
      },
      bg:{
        color: "red",
        width: "100px",
        height: "200px",
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
  background-color: aqua;
  width: 100%;
  height: 30px;
}
.another-class{
  border: solid 10px;
}
</style>
