/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.
*/
const assert = require('assert')

const timeConversion = (s) => {
    // Write your code here
    let [hour, minute, temp] = s.split(':')

    const [sec, period] = [temp.substring(0,2), temp.substring(2, 4)]
    if(period === 'AM' && hour === '12')
        hour = '00'
    else if (period ===  'PM' && hour !== '12') {
        hour = parseInt(hour)
        hour = hour + 12
    }

    return `${hour}:${minute}:${sec}`
}

assert.equal(timeConversion('06:40:03AM'), '06:40:03')
assert.equal(timeConversion('12:05:39AM'), '00:05:39')
