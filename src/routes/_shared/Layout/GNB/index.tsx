import styles from './gnb.module.scss'
import { cx } from 'styles'

import { NavLink } from 'react-router-dom'
import { CalendarIcon, LoginIcon, TodoIcon, DashboardIcon } from 'assets/icons'
import { useState } from 'react'
import ToggleBtn from 'components/Toggle/toggleBtn'
import useChangeTheme from 'hooks/useChangeTheme'

const GNB_LIST = [
  {
    value: 'todo',
    src: <TodoIcon />,
  },
  {
    value: 'calender',
    src: <CalendarIcon />,
  },
  {
    value: 'login',
    src: <LoginIcon />,
  },
  {
    value: 'dashboard',
    src: <DashboardIcon />,
  },
]
const GNB = () => {
  const { themeChange } = useChangeTheme()

  return (
    <div className={styles.gnbContainer}>
      <ul>
        {GNB_LIST.map((item) => (
          <li key={item.value}>
            <NavLink to='/'>{item.src}</NavLink>
          </li>
        ))}
        <li>
          <ToggleBtn onClick={themeChange} />
        </li>
      </ul>
    </div>
  )
}

export default GNB
