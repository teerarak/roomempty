<template>
  <div class="Feeds">
    <div class="columns is-flex-mobile is-hidden-tablet">
      <div class="column">
        <h1 class="heading-rooms on-mobile">จองห้องติว</h1>
          <div class="container">
            <div class="columns" v-for="room in rooms">
              <div class="column is-6 is-offset-3">
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      {{room['.key']}}
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a class="card-footer-item" @click="showModal(room['.value'], room['.key'])">จองห้อง</a>
                  </footer>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>

    <div class="columns is-flex-tablet is-hidden-mobile">
      <div class="column">
        <h1 class="heading-rooms on-tablet">จองห้องติว</h1>
        <div class="container">
          <div class="columns">
            <div class="column is-4" v-for="room in rooms">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    {{room['.key']}}
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item" @click="showModal(room['.value'], room['.key'])">จองห้อง</a>
                </footer>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>


    <div v-show="show">
      <div class="modal is-active">
          <div class="modal-background" @click="DisableModal()"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{roomId}}</p>
            <button class="delete" @click="DisableModal()"></button>
          </header>
          <section class="modal-card-body" >
            <router-link :to="'/reservations/' + roomId + '/' + index" v-for="(time, index) in roomValue" v-if="index >=9">
              <a data-target="modal">
                <button type="button" class="button button-time" style="backgroundColor:#d9d9d9" v-if="time == 'empty'"><p v-if="index===9">0</p>{{index}}:00</button>
              </a>{{ }}
            </router-link>
          </section>
          <footer class="modal-card-foot">
            <a class="button" @click="DisableModal()">ยกเลิก</a>
          </footer>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['rooms', 'authorized'],
  name: 'Feeds',
  data () {
    return {
      time: 0,
      count: 0,
      have: true,
      show: false,
      roomValue: '',
      roomId: '',
      picture: 1
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    showModal (room, id) {
      this.show = true
      this.roomValue = room
      this.roomId = id
    },
    DisableModal () {
      this.show = false
    }
  },
  computed: {
    checkRoom () {
      let vm = this
      vm.count = 0
      vm.rooms.forEach(function (element) {
        for (let b = 9; b < 20; b++) {
          if (element['.value'][b] === 'offline') {
            vm.count++
          }
        }
      })
      return vm.count
    },
    currentImage () {
      let vm = this
      vm.picture++
      console.log(vm.picture)
      return '../assets/Button_I_' + vm.picture + '.png'
    }
  }
}
</script>

<style>
.heading-rooms.on-mobile {
  margin-top: 2rem;
  font-size: 2rem;
  text-align: center;
}
.heading-rooms.on-tablet {
  margin-top: 2rem;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
}
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.scroll-down.on-mobile {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.scroll-down.on-mobile {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -16px;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid #FFF;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
}

.scroll-down.on-mobile:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid white;
    border-width: 0px 0 2px 2px;
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
  .header p{
    font-size: 60px;
    margin-bottom: 100px;
  }
  .note.on-mobile {
    margin-top: 20px;
    display: inline-block;
  }
  .note.boxnote.on-mobile{
    width:24px;
    height:24px;
    border-radius: 2px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .note.textnote.on-mobile {
    font-size: 15px;
  }
  .table.status-rooms.on-tablet {
    font-size: 24px;
    width: 100%;
    margin-left: 4rem;
  }
  .button-time {
    margin-bottom: 5px;
  }
</style>
