<template>
  <div class="profile">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        <div class="columns is-flex-tablet is-hidden-mobile">
          <div class="column is-half is-offset-one-quarter ">
            <div class="rooms">
              คุณกำลังจองห้อง {{room['.key']}}
            </div>
            <div class="clock-interval">
              <div class="run-time">
                {{myTime.hour}}:{{myTime.minute}}
              </div>
              <div class="status-timeout">
                ใช้ได้ถึงเวลา {{endtime}}:00
              </div>
            </div>
            <router-link to="/"><center><button type="button" class="checkout button is-danger" name="button" @click="books(time)">ยกเลิกการจอง</button></center></router-link>
          </div>
        </div>
        <div class="columns is-flex-mobile is-hidden-tablet">
          <div class="column is-12">
            <div class="rooms">
              คุณกำลังจองห้อง {{room['.key']}}
            </div>
            <div class="clock-interval">
              <div class="run-time">
                {{myTime.hour}}:{{myTime.minute}}
              </div>
              <div class="status-timeout">
                ใช้ได้ถึงเวลา {{endtime}}:00
              </div>
            </div>
            <router-link to="/"><center><button type="button" class="checkout button is-danger" name="button" @click="books(time)">ยกเลิกการจอง</button></center></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  body{
    height: 100vh;
    background-color: #e0e4e7;
  }
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
  @media (width:768px){
    body{
      height: 100%;
      background-color: #e0e4e7;
    }
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
  }
  .checkout {
    width: 130px;
    height: 50px;
    font-size: 18px;
  }
</style>

<script>
export default {
  props: ['rooms', 'id', 'book', 'time', 'amount'],
  name: 'profile',
  data () {
    return {
      myTime: {
        hour: '0' + this.amount,
        minute: '00'
      },
      timeID: '',
      item: [],
      endtime: parseInt(this.time) + parseInt(this.amount)
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
      console.log(vm.item)
      for (let i = parseInt(time); i < parseInt(time) + parseInt(vm.amount); i++) {
        vm.item[i] = 'offline'
      }
      this.book(vm.item, vm.id)
      clearInterval(vm.timeID)
    },
    timer () {
      let vm = this
      if (vm.myTime.minute === '00') {
        vm.myTime.hour--
        vm.myTime.hour = '0' + vm.myTime.hour
        vm.myTime.minute = 59
      } else {
        vm.myTime.minute--
        if (vm.myTime.minute < 10) {
          vm.myTime.minute = '0' + vm.myTime.minute
        }
      }
      if (vm.myTime.minute === '00' && vm.myTime.hour === '00') {
        clearInterval(vm.timeID)
        alert('timeout')
      }
    }
  },
  mounted () {
    this.timeID = setInterval(this.timer, 1000)
  }
}
</script>
