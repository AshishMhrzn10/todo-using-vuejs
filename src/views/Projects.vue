<template>
  <div class="projects">
    <h3 class="subheading grey--text">Projects</h3>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
          <v-card flat>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight bold">{{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'
export default {
  data(){
    return{
      projects: []
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Ashish Maharjan'
      })
    }
  },
  created(){
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id : change.doc.id
          })
        }
      })
    })
  }
}
</script>
