<template>
  <div id="app">
    <div class="header">Сегодня {{todayEvents.length}} мероприятий</div>
    <div class="main">
      <div class="navigation-block">
        <p>Актуальные</p>
        <p>Все мероприятия</p>
      </div>
      <router-view :dataToday='todayEvents' :dataTomorrow='tomorrowEvents'/>
    </div>
  </div>
</template>



<script>
export default {
  name: 'App',
  data: function () {
    return {
      allEvents: null,
      todayEvents: null,
      tomorrowEvents: null
    }
  },
  created () {
    this.api.getEvents()
      .then(({ data }) => {
        // console.log('ALL EVENTS:')
        console.log(data)
        this.allEvents = data

        let today = new Date()
        
        this.todayEvents = data.filter((ev) => {
          let evDate = new Date(ev.event.date)
          return evDate.getDate() === today.getDate()
        })

        this.tomorrowEvents = data.filter((ev) => {
          let evDate = new Date(ev.event.date)
          return evDate.getDate() === (today.getDate() + 1)
        })
      })
  },

}
</script>



<style>
body, p {margin: 0;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.main {
  box-sizing: border-box;
  padding: 40px 15px;
  background: #e5f2f5;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

}

.navigation-block {
  padding: 15px 0;
  min-width: 170px;
  height: inherit;
  flex: 0 1 auto;
}

.navigation-block > p {
  margin: 0 0 10px 0;
}
</style>
