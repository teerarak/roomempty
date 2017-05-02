<template>
  <div id="app">
    <div v-if="ready">
      <div v-if="authorized" >
        <img :src="profile.photoURL" alt="">
        <h1>{{ profile.displayName }}</h1>
        <button type="button" @click="logout" class="button is-danger">logout</button>
      </div>
      <div v-else>
        <button type="button" @click="login" class="button is-primary">login</button>
      </div>
    </div>
    <div v-else>
      <button type="button" name="button" class="button is-primary is-loading">login</button>
    </div>
    <router-view :rooms="rooms" :book="book"></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyDVZThvTokq7kbiZe_mXTnjv3QUq5MbMMk',
  authDomain: 'emptyroom-5e725.firebaseapp.com',
  databaseURL: 'https://emptyroom-5e725.firebaseio.com',
  projectId: 'emptyroom-5e725',
  storageBucket: 'emptyroom-5e725.appspot.com',
  messagingSenderId: '289945777511'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
let provider = new firebase.auth.FacebookAuthProvider()
export default {
  name: 'app',
  data () {
    return {
      profile: {},
      ready: false,
      authorized: false,
      rooms: []
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      let vm = this
      firebase.auth().signOut().then(function () {
        vm.authorized = false
      }, function (error) {
        console.error(error)
      })
    },
    book (room, id) {
      this.$firebaseRefs.rooms.child(id).set(room)
    }
  },
  mounted () {
    let vm = this
    vm.$bindAsArray('rooms', db.ref('Room'))
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.authorized = true
        vm.profile = user
      }
      vm.ready = true
    })
  }
}
</script>
