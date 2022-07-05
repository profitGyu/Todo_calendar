import styles from './calendar.module.scss'
import dayjs from 'dayjs'
import { memo } from 'react'
import { cx } from 'styles'

interface Props {
  num: number
  NoCurrent: boolean
}

const CalendarItem = ({ num, NoCurrent }: Props) => {
  const today = dayjs().format('DD')

  return (
    <td className={cx({ [styles.noCurrent]: NoCurrent })}>
      <button type='button'>{num}</button>
    </td>
  )
}
export default memo(CalendarItem)
