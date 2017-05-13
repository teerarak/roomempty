<template>
  <div class="Feeds">
    <div class="header">
      <p>จองห้องติว</p>
    </div>
    <!-- {{rooms}} -->
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <div class="note">

            <div class="note" style="padding-top:2px;">จองไม่ได้</div>
            <div class="note" style="background-color:#ff2b56; width:32px; height:32px; "></div>
            <div class="note" style="padding-top:2px;">จองได้</div>
            <div class="note" style="background-color:#00d1b2; width:32px; height:32px;"></div>
          </div>
          <table class="table is-striped status-rooms" >
            <thead>
              <tr>
                <th>ห้อง</th>
                <th>เวลา</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="room in rooms">
                <td>
                  {{room['.key']}}
                </td>
                <td>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('9')">09:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('10')">10:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('11')">11:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('12')">12:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('13')">13:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('14')">14:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('15')">15:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('16')">16:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('17')">17:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" class="button is-primary" @click="setTime('18')">18:00</button>
                    </a>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rooms'],
  name: 'Feeds',
  data () {
    return {
      time: 0
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    setTime (time) {
      let vm = this
      vm.time = time
    }
  }
}
</script>

<style>
  .header p{
    font-size: 60px;
    margin-bottom: 100px;
  }
  .note{
    display: inline-block;
    float:right;
    border-radius: 5px;
    margin-right: 5px;
  }
</style>
