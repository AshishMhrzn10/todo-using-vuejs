<template>
  <div class="dashboard">
    <h3 class="subheading grey--text">Dashboard</h3>

    <v-container class="my-5">
      <v-row class="mb-3 ml-0">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text class="#F5F5F5 grey--text mr-3" @click="sortBy('title')" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          </template>
          <span>Sort projects by title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn small text class=":#F5F5F5 grey--text" @click="sortBy('person')" v-on="on">
            <v-icon left small>mdi-account</v-icon>
            <span class="caption text-lowercase">By person name</span>
          </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>
      
      <v-card flat class="" v-for="project in projects" :key="project.title">
        <v-row wrap :class="`pa-3 ml-0 project ${project.status}`">
          <v-col xs='12' md='5'>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          
          <v-col xs='6' sm='4' md='3'>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>

          <v-col xs='6' sm='4' md='2'>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>

          <v-col xs='2' sm='4' md='2'>
            <div class="float-right">
              <v-chip small :class="`v-chip--active white--text caption my-2`" :color="`${project.status}`">
                {{project.status}}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>


export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'Ashish Maharjan', due: '1st Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design a new website part 2', person: 'Ashish Maharjan', due: '1st Nov 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
  .project.overdue{
    border-left: 4px solid tomato;
  }
  .v-chip.complete{
    background: #3cd1c2;
  }
  .v-chip.ongoing{
    background: #ffaa2c;
  }
  .v-chip.overdue{
    background: #f83e70;
  }
</style>
