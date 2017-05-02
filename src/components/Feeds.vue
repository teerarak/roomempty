<template>
  <div class="Feeds">
    <div v-for="room in rooms">
      <div v-show = "room.status == 'empty'">
        <h1>{{room['.key']}} <router-link :to="'/reservations/' + room['.key']"><button type="button">จอง</button></router-link></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rooms'],
  name: 'Feeds'
}
</script>
