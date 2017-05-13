<template>
  <div class="Reservations">
    <div v-for="room in rooms">
      <div class="modal is-active" v-if = "room['.key'] == id">
        <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">จำนวนชั่วโมงที่ต้องการจอง</p>
            </header>
            <section class="modal-card-body">
              <a class="button is-success">+</a>
              <input type="text" v-model="endtime" size="30">
              <a class="button is-danger">-</a>
            </section>
            <footer class="modal-card-foot">
              <router-link :to="'/profile/' + room['.key'] + '/' + time"><a class="button is-success" @click="books">จอง</a></router-link>
              <a href="#" class="button">ยกเลิก</a>
            </footer>
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
