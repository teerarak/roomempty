<template>
  <div class="Feeds">
    <div v-for="room in rooms">
      <div v-show = "room.status == 'empty'">
        {{room['.key']}} <router-link :to="'/reservations/' + room['.key']"><button type="button">จอง</button></router-link>
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
