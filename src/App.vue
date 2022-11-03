<script setup>
import { onMounted, ref } from '@vue/runtime-core';
import useDateStore from './stores/date';
import { getTime, formatDate, dayTrimmed, monthTrimmed } from './utilities/time_utilities';
import { getTime as getTimeMoment, formatDate as formatDateMoment } from './utilities/util_datetime'

const locale = ref(document.documentElement.lang);
const time = ref(getTime());
const trim = ref('day');
const trimFunction = ref(dayTrimmed);

function updateLocale(e) {
  locale.value = e.target.value;
}

function getNewTime() {
  document.documentElement.lang = locale.value;
  time.value = getTime()
}

function selectTrim() {
  trim == 'day' ? trimFunction.value = dayTrimmed : trimFunction.value = monthTrimmed;
}

</script>

<template>
  <div class='app'>
    <h1>This is Luxon</h1>
    <section>
      <h3>Date in [{{ locale }}] locale: </h3>
      <div>{{ time }}</div>
      <div>{{getTimeMoment()}}</div>
    </section>
    <div>
      <input v-model="locale">
      <button @click="getNewTime()">Submit</button>
    </div>
    <br>
    <div>
      <h3>Format date for: </h3>
      <p>2017-08-10 16:48:37 -0500</p>
      This is in JP timezone (luxon)
      <div>{{formatDate('2017-08-10 16:48:37 -0500', "h:mm a")}}</div>
      This is in UTC timezone (moment)
      <div>{{formatDateMoment('2017-08-10 16:48:37 -0500',"h:mm A")}}</div>
    </div>
    <br>
    <div>
      <h3>Trim out [{{trim}}]</h3> 
      <div>{{trimFunction('2017-08-10 16:48:37 -0500')}}</div>
      <input v-model="trim">
      <button @click="selectTrim()">Submit</button>
    </div>
  </div>
</template>

<style scoped>

</style>
