<template>
  <div class="Feeds">
    <!-- {{rooms}} -->
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <table class="table is-striped status-rooms">
            <thead>
              <tr>
                <th>Room</th>
                <th>Borrow</th>
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
                      <button type="button" @click="setTime('9')">09:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('10')">10:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('11')">11:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('12')">12:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('13')">13:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('14')">14:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('15')">15:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('16')">16:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('17')">17:00</button>
                    </a>
                  </router-link>
                  <router-link :to="'/reservations/' + room['.key'] + '/' + time">
                    <a class="button-borrow" data-target="modal">
                      <button type="button" @click="setTime('18')">18:00</button>
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
