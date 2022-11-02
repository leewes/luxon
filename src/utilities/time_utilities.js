import { DateTime } from 'luxon'

export const getTime = (timeZone = 'Asia/Tokyo', format = 'yyyy-MM-dd', locale = 'en') => {
  const mapLocale = locale == 'ja' 
    ? 'ja-JP' : locale == 'zh' 
    ? 'zh-tw' : 'en';
  const now = DateTime.now().setLocale(mapLocale);
  
  return now.setZone(timeZone).toFormat(format);
}

export const formatDate = (datetime, format = 'yyyy-MM-dd', timeZone = 'Asia/Tokyo', locale) => {
  const _date = DateTime.fromISO(datetime).setZone(timeZone);
    
  if (locale) {
    _date.setLocale(locale)
  }

  return _date.toFormat(format)
}


// Todo: refactor redundant function, formatDate can be used
//day of the month 
export const dayTrimmed = (datetime) => {
  
  return DateTime.fromFormat(datetime, 'yyyy-MM-dd HH:mm:ss ZZZ').toFormat("d");
}
// month name set by locale shortened to three characters
export const monthTrimmed = (datetime) => {
  return DateTime.fromFormat(datetime, 'yyyy-MM-dd HH:mm:ss ZZZ').toFormat("MMM");
}

// math diff between two dates
export const getDateDiff = (date1, date2, measurement = 'day') => {
  return moment(date2).diff(moment(date1), measurement)  
}