<template>
    <nav>
        <v-app-bar app flat>
            <v-app-bar-nav-icon class="grey--text" @click='drawer = !drawer'></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--Dropdown-->
            <v-menu offset-y>
                <template v-slot:activator="{on}">
                    <v-btn text class="white grey--text mx-3" v-on="on">
                        <v-icon left>mdi-arrow-down-drop-circle</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text class="white grey--text">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-row justify="center" class="mt-8">
                <v-avatar size="100">
                    <img src="/avatar-1.png/" >
                </v-avatar>
            </v-row>
            <v-row justify="center"> 
                <p class="white--text mt-1">
                    Ashish Maharjan
                </p>
            </v-row>
            <v-row class="mt-4 mb-6" justify="center">
                <Popup/>
            </v-row>

            <v-list rounded> 
                <v-list-item  v-for="link in links" :key="link.text" :to="link.route">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './popup'
export default {
    components:{ Popup },
    data(){
        return{
            drawer : false,
            links : [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                {icon: 'mdi-account', text: 'Team', route: '/team'},
            ],
        }
    }
}
</script>