<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>view meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
        <v-icon left>supervisor_account</v-icon>  
          view meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  name: 'App'
}
</script>
