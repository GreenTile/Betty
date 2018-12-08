<template>
  <div id="app">
    <b-container class="bv-example-row">
        <b-row>
            <b-col>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis minima explicabo molestiae aspernatur commodi! Quas reiciendis facilis, laborum porro quod autem, praesentium reprehenderit adipisci aspernatur ullam quis. Quidem, aperiam exercitationem.</b-col>
            <b-col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati iure quia facilis sit fugit eius voluptates accusamus nulla culpa?</b-col>
            <b-col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati voluptatem accusamus nemo quae laudantium sit iste porro voluptatibus. Suscipit omnis temporibus voluptate ullam consectetur impedit amet labore dolorum quasi!</b-col>
        </b-row>
        <hr>
        <b-row align-h="center">
          <b-col cols="4">
            <b-button size="lg" variant="success" @click="handleClick">
              my button
            </b-button>
          </b-col>
          <b-col cols="4">
            <b-alert :show="showDismissibleAlert"
                    dismissible
                    variant="warning">
              <p>This alert will dismiss after seconds...</p>
            </b-alert>
          </b-col>
        </b-row>
    </b-container>
  </div>
  
  
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      showDismissibleAlert: false,

    }
  },
  methods:{
    handleClick() {
      this.showDismissibleAlert = !this.showDismissibleAlert;
    }
  }
}
</script>

<style>

</style>
