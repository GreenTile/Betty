<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>

        <v-list-tile v-for="item in menuItems"  :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
        <v-btn flat>
        <v-icon left>{{ item.icon }}</v-icon>  
          {{ item.title }}
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
      sideNav: false,
      menuItems: [
          {icon: 'supervisor_account', title: 'View Meetups'},
          {icon: 'room', title: 'Organize Meetups'},
          {icon: 'person', title: 'Profile'},
          {icon: 'face', title: 'Sign up'},
          {icon: 'lock', title: 'Sign in'}
      ]
    }
  },
  name: 'App'
}
</script>
