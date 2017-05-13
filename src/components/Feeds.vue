<template>
  <div class="Feeds">
    <div v-for="room in rooms">
      <div v-show = "room.status == 'empty'">
        {{room['.key']}}
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('10:00')">10:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('11:00')">11:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
          <router-link :to="'/reservations/' + room['.key'] + time">
            <button type="button" @click="time('09:00')">09:00</button>
          </router-link>
        </router-link>
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
