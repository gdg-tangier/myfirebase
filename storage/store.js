import Vue from 'vue';
import Vuex from 'vuex';
import { firebase } from './../src/firebase/firebase'
import auth from './../storage/modules/myfirebase-auth/auth'
import storage from './../storage/modules/myfirebase-storage/storage'

Vue.use(Vuex);

// FCM, Firebase cloud messaging
const fcm = firebase.messaging();

// defin database
const database = firebase.database();
// ref to messages JSON
const messages = database.ref().child('messages');
// Error
const error = ''

export default new Vuex.Store({
    // myfirebase modules
    modules: {
        auth: auth,
        storage: storage
    },
    // states
    state: {
        database: database.ref(),
        error: error,
        messaging: fcm
    },
    // mutations
    mutations: {},
    // getters
    getters: {},
    //actions
    actions: {}
})