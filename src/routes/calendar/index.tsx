import styles from './calendar.module.scss'
import dayjs from 'dayjs'
import { useState } from 'react'

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

const Calender = () => {
  const [selectDate, setSelectDate] = useState(dayjs())

  const prevDay = selectDate.subtract(1, 'month').endOf('month').get('day') + 1
  const preLastDate = Number(selectDate.subtract(1, 'month').endOf('month').format('DD'))
  const lastDay = selectDate.endOf('month').get('day') + 1
  const lastDate = Number(selectDate.endOf('month').format('DD'))

  const onClickPreDayHandle = () => {
    setSelectDate((pre) => pre.subtract(1, 'month'))
  }

  const onClickNextDayHandle = () => {
    setSelectDate((pre) => pre.add(1, 'month'))
  }

  return (
    <div>
      <table>
        <caption>
          <button type='button' onClick={onClickPreDayHandle}>
            &lt;
          </button>
          {selectDate.format('YYYY-MM')}
          <button type='button' onClick={onClickNextDayHandle}>
            &gt;
          </button>
        </caption>
        <thead>
          <tr className={styles.grid}>
            {DAY.map((item) => (
              <th key={item.id}>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className={styles.grid}>
            {new Array(prevDay).fill(0).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={`pre-day-${i}`} className={styles.noCurrent}>
                <button type='button'>{preLastDate - prevDay + i + 1}</button>
              </td>
            ))}
            {new Array(lastDate).fill(0).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={`current-day-${i}`}>{i + 1}</td>
            ))}
            {new Array(7 - lastDay).fill(0).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={`next-day-${i}`} className={styles.noCurrent}>
                {i + 1}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Calender
