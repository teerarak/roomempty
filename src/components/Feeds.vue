<template>
  <div class="Feeds">

    <div class="column is-flex-mobile is-hidden-tablet">
        <div class="home-text">
            <h1 class="heading on-mobile" data-target-resolver></h1>
        </div>
        <section class="sec" v-show="authorized">
          <a href="#" class="scroll-down" address="true"></a>
        </section>
        <button type="button" name="button" class="btn start" v-if="authorized != true">Get Start</button>
    </div>

    <div class="column is-flex-mobile is-hidden-tablet">
      mobile
    </div>
    <div class="column is-flex-tablet is-hidden-mobile">
      with out mobile
    </div>

    <div class="container-fluid room-status">
      <section class="ok">
        <div class="header">
          <p>จองห้องติว</p>
        </div>
        <!-- {{rooms}} -->
        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="note">
                <div class="note textnote">จองไม่ได้</div>
                <div class="note boxnote" style="background-color:#ff2b56;"></div>
                <div class="note textnote">จองได้</div>
                <div class="note boxnote" style="background-color:#00d1b2;"></div>
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
      </section>
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
  background: -webkit-linear-gradient(left top, #262626, #595959); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(bottom right, #262626, #595959); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(bottom right, #262626, #595959); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to bottom right, #262626, #595959); /* Standard syntax */
  height: 40rem;
  width: 100%;
}
.heading.on-mobile {
  color: #eee;
  font-size: 7rem;
  font-weight: 300;
  text-transform: uppercase;
}
.container-fluid.room-status {
  background-color: white;
  height: 50rem;
  text-align: center;
  padding-top: 10rem;
}
.btn.start {
  position: absolute;
  top: 40rem;
  bottom: 10px;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 50px;
  border-radius: 3%;
  border: 1px solid #FFF;
  background-color: transparent;
  color: #FFF;
  font-size: 15px;
  border-radius: 10%;
}
*,
:after,
:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.scroll-down {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.scroll-down {
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

.scroll-down:before {
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
  .note{
    display: inline-block;
    float:right;
    border-radius: 5px;
    margin-right: 5px;
  }
  .boxnote{
    width:32px;
    height:32px;
  }
  @media (min-width:1024px){
    .textnote{
      padding-top:2px;
    }
  }
  @media (max-width:1024px){
    .textnote{
      font-size: 24px;
    }
    .boxnote{
      margin-top: 5px;
    }
    table{
      font-size: 24px;
    }
    button{
      margin-bottom: 5px;
    }
  }
</style>
