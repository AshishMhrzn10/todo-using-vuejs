<template>
  <div class="team">
    <h3 class="subheading grey--text">team</h3>
    <v-container class="my-5">
        <v-row wrap>
          <v-col xs='12' sm='6' md='4' lg='3' v-for="person in team" :key="person.name">
            <v-card flat class="text-md-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="getImgUrl(person.avatar)" :alt="person.name">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text class="grey--text">
                  <v-icon small left>mdi-message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>


export default {
  data() {
    return {
      team: [
        { name: 'Ashish Maharjan', role: 'Web developer', avatar: 'avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: 'avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: 'avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: 'avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: 'avatar-5.png'}
      ]
    }
  },
  methods:{
    getImgUrl(pic){
      return require('../assets/'+pic)
    }
  }
}
</script>
