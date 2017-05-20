<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="./assets/TTR.png" alt="Tutor Room">
        </a>
      </div>
      <div class="nav-right is-flex-mobile is-hidden-tablet">
        <div v-if="ready">
          <div v-if="authorized">
            <div class="nav-item">
              <a>
                <button type="button" @click="logout" class="button is-danger logout">logout</button>
              </a>
            </div>
          </div>
          <div v-else>
            <a class="nav-item">
              <button type="button" @click="login" class="button is-black login" data-target="modal">login</button>
            </a>
          </div>
        </div>
        <div v-else>
          <a class="nav-item">
            <button type="button" name="button" class="button is-black is-loading">login</button>
          </a>
        </div>
      </div>
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
              <button type="button" @click="logout" class="button is-danger logout">logout</button>
            </a>
          </div>
          <div v-else>
            <a class="nav-item">
              <button type="button" @click="login" class="button is-black login" data-target="modal">login</button>
            </a>
          </div>
        </div>
        <div v-else>
          <a class="nav-item">
            <button type="button" name="button" class="button is-black is-loading">login</button>
          </a>
        </div>
      </div>
    </nav>
    <div class="home-text">
        <h1 class="heading" data-target-resolver></h1>
    </div>
    <div class="columns is-flex-mobile is-hidden-tablet">
      <section class="sec">
        <a href="#" class="scroll-down on-mobile" address="true"></a>
      </section>
    </div>
    <div class="columns is-flex-tablet is-hidden-mobile">
      <section class="sec">
        <a href="#" class="scroll-down on-tablet" address="true"></a>
      </section>
    </div>

    <div v-show="authorized">
      <div v-show="registed">
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field is-grouped">
                    <p class="control is-expanded">
                      <label >รหัสนักศึกษา</label><br>
                      <input class="input" type="text" v-model="stdId" placeholder="รหัสนักศึกษา" >
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal has-addons">
                <div class="field-body">
                <p class="control is-expanded">
                  <label class="s">คณะ</label><br>
                  <span class="select is-fullwidth">
                    <select v-model="faculty">
                      <option selected>คณะเทคโนโลยีและการจัดการอุตสาหกรรม</option>
                      <option>อุตสาหกรรมเกษตร</option>
                    </select>
                  </span>
                </p>
                </div>
              </div>
              <div class="field is-horizontal has-addons">
                <div class="field-body">
                  <div class="field">
                    <div class="control ">
                      <button class="button is-info is-outlined is-small" @click="addUser">บันทึก</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-flex-mobile is-hidden-tablet" v-if="authorized">
      <div class="column">
        <section class="ok">
          <router-view :rooms="rooms" :book="book" :authorized="authorized"></router-view>
        </section>
      </div>
    </div>

    <div class="columns is-flex-tablet is-hidden-mobile" v-if="authorized">
      <div class="column on-tablet">
        <section class="ok2">
          <router-view :rooms="rooms" :book="book" :authorized="authorized"></router-view>
        </section>
      </div>
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
      registed: false,
      rooms: [],
      users: {},
      stdId: '',
      faculty: '',
      checkedRows: [],
      selected: {},
      day: '',
      realHour: 0,
      mockItem: []
    }
  },
  methods: {
    addUser () {
      this.$firebaseRefs.users.push({
        facebookId: this.profile.uid,
        name: this.profile.displayName,
        stdId: this.stdId,
        faculty: this.faculty
      })
      this.stdId = ''
      this.faculty = ''
      this.registed = false
    },
    login () {
      firebase.auth().signInWithPopup(provider)
    },
    logout () {
      let vm = this
      firebase.auth().signOut().then(function () {
        vm.authorized = false
        vm.registed = false
        vm.profile = {}
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
        9: 'empty',
        10: 'empty',
        11: 'empty',
        12: 'empty',
        13: 'empty',
        14: 'empty',
        15: 'empty',
        16: 'empty',
        17: 'empty',
        18: 'empty',
        19: 'empty'
      }
      for (var n = 0; n < vm.rooms.length; n++) {
        if (n < 9) {
          this.$firebaseRefs.rooms.child('Tutor' + ('0' + (n + 1))).set(room)
        } else {
          this.$firebaseRefs.rooms.child('Tutor' + (n + 1)).set(room)
        }
      }
    },
    removeRoom () {
      let vm = this
      vm.day = new Date()
      vm.realHour = 9
      vm.rooms.forEach(function (element) {
        vm.mockItem.push(element['.key'])
      })
      console.log(vm.mockItem)
    }
  },
  mounted () {
    let vm = this
    vm.$bindAsArray('rooms', db.ref('Rooms').orderByKey())
    vm.$bindAsArray('users', db.ref('Users'))
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.authorized = true
        vm.profile = user
        let check = 0
        vm.users.forEach(function (element) {
          console.log(element.facebookId + ' = ' + vm.profile.uid)
          if (element.facebookId === vm.profile.uid) {
            check = 1
          } else {
            vm.registed = true
          }
        })
        if (check === 1) {
          console.log('kuygot')
          vm.registed = false
        }
      }
      vm.ready = true
    })
    // setInterval(this.removeRoom, 1000)
  }
}
</script>

<style >
  button.logout, button.login, button.is-loading {
    margin: 0;
  }
  .control button{
    float: right;
  }
  .nav {
    background-color: #ebebe0;
  }
</style>
