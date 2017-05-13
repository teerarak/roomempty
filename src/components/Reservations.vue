<template>
  <div class="Reservations">
    <div v-for="room in rooms">
      <div v-if = "room['.key'] == id">
        จำนวนชั่วโมงที่ต้องการจอง<input type="text" v-model="endtime">
        <router-link :to="'/profile/' + room['.key'] + '/' + time"><button type="button" name="button" @click="books">จอง</button></router-link>
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
      endtime: ''
    }
  },
  methods: {
    books () {
      let item = {
        endtime: parseInt(this.time) + 3 + ':00',
        starttime: this.time,
        status: 'active'
      }
      this.book(item, this.id)
    }
  }
}
</script>
