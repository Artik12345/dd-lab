import axios from 'axios'

export class Api {
  constructor () {
    this.instance = axios.create({
      baseURL: 'https://picsum.photos/'
    })
  }

  // Наши методы для обращения к api
  // Пример get запроса
  getPhotos () {
    return this.instance.request({
      type: 'get',
      url: 'list'
    })
  }

  // Метод для регистрации класса в прототипе Vue
  // После чего экземпляр будет доступен в любом компоненте через this.api
  install (Vue) {
    Vue.prototype.api = this
  }
}
