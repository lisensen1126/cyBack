export function unifiedTime (time) {
  if (~time.indexOf('年')) {
    return fmtDate(time)
  } else {
    return time
  }
}

export function fmtDate (tim) {
  let time = tim.split(/[^0-9]+/ig)
  let mm = tim.indexOf('下午') > -1 ? 'pm' : 'am'
  return formatDate(`${time[0]}/${time[1]}/${time[2]} ${time[3]}:${time[4]} ${mm}`)
}

export function formatDate (time, format = 'YYYY-MM-DD hh:mm') {
  const date = new Date(time)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return format.replace('YYYY', year).replace('MM', formatNum(month)).replace('DD', formatNum(day))
    .replace('hh', formatNum(hours)).replace('mm', formatNum(minutes)).replace('ss', formatNum(seconds))
}

export function addDay (date, day) {
  const _date = +new Date(date)
  const _addDate = _date + day * 24 * 3600 * 1000
  return formatDate(_addDate)
}

function formatNum (num) {
  return num < 10 ? '0' + num : num
}
