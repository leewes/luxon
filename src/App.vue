<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import useDateStore from "./stores/date";
import {
  getTime,
  formatDate,
  dayTrimmed,
  monthTrimmed,
  getDateDiff
} from "./utilities/time_utilities";

const locale = ref(document.documentElement.lang);
const time = ref(getTime());
const trim = ref("day");
const date = ref("2017-08-10 16:48:37 -0500");
const format = ref("h:mm a");
const measurements = ref('years,months,days')
const trimFunction = ref(dayTrimmed);
const difference = ref({});
const times = ref({
  date1: "2017-08-09 16:48:37 -0500",
  date2: "2017-08-10 16:48:37 -0500",
});

function updateLocale(e) {
  locale.value = e.target.value;
}

function getNewTime() {
  document.documentElement.lang = locale.value;
  time.value = getTime();
}

function selectTrim() {
  trim == "day"
    ? (trimFunction.value = dayTrimmed)
    : (trimFunction.value = monthTrimmed);
}

function getDifference() {
  difference.value = getDateDiff(times.value.date1, times.value.date2, measurements.value.split(','));
}
</script>

<template>
  <div class="app">
    <h1>This is Luxon</h1>
    <section>
      <h3>Date in [{{ locale }}] locale:</h3>
      <div>{{ time }}</div>
    </section>
    <div>
      <input v-model="locale" />
      <button @click="getNewTime()">Submit</button>
    </div>
    <br />
    <div class="wrapper">
      <h3>Format date in Asia/Tokyo Timezone:</h3>
      <input v-model="date">
      <input v-model="format">
      <div>{{ formatDate(date, format) }}</div>
    </div>
    <br />
    <div>
      <h3>Trim out [{{ trim }}]</h3>
      <div>{{ trimFunction("2017-08-10 16:48:37 -0500") }}</div>
      <input v-model="trim" />
      <button @click="selectTrim()">Submit</button>
    </div>
    <br />
    <div>
      <h3>The difference between the times is:</h3>
      <div v-for="(measurement, value) in difference">
        <div>{{`${measurement} ${value}`}}</div>
      </div>
      <div class="wrapper">
        <input v-model="times.date1" />
        <input v-model="times.date2" />
        <input v-model="measurements"> <span>* comma separated</span>
      </div>
      <button @click="getDifference()">Calculate</button>
    </div>
  </div>
</template>

<style scoped>
span {
  font-size: 10px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.wrapper > input {
  width: 15em;
}
</style>
