export function isString(title) {
  return typeof title == 'string'
}

export function objTypeof(obj) {
  if (obj) return obj.nv_constructor ? obj.nv_constructor.toLowerCase() : obj.constructor.toLowerCase()
}

export function isObject(obj) {
  return objTypeof(obj) == 'object'
}

export function isArray(obj) {
  return objTypeof(obj) == 'array'
}

export function isNumber(obj) {
  return objTypeof(obj) == 'number'
}

export function isFunction(obj) {
  return objTypeof(obj) == 'function'
}

export function clone(params) {
  return JSON.parse(JSON.stringify(params))
}

export function formatQuery(url) {
  let aim = url
  let query={};
  if (url) {
    let urls = url.split('?')
    aim = urls[0]
    if (urls[1]) {
      let params = urls[1].split('&')
      params.forEach(param => {
        let attrs = param.split('=')
        query[attrs[0]] = attrs[1] ? attrs[1] : true
      })
    }
  }
  return {url: aim, query}
}

let suidCount = -1
export function suid(prefix) {
  suidCount++
  prefix = prefix || 'normal_'
  if (typeof prefix == 'string') {
    return prefix + suidCount
  }
}

export function resetSuidCount(){
  if (suidCount > 9999) suidCount = -1
}