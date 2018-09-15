import url from '@/modules/js/api.js'
import fetch from '@/modules/js/fetch.js'


const getTestMsg = async function() {
  return fetch(url.hello, 'get', {})
}

export default {
  getTestMsg,
}
