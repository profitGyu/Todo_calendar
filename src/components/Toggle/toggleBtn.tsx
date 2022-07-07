import styles from './toggleBtn.module.scss'
import { cx } from 'styles'

import { MouseEventHandler, useState } from 'react'
import useChangeTheme from 'hooks/useChangeTheme'

interface prop {
  onClick: Function
}

const ToggleBtn = ({ onClick }: prop) => {
  const [isClick, setIsClick] = useState(false)

  function onClickHandle() {
    setIsClick((prev) => !prev)
    onClick()
  }
  return (
    <div className={styles.darkModeToggleBtn}>
      <button className={styles.under} type='button'>
        {` `}
      </button>
      <button className={styles.under} type='button'>
        {` `}
      </button>
      <button className={cx(styles.toggleButton, { [styles.light]: isClick })} onClick={onClickHandle} type='button'>
        {` `}
      </button>
    </div>
  )
}
export default ToggleBtn
