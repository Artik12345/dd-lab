<template>
  <div class="content-mini" :class="{ 'content-mini-important': important }">
      <div class="content-mini-header">
          Название события
          <span>X</span>
      </div>
      <div class="content-mini-body">
          <p>{{event.time}}</p>
          <p>{{event.date}}</p>
      </div>
      <div class="content-mini-footer">
          <img :src="person.image" class="content-mini-footer__img">
          <div class="content-mini-footer__name-block">
              <p>{{person.name}}</p>
              <p>{{person.job}}</p>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'ContentMini',
  props: ['event', 'person', 'important'],
  data () {
    return {

    }
  }
}
</script>


<style scoped>
.content-mini {
    width: 270px;
    height: 270px;
    background: white;
    margin: 10px auto;
    padding: 15px;
    color: rgb(75, 75, 75)
}
.content-mini-important {
    background: #e38b8b;
    color: white;
}

.content-mini-header {
    font-size: 16px;
}
.content-mini-header > span {
    float: right;
}

.content-mini-body {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content-mini-body > p:first-of-type {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 10px 0;
}
.content-mini-body >p:last-of-type {
    font-size: 18px;
    color: #777;
}


.content-mini-footer {
    display: flex;
    flex-direction: row;
}
.content-mini-footer__img {
    height: 50px;
    width: 50px;
}
.content-mini-footer__name-block {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.content-mini-footer__name-block > P:first-of-type {
    font-weight: bold;
}
.content-mini-footer__name-block > P:last-of-type {
    color: rgb(206, 203, 203);
}

</style>