<template>
  <div class="profile">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        <h1>คุณกำลังจองห้อง {{room['.key']}}</h1>
        <h3>เวลาคงเหลือ {{myTime.hour}}:{{myTime.minute}}</h3>
        <h3>ใช้ได้ถึงเวลา {{room.endtime}}</h3>
        <router-link to="/"><button type="button" name="button" @click="books">ยกเลิกการจอง</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rooms', 'id', 'book'],
  name: 'profile',
  data () {
    return {
      myTime: {
        hour: '03',
        minute: '00'
      },
      timeID: ''
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
    this.timeID = setInterval(this.timer, 100)
  }
}
</script>
