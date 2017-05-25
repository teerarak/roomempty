<template>
  <div class="profile">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        <div class="columns is-flex-tablet is-hidden-mobile">
          <div class="column is-half is-offset-one-quarter ">
            <div class="rooms">
              ห้อง {{room['.key']}}
            </div>
            <div class="clock-interval">
              <div class="run-time">
                {{myTime.hour}}:{{myTime.minute}}
              </div>
              <div class="status-timeout">
                ใช้ได้ถึงเวลา {{endtime}}:00
              </div>
            </div>
            <div v-show="reveal">
              <router-link to="/"><center><button type="button" class="checkout button is-danger" name="button" @click="books(time)">ยกเลิกการจอง</button></center></router-link>
            </div>
          </div>
          <div class="notification is-danger" v-show="notification">
            <a href="#" class="delete"></a>
            หมดเวลาแล้ว
          </div>
        </div>

        <div class="columns is-flex-mobile is-hidden-tablet">
          <div class="column is-12">
            <div class="rooms">
              ห้อง {{room['.key']}}
            </div>
            <div class="clock-interval">
              <div class="run-time">
                {{myTime.hour}}:{{myTime.minute}}
              </div>
              <div class="status-timeout">
                ใช้ได้ถึงเวลา {{endtime}}:00
              </div>
            </div>
            <div v-show="reveal">
              <router-link to="/"><center><button type="button" class="checkout button is-danger" name="button" @click="books(time)">ยกเลิกการจอง</button></center></router-link>
            </div>
          </div>
          <div class="notification is-danger" v-show="notification">
            <a href="#" class="delete" @click="books(time)"></a>
            หมดเวลาแล้ว
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .is-flex-tablet .rooms {
    text-align: center;
    font-size: 2.5rem;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .is-flex-mobile .rooms {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 3%;
  }
  .clock-interval{
    background: url('../assets/clock.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .is-flex-tablet .clock-interval{
    background-size: 55%;
    padding:20%;
  }
  .is-flex-mobile .clock-interval{
    background-size: 80%;
    padding-top: 40%;
    padding-bottom: 40%;
  }
  .run-time{
    color: black;
  }
  .is-flex-tablet .run-time {
    font-size: 4em;
    text-align: center;
  }
  .is-flex-tablet .status-timeout {
    font-size: 1rem;
    text-align: center;
  }
  .is-flex-tablet .note {
    font-size: 1rem;
  }
  .is-flex-tablet .notification{
    position: fixed;
    top: 60px;
    left: 41%;
    padding-top:20px;
    padding-bottom:20px;
    padding-left:80px;
    padding-right:80px;
    z-index: 2;
  }
  .is-flex-mobile .run-time {
    font-size: 3em;
    text-align: center;
    width: 100vw;
  }
  .is-flex-mobile .status-timeout {
    font-size: 1rem;
    text-align: center;
    width: 100vw;
  }
  .is-flex-mobile .note {
    font-size: 0.8rem;
  }
  .is-flex-mobile .notification{
    position: fixed;
    top: 60px;
    left:16%;
    padding-top:20px;
    padding-bottom:20px;
    padding-left:80px;
    padding-right:80px;
    width:70vw;
    text-align: center;
    z-index: 2;
  }
  @media (width:768px){
    .is-flex-mobile .rooms {
      text-align: center;
      font-size: 2.5rem;
    }
    .is-flex-mobile .run-time {
      font-size: 7em;
      text-align: center;
      width: 100vw;
    }
    .is-flex-mobile .status-timeout {
      font-size: 1.5em;
      text-align: center;
      width: 100vw;
    }
    .is-flex-mobile .note {
      font-size: 1rem;
    }
  }
  @media (width:320px){
    .is-flex-mobile .notification{
      position: fixed;
      top: 60px;
      left:16%;
      padding-top:20px;
      padding-bottom:20px;
      padding-left:80px;
      padding-right:80px;
      width:70vw;
      text-align: center;
      z-index: 2;
      font-size: 0.7em;
    }
  }
  .checkout {
    width: 130px;
    height: 50px;
    font-size: 18px;
    margin-top:1em;
  }
</style>

<script>
export default {
  props: ['rooms', 'id', 'book', 'time', 'amount', 'booking'],
  name: 'profile',
  data () {
    return {
      myTime: {
        hour: '0' + this.amount,
        minute: '00'
      },
      timeID: '',
      item: [],
      notification: false,
      endtime: parseInt(this.time) + parseInt(this.amount),
      now: '',
      currentTime: '',
      currentMinute: '',
      bookTime: parseInt(this.time),
      reveal: true
    }
  },
  methods: {
    books (time) {
      let vm = this
      vm.rooms.forEach(function (element) {
        if (vm.id === element['.key']) {
          vm.item = (element['.value'])
        }
      })
      for (let i = parseInt(time); i < parseInt(time) + parseInt(vm.amount); i++) {
        vm.item[i] = 'empty'
      }
      console.log(parseInt(time) + parseInt(vm.amount))
      vm.booking(time, vm.id, parseInt(time) + parseInt(vm.amount), 'cancle')
      vm.book(vm.item, vm.id)
      clearInterval(vm.timeID)
      clearInterval((vm.timeID - 1))
    },
    timer () {
      let vm = this
      vm.now = new Date()
      vm.currentTime = vm.now.getHours()
      vm.currentMinute = vm.now.getMinutes()

      //  vm.history.forEach(function (element) {
      //   if (element.status === 'finish' && element.date === )
      // })
      if (parseInt(vm.bookTime) === vm.currentTime) {
        vm.reveal = false
        if (vm.currentMinute === 0) {
          vm.myTime.minute = '0' + vm.currentMinute
        } else {
          vm.myTime.minute = 60 - vm.currentMinute
          if (vm.myTime.minute < 10) {
            vm.myTime.minute = '0' + vm.myTime.minute
          }
          vm.myTime.hour = vm.endtime - (vm.currentTime + 1)
          vm.myTime.hour = '0' + vm.myTime.hour
        }
        if (vm.myTime.hour === '00' && vm.myTime.minute === '00') {
          vm.notification = true
          clearInterval(vm.timeID)
          clearInterval((vm.timeID - 1))
        }
      } else {
        vm.passTime = vm.endtime - vm.currentTime
        console.log(vm.passTime)
        if (vm.passTime <= vm.endtime - parseInt(vm.time)) {
          vm.reveal = false
          if (vm.currentMinute === 0) {
            console.log('hello')
            vm.myTime.minute = '0' + vm.currentMinute
          } else {
            vm.myTime.minute = 60 - vm.currentMinute
            if (vm.myTime.minute < 10) {
              vm.myTime.minute = '0' + vm.myTime.minute
            }
            vm.myTime.hour = vm.endtime - (vm.currentTime + 1)
            vm.myTime.hour = '0' + vm.myTime.hour
          }
          if (vm.myTime.hour === '00' && vm.myTime.minute === '00') {
            vm.notification = true
            clearInterval(vm.timeID)
            clearInterval((vm.timeID - 1))
          }
        }
      }
    }
  },
  mounted () {
    let vm = this
    vm.timeID = setInterval(this.timer, 1000)
  }
}
</script>
