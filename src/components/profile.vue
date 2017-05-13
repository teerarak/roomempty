<template>
  <div class="profile">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter rooms">
            คุณกำลังจองห้อง {{room['.key']}}
          </div>
        </div>
        <div class="clock-interval">
          <div class="run-time">
            {{myTime.hour}}:{{myTime.minute}}
          </div>
          <div class="status-timeout">
            ใช้ได้ถึงเวลา {{endtime}}:00
          </div>
        </div>
        <router-link to="/"><button type="button" class="btn checkout" name="button" @click="books">ยกเลิกการจอง</button></router-link>
      </div>
    </div>
  </div>
</template>

<style>
.clock-interval {
  height: 100vh;
  /*margin-top: 20rem;*/
  /*position: absolute;*/
  /*padding-top: 20px;
  text-align: center;*/
  background: url('../assets/clock.png');
  background-repeat: no-repeat;
  background-position: center;
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
      endtime: parseInt(this.time) + parseInt(this.amount)
    }
  },
  methods: {
    books () {
      let vm = this
      let item = {
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
      this.book(item, this.id)
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
