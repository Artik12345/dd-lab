import axios from 'axios'

export class Api {
  constructor () {
    this.instance = axios.create({
      baseURL: 'https://5b164503a1c7e300147c869a.mockapi.io/api/v1/'
    })
  }

  getEvents () {
    return this.instance.request({
      type: 'get',
      url: 'events'
    })
  }

  getEventTypes () {
    return this.instance.request({
      type: 'get',
      url: 'event-types'
    })
  }

  install (Vue) {
    Vue.prototype.api = this
  }
}
