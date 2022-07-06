import styles from './calendar.module.scss'
import { useMemo } from 'react'
import CalendarItem from './calendarItem'
import { useRecoilState } from 'recoil'
import selectDateState from '../state'

const DAY = [
  {
    name: 'Sun',
    id: 'sun_1',
  },
  {
    name: 'Mon',
    id: 'mon_1',
  },
  {
    name: 'Tue',
    id: 'tue_1',
  },
  {
    name: 'Wed',
    id: 'wed_1',
  },
  {
    name: 'Thu',
    id: 'thu_1',
  },
  {
    name: 'Fri',
    id: 'fri_1',
  },
  {
    name: 'Sat',
    id: 'sat_1',
  },
]

const CalenderForm = () => {
  const [selectDate, setSelectDate] = useRecoilState(selectDateState)

  const prevDay = useMemo(() => selectDate.subtract(1, 'month').endOf('month').get('day') + 1, [selectDate])
  const preLastDate = useMemo(() => Number(selectDate.subtract(1, 'month').endOf('month').format('DD')), [selectDate])
  const lastDay = useMemo(() => selectDate.endOf('month').get('day') + 1, [selectDate])
  const lastDate = useMemo(() => Number(selectDate.endOf('month').format('DD')), [selectDate])

  const onClickPreDayHandle = () => {
    setSelectDate((pre) => pre.subtract(1, 'month'))
  }

  const onClickNextDayHandle = () => {
    setSelectDate((pre) => pre.add(1, 'month'))
  }

  return (
    <table className={styles.calendarTable}>
      <caption>
        <div className={styles.calendarCaptionWrap}>
          <button type='button' onClick={onClickPreDayHandle}>
            &lt;
          </button>
          {selectDate.format('YYYY-MM')}
          <button type='button' onClick={onClickNextDayHandle}>
            &gt;
          </button>
        </div>
      </caption>
      <thead>
        <tr className={styles.calendarThead}>
          {DAY.map((item) => (
            <th key={item.id}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className={styles.grid}>
          {new Array(prevDay % 7 === 0 ? 0 : prevDay).fill(0).map((_, i) => {
            const preKey = `pre-day-${i}`
            return <CalendarItem num={preLastDate - prevDay + i + 1} key={preKey} noCurrent />
          })}
          {new Array(lastDate).fill(0).map((_, i) => {
            const CurrentKey = `current-day-${i}`
            return <CalendarItem num={i + 1} key={CurrentKey} />
          })}
          {new Array(7 - lastDay).fill(0).map((_, i) => {
            const preKey = `next-day-${i}`
            return <CalendarItem key={preKey} num={i + 1} noCurrent />
          })}
        </tr>
      </tbody>
    </table>
  )
}
export default CalenderForm
