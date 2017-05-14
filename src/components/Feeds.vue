<template>
  <div class="Feeds">
    <div class="container-fluid">
      <div class="container-fluid home-text">
          <h1 class="heading" data-target-resolver></h1>
      </div>
      <section class="sec" v-show="authorized">
        <a href="#" class="scroll-down" address="true"></a>
      </section>
      <button type="button" name="button" class="btn start" v-if="authorized != true">Get Start</button>
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
    }
  }
}
</script>

<style>
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
