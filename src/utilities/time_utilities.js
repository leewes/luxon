import { DateTime } from 'luxon'

export const getTime = (timeZone = 'Asia/Tokyo', format = 'yyyy-MM-dd') => {
  const locale = document.documentElement.lang !== 'en' 
    ? document.documentElement.lang == 'ja' 
    ? 'ja' : document.documentElement.lang == 'zh' 
    ? 'zh-tw' : 'en' : 'en';
  const dt = DateTime.now().setLocale(locale);

  return dt.setZone(timeZone).toFormat(format);
}

export const formatDate = (datetime, format = 'yyyy-MM-dd', timeZone = 'Asia/Tokyo', locale) => {
  const _date = DateTime.fromFormat(datetime, 'yyyy-MM-dd HH:mm:ss ZZZ').setZone(timeZone);
    
  if (locale) {
    _date.setLocale(locale)
  }

  return _date.toFormat(format)
}

// Todo: refactor redundant function, formatDate can be used
export const dayTrimmed = (datetime) => {
  return DateTime.fromFormat(datetime, 'yyyy-MM-dd HH:mm:ss ZZZ').toFormat("d");
}
export const monthTrimmed = (datetime) => {
  return DateTime.fromFormat(datetime, 'yyyy-MM-dd HH:mm:ss ZZZ').toFormat("MMM");
}

// math diff between two dates
export const getDateDiff = (date1, date2, measurement = 'day') => {
  return moment(date2).diff(moment(date1), measurement)  
}