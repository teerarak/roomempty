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
<<<<<<< HEAD
=======
  data () {
    return {
      myTime: {
        hour: '03',
        minute: '00'
      },
      timeID: ''
    }
  },
>>>>>>> 8f3d9182daa0a957f72c14b37e5accf042c09fd2
  methods: {
    books () {
      let currentdate = new Date()
      let item = {
        endtime: '0:00',
        starttime: currentdate.getHours() + ':' + currentdate.getMinutes(),
        status: 'empty'
      }
      this.book(item, this.id)
<<<<<<< HEAD
    }
=======
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
>>>>>>> 8f3d9182daa0a957f72c14b37e5accf042c09fd2
  }
}
</script>
