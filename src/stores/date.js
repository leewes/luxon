
import { defineStore } from 'pinia'
import { getTime } from '../utilities/time_utilities'

export default defineStore({
  id: 'date',
  state: () => ({
    currentTime: getTime(),
    locale: 'en',
  }),
  getters: {
    getTime: (state) => state.currentTime
  },
  actions: {
    setLocale( newLocale = 'en') {
      this.locale = newLocale;
    }
  }
})