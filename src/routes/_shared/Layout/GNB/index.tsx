import styles from './gnb.module.scss'

import { NavLink } from 'react-router-dom'
import { CalendarIcon, LoginIcon, TodoIcon, DashboardIcon } from 'assets/icons'

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
  const changeTest = () => {
    document.documentElement.setAttribute('background-theme', 'light')
  }

  return (
    <div className={styles.gnbContainer}>
      <ul>
        {GNB_LIST.map((item) => (
          <li key={item.value}>
            <NavLink to='/'>{item.src}</NavLink>
          </li>
        ))}
        <li>
          <button type='button' onClick={changeTest}>
            토글
          </button>
        </li>
      </ul>
    </div>
  )
}

export default GNB
