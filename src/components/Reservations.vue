<template>
  <div class="Reservations">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        จำนวนชั่วโมงที่ต้องการจอง<input type="text" v-model="endtime">
        <router-link :to="'/profile/' + room['.key']"><button type="button" name="button" @click="books">จอง</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rooms', 'id', 'book'],
  name: 'Reservations',
  data () {
    return {
      endtime: ''
    }
  },
  methods: {
    books () {
      let currentdate = new Date()
      let endHr = parseInt(currentdate.getHours()) + parseInt(this.endtime)
      let item = {
        endtime: endHr + ':' + currentdate.getMinutes(),
        starttime: currentdate.getHours() + ':' + currentdate.getMinutes(),
        status: 'active'
      }
      this.book(item, this.id)
    }
  }
}
</script>
