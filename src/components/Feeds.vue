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
                <td v-show = "room.status == 'empty'">
                  {{room['.key']}}
                </td>
                <td>
                  <router-link :to="'/reservations/' + room['.key']"><a class="button-borrow" data-target="modal"><button type="button">จอง</button></a></router-link>
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
      time: '00:00'
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
