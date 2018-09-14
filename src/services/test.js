import url from '@/modules/js/api.js'
import fetch from '@/modules/js/fetch.js'


const getTestMsg = async function() {
  const ret = fetch(url.hello, 'get', {})
  return ret
}

export default {
  getTestMsg,
}
