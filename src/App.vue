<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
        </a>
      </div>
      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <div class="nav-item" v-if="authorized">
          <img :src="profile.photoURL" alt="" width="10%">
          <div class="nav-item">
            <h1>{{ profile.displayName }}</h1>
          </div>
        </div>
        <div v-if="ready">
          <div v-if="authorized">
            <a class="nav-item">
              <button type="button" @click="logout" class="button is-danger">logout</button>
            </a>
          </div>
          <div v-else>
            <a class="nav-item">
              <button type="button" @click="login" class="button is-primary">login</button>
            </a>
          </div>
        </div>
        <div v-else>
          <a class="nav-item">
            <button type="button" name="button" class="button is-primary is-loading">login</button>
          </a>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="container-fluid home-text">
          <h1 class="heading" data-target-resolver>123as</h1>
      </div>
      <section>
        <a href="#" class="scroll-down" address="true"></a>
        </section>
    </div>

    <div class="container-fluid room-status">
      <section class="ok">
          <button type="button" name="button" @click="clear">clear</button>
        <router-view :rooms="rooms" :book="book"></router-view>
      </section>
    </div>

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
      rooms: [],
      tableData: [
        {'id': 1, 'user': {'first_name': 'Jesse', 'last_name': 'Simmons'}, 'date': '2016-10-15 13:43:27', 'gender': 'Male'}
      ],
      checkedRows: [],
      selected: {},
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isCheckable: false,
      hasMobileCards: true,
      isPaginated: true,
      isPaginationSimple: false,
      perPage: 10
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
    },
    clear () {
      let vm = this
      var room = {
        starttime: '00:00',
        endtime: '00:00',
        status: 'empty'
      }
      for (var n = 0; n < vm.rooms.length; n++) {
        this.$firebaseRefs.rooms.child('Tutorial' + (n + 1)).set(room)
      }
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
