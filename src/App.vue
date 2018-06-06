<template>
  <div id="app">
    <div class="header">Тут колличество сегодняшних событий</div>
    <div class="main">
      <div class="navigation-block">
        <p>Актуальные</p>
        <p>Все мероприятия</p>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data : function() {
    return {
      
    }
  },
  created () {
    // Пример вызова api метода из компонента
    this.api.getPhotos()
      .then(({ data }) => {
        console.log('Fetched data from API:')
        console.log(data)
      })
  }
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
  padding: 40px 0;
  background: rgb(185, 224, 228);
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

}

.navigation-block {
  padding: 15px;
  width: 240px;
  height: inherit;
  flex: 0 1 auto;
}

.navigation-block > p {
  margin: 0 0 10px 0;
}
</style>
