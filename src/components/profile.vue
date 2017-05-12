<template>
  <div class="profile">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        <h1>คุณกำลังจองห้อง {{room['.key']}}</h1>
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
  methods: {
    books () {
      let currentdate = new Date()
      let item = {
        endtime: '0:00',
        starttime: currentdate.getHours() + ':' + currentdate.getMinutes(),
        status: 'empty'
      }
      this.book(item, this.id)
    }
  }
}
</script>
