<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{on}">
            <v-btn text class="success" v-on="on">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2 class="grey--text">Add a new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                    <v-menu min-width="290px">
                        <template v-slot:activator="{ on }">
                            <v-text-field v-on="on" :value="formattedDate" clearable label="Due date" prepend-icon="mdi-calendar-range" :rules="inputRules"></v-text-field>
                        </template>
                        <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
                    </v-menu>
                    <v-btn text class="success mx-0 mt-3 ml-8" @click="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb'
    export default{
        data(){
            return{
                title:'',
                content:'',
                due:null,
                menu:false,
                inputRules:[
                    v => v.length >= 3 || 'Minimum length is 3 character'
                ],
                loading: false,
                dialog:false,
            }
        },
        methods:{
            submit(){
                if(this.$refs.form.validate()){
                    this.loading = true;
                    const project = {
                        title: this.title,
                        content: this.content,
                        due: format(parseISO(this.due), 'do MMM yyyy'),
                        person : 'Ashish Maharjan',
                        status : 'ongoing' 
                    }
                    db.collection('projects').add(project).then(()=>{
                        this.loading = false;
                        this.dialog = false;
                        this.$emit('projectAdded')
                    })
                }
                
            }
        },
        computed:{
            formattedDate(){
                return this.due ? format(parseISO(this.due), 'do MMM yyyy') : '' ;
            }
        }
    }
</script>