<template>
  <div class="Reservations">
    <div v-for="room in rooms">
      <div class="modal is-active" v-if = "room['.key'] == id">
        <router-link :to="'/'">
          <div class="modal-background"></div>
        </router-link>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">จำนวนชั่วโมงที่ต้องการจอง</p>
          </header>
          <section class="modal-card-body">
            <div class="field has-addons has-addons-centered" >
              <p class="control">
                <a class="button is-danger">-</a>
              </p>
              <p class="control">
                <input class="input" type="text" v-model="endtime" placeholder="จำนวนชั่วโมง">
              </p>
              <p class="control">
                <a class="button is-success">+</a>
              </p>
            </div>
          </section>
          <footer class="modal-card-foot">
            <router-link :to="'/profile/' + room['.key'] + '/' + time">
              <a class="button is-success" @click="books" style="padding-left:18px; padding-right:18px;">จอง</a>
            </router-link>
            <a href="#" class="button" style="margin-left:15px;">ยกเลิก</a>
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
<style>
  @media (min-width:1024px){
    .modal-card{
      width: 35vw;
    }
  }
  @media (max-width:1024px){
    .modal-card{
      width: 50vw;
    }
  }
</style>
