<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{on}">
        <v-btn text class="success" v-on="on">Add new project</v-btn>
         </template>
        <v-card>
            <v-card-title>
                <h2 class="grey--text">Add a new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                    <v-btn text class="success mx-0 mt-3 ml-8" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default{
        data(){
            return{
                title:'',
                content:''
            }
        },
        methods:{
            submit(){
                console.log(this.title, this.content)
            }
        }
    }
</script>