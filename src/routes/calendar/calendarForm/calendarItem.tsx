import styles from './calendar.module.scss'
import { cx } from 'styles'

import { memo, useMemo } from 'react'

import { useRecoilValue } from 'recoil'
import selectDateState from '../state'

import dayjs from 'dayjs'

interface Props {
  num: number
  noCurrent?: boolean
}

const CalendarItem = ({ num, noCurrent }: Props) => {
  const selectDate = useRecoilValue(selectDateState)
  const isNow = useMemo(() => selectDate.format('YYYY-MM-') + num === dayjs().format('YYYY-MM-D'), [selectDate, num])

  return (
    <td className={cx(styles.item, { [styles.noCurrent]: noCurrent })}>
      <button type='button' className={cx({ [styles.today]: isNow && !noCurrent })}>
        <div className={styles.itemContainer}>{num}</div>
      </button>
    </td>
  )
}
export default memo(CalendarItem)
