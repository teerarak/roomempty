<template>
  <div class="Reservations">
    <div v-for="room in rooms">
      <div class="modal is-active" v-if = "room['.key'] == id">
        <router-link :to="'/'">
          <div class="modal-background"></div>
        </router-link>
        <div class="columns is-flex-tablet is-hidden-mobile">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">จำนวนชั่วโมงที่ต้องการจอง</p>
            </header>
            <section class="modal-card-body">
              <div class="field has-addons has-addons-centered">
                <p class="control">
                  <a class="button is-danger" @click="minus">-</a>
                </p>
                <p class="control">
                  <input class="input" style="text-align:center;" type="text" v-model="amount" placeholder="จำนวนชั่วโมง" disabled>
                </p>
                <p class="control">
                  <a class="button is-success" @click="plus">+</a>
                </p>
              </div>
            </section>
            <footer class="modal-card-foot">
              <router-link :to="'/profile/' + room['.key'] + '/' + time + '/' + amount">
                <a class="button is-success" @click="books(time)" style="padding-left:18px; padding-right:18px;">จอง</a>
              </router-link>
              <a href="#" class="button" style="margin-left:15px;">ยกเลิก</a>
            </footer>
          </div>
        </div>
        <div class="columns is-flex-mobile is-hidden-tablet">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">จำนวนชั่วโมงที่ต้องการจอง</p>
            </header>
            <section class="modal-card-body">
              <div class="field has-addons has-addons-centered">
                <p class="control">
                  <a class="button is-danger" @click="minus">-</a>
                </p>
                <p class="control">
                  <input class="input" style="text-align:center;" type="text" v-model="amount" placeholder="จำนวนชั่วโมง" disabled>
                </p>
                <p class="control">
                  <a class="button is-success" @click="plus">+</a>
                </p>
              </div>
            </section>
            <footer class="modal-card-foot">
              <router-link :to="'/profile/' + room['.key'] + '/' + time + '/' + amount">
                <a class="button is-success" @click="books(time)" style="padding-left:18px; padding-right:18px;">จอง</a>
              </router-link>
              <a href="#" class="button" style="margin-left:15px;">ยกเลิก</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rooms', 'id', 'book', 'time'],
  name: 'Reservations',
  data () {
    return {
      item: [],
      amount: 1
    }
  },
  methods: {
    books (time) {
      let vm = this
      vm.rooms.forEach(function (element) {
        if (vm.id === element['.key']) {
          vm.item = element['.value']
        }
      })
      for (let i = parseInt(time); i < parseInt(time) + vm.amount; i++) {
        vm.item[i] = 'active'
      }
    },
    plus () {
      let vm = this
      let sumTime = parseInt(vm.time) + vm.amount
      let end = 20
      vm.rooms.forEach(function (element) {
        if (vm.id === element['.key']) {
          vm.item = element['.value']
        }
      })
      for (let i = parseInt(vm.time); i < 20; i++) {
        console.log(i + ' ' + vm.item[i])
        if (vm.item[i] === 'active') {
          end = i
        }
      }
      if (sumTime < end) {
        vm.amount++
      }
      console.log(sumTime + ' < ' + end)
    },
    minus () {
      let vm = this
      if (vm.amount <= 1) {
        vm.amount = 1
      } else {
        vm.amount--
      }
    }
  }
}
</script>
<style>
  .is-flex-tablet .modal-card{
    width:35vw;
  }
</style>
