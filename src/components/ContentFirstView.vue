
<template>
  <div class="content-first-view">
    <div class="content-today-block">
      <div class="content-today-header">
        <p class="content-today-header__count">Сегодня: {{dataToday.length}}</p>
      </div>
      <div class="content-mini-block">
        <content-mini v-for='ev in dataToday' :key="ev.id" :event='ev.event' :person='ev.person' :important='ev.important'></content-mini>
      </div>
    </div>
    <div class="content-tomorrow-block">
      <div class="content-today-header">
        <p class="content-today-header__count">Завтра: {{dataTomorrow.length}}</p>
      </div>
      <div class="content-mini-block">
        <content-mini v-for='ev in dataTomorrow' :key="ev.id" :event='ev.event' :person='ev.person' :important='ev.important'></content-mini>
      </div>
    </div>
  </div>
</template>

<script>
import ContentMini from './ContentMini.vue'

export default {
  name: 'ContentFirstView',
  props: ['dataToday', 'dataTomorrow'],
  data () {
    return {
      
    }
  },
  computed: {
    getTime () {
      console.log(this.data)
      if (this.data !== null) {
        console.log(this.data[1].event.time)
        return this.data[1].event.time
      }
    }
  },
  components: {
    'content-mini': ContentMini
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content-first-view {
  height: auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.content-today-block {
  margin: 0 40px 0 0;
  /* margin: 10px 10px; */
  flex: 2 1 auto;
}

.content-today-header {
  height: 50px;
  line-height: 50px;
  font-size: 23px;
  border-bottom: 1px solid #e0e0e0;
}

.content-today-header__count {
  padding: 0 0 0 15px;
}

.content-tomorrow-block {
  flex: 0 2 auto;
  min-width: 300px;
}

.content-mini-block {
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
}

</style>
