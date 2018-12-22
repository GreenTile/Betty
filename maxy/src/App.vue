<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>

        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link">
          
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>

        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <v-toolbar-title>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
        <router-link to="/"  tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items
        class="hidden-xs-only"
        v-for="item in menuItems"
        :key="item.title"
        >

        <v-btn flat router :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>  
          {{ item.title }}
        </v-btn>
        
      </v-toolbar-items>

    </v-toolbar>
    <main>
        <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetups', link: '/meetup/new'},
          {icon: 'person', title: 'Profile', link: '/profile'},
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock', title: 'Sign in', link: '/signin'}
      ]
    }
  },
  name: 'App'
}
</script>
