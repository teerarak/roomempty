<template>
  <div class="Feeds">
<<<<<<< HEAD
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
=======
    <div v-for="room in rooms">
      <div v-show = "room.status == 'empty'">
        {{room['.key']}} <router-link :to="'/reservations/' + room['.key']"><button type="button">จอง</button></router-link>
>>>>>>> 8f3d9182daa0a957f72c14b37e5accf042c09fd2
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
      tableData: [{date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles'}]
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>
