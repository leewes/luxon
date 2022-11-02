import moment from "moment-timezone"

// switch language
if (document.documentElement.lang !== 'en') {
    const locale = document.documentElement.lang == 'ja' 
    ? 'ja' : document.documentElement.lang == 'zh' 
    ? 'zh-tw' : 'en'

    moment.locale(locale);
}

export const getTime = (timeZone = 'Asia/Tokyo', format = 'YYYY-MM-DD') => {
  return moment.tz(timeZone).format(format)
}

export const formatDate = (datetime, format = 'YYYY-MM-DD', timeZone = 'Asia/Tokyo', locale) => {
  const _date = moment(datetime).tz(timeZone);
  
  if(locale) {
    _date.locale(locale)
  }

  return _date.format(format)
}

// Todo: refactor redundant function, formatDate can be used
export const dayTrimmed = (datetime) => {
  return moment(datetime, 'YYYY-MM-DD HH:mm:ss z').format("D");
}

export const monthTrimmed = (datetime) => {
  return moment(datetime, 'YYYY-MM-DD HH:mm:ss z').format("MMM");
}

export const getDateDiff = (date1, date2, measurement = 'day') => {
  return moment(date2).diff(moment(date1), measurement)  
}