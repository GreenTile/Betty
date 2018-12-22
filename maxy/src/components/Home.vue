<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 style="background-color:gray">
                <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 style="background-color:lightgray">
                <v-btn large router to="/meetup/new" class="primary">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>