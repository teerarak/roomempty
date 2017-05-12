<template>
  <div class="Feeds">

    <div class="columns">
      <div class="column is-9 is-offset-1">
        <div v-for="room in rooms">
          <div v-show = "room.status == 'empty'">
            {{room['.key']}} <router-link :to="'/reservations/' + room['.key']"><button type="button">จอง</button></router-link>
          </div>
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
    }
  },
  methods: {
  }
}
</script>
