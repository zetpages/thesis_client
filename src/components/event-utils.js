let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'На целый день',
    start: todayStr,
    teacher: 'TEACHER NAME'
  },
  {
    id: createEventId(),
    title: 'BACKEND',
    start: todayStr+ 'T09:00:00',
    teacher: 'TEACHER NAME'
  },
  {
    id: createEventId(),
    title: 'FRONT-END',
    start: todayStr + 'T12:00:00',
    teacher: 'TEACHER NAME'
  }
]

export function createEventId() {
  return String(eventGuid++)
}