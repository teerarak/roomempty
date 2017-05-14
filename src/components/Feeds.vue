<template>
  <div class="Feeds">
    <div class="columns is-flex-mobile is-hidden-tablet">
      <div class="column">
          <h1 class="heading-rooms on-mobile">จองห้องติว</h1>
          <div class="container is-fluid">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <center>
                  <div class="note on-mobile">
                    <div class="note boxnote on-mobile" style="background-color:#00d1b2;"></div>
                    <div class="note textnote on-mobile">จองได้</div>
                    <div class="note boxnote on-mobile" style="background-color:#ff2b56;"></div>
                    <div class="note textnote on-mobile">จองไม่ได้</div>
                  </div>
                </center>
            <table class="table is-striped status-rooms" >
              <thead>
                <tr>
                  <th><center>ห้อง</center></th>
                  <th><center>เวลา</center></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="room in rooms">
                  <td>
                    {{room['.key']}}
                  </td>
                  <td>
                    <router-link :to="'/reservations/' + room['.key'] + '/' + index" v-for="(time, index) in room['.value']" v-if="index >=9">
                      <a class="button-borrow" data-target="modal">
                        <button type="button" class="button" style="backgroundColor:#00d1b2" v-if="time == 'empty'"><p v-if="index===9">0</p>{{index}}:00</button>
                        <button type="button" class="button" style="backgroundColor:#ff2b56" v-else disabled><p v-if="index===9">0</p>{{index}}:00</button>
                      </a>{{ }}
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
          </div>
         </div>
      </div>
    </div>
    <div class="columns is-flex-tablet is-hidden-mobile">
      <div class="column">
          <h1 class="heading-rooms on-tablet">จองห้องติว</h1>
          <div class="container is-fluid">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="note on-tablet">
                  <div class="note textnote on-tablet">จองไม่ได้</div>
                  <div class="note boxnote on-tablet" style="background-color:#ff2b56;"></div>
                  <div class="note textnote on-tablet">จองได้</div>
                  <div class="note boxnote on-tablet" style="background-color:#00d1b2;"></div>
                </div>
            <table class="table is-striped status-rooms" >
              <thead>
                <tr>
                  <th><center>ห้อง</center></th>
                  <th><center>เวลา</center></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="room in rooms">
                  <td>
                    {{room['.key']}}
                  </td>
                  <td>
                    <router-link :to="'/reservations/' + room['.key'] + '/' + index" v-for="(time, index) in room['.value']" v-if="index >=9">
                      <a class="button-borrow" data-target="modal">
                        <button type="button" class="button" style="backgroundColor:#00d1b2" v-if="time == 'empty'"><p v-if="index===9">0</p>{{index}}:00</button>
                        <button type="button" class="button" style="backgroundColor:#ff2b56" v-else disabled><p v-if="index===9">0</p>{{index}}:00</button>
                      </a>{{ }}
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
          </div>
         </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['rooms', 'authorized'],
  name: 'Feeds',
  data () {
    return {
      time: 0
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style>
.heading-rooms.on-mobile {
  margin-top: 2rem;
  font-size: 2rem;
  text-align: center;
}
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.scroll-down.on-mobile {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.scroll-down.on-mobile {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -16px;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid #FFF;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
}

.scroll-down.on-mobile:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid white;
    border-width: 0px 0 2px 2px;
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
  .header p{
    font-size: 60px;
    margin-bottom: 100px;
  }
  .note.on-mobile {
    margin-top: 20px;
    display: inline-block;
  }
  .note.boxnote.on-mobile{
    width:24px;
    height:24px;
    border-radius: 2px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .note.textnote.on-mobile {
    font-size: 15px;
  }
  table {
    font-size: 24px;
    margin-top: 2rem;
  }
  button {
    margin-bottom: 5px;
  }
</style>
