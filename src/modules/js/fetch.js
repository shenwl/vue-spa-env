import axios from 'axios'

// 开发环境和真实环境切换
const testHost = 'http://host'  // 替换成你的  baseUrl
const realHost = 'http://'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = testHost

/*
fetch('/login', 'post', {usernmae: 'aaa', password: '123456'})
  .then(data => {
    console.log(data)
  }).catch(data => {
    console.error(data.msg)
  })
*/

export default function fetch(url, type='get', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus (status) {
        return (status >= 200 && status < 300)|| status === 400
      }
    }
    if(type.toLowerCase() === 'get'){
      option.params = data
    }else {
      option.data = data
    }
    axios(option).then((res)=>{
      if(res.status === 200){
        resolve(res.data)
      }else{
        console.error(res.data.msg||'参数错误')
        reject(res.data)
      }
    }).catch(function(err){
      console.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}
