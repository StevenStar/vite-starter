import Vue from 'vue'
import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc'
// import timezone from 'dayjs/plugin/timezone'
// dayjs.extend(utc)
// dayjs.extend(timezone)

export function setupFilters() {
    Vue.filter('parseDate', (value: string | number | Date | dayjs.Dayjs | null | undefined, format = 'YYYY-DD-MM.') => {
        if (!value) return ''
        return dayjs(value).format(format)
    })
}