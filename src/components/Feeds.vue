<template>
  <div class="Feeds">

    <div class="home-text">
        <h1 class="heading" data-target-resolver></h1>
    </div>

    <div class="columns is-flex-mobile is-hidden-tablet">
      <div class="column ">
            <section class="sec">
              <a href="#" class="scroll-down on-mobile" address="true"></a>
            </section>
      </div>
    </div>
    <div class="columns is-flex-mobile is-hidden-tablet">
      <div class="column">
        <section class="ok">
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
        </section>
      </div>
    </div>


    <div class="columns is-flex-tablet is-hidden-mobile">
      <div class="column">
            <section class="sec">
              <a href="#" class="scroll-down on-tablet" address="true"></a>
            </section>
      </div>
    </div>
    <div class="columns is-flex-tablet is-hidden-mobile">
      <div class="column">
        <section class="ok2">
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
        </section>
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
    },
    setTime (time) {
      let vm = this
      vm.time = time
    }
  }
}
</script>

<style>
.home-text {
  font-family: 'Unica One', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(left top, #262626, #595959);
  background: -o-linear-gradient(bottom right, #262626, #595959);
  background: -moz-linear-gradient(bottom right, #262626, #595959);
  background: linear-gradient(to bottom right, #262626, #595959);
  height: 45rem;
  width: 100%;
}
.heading {
  margin-bottom: 6rem;
  color: #eee;
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 10rem;
}
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
