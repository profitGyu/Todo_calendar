import { useRef } from 'react'
import { useClickAway } from 'react-use'
import styles from './modal.module.scss'

import Button from 'components/Button'
import { Exclamation } from 'assets/icons'

interface Props {
  setIsOpenPopup: Function
  text: string
}

const Modal = ({ setIsOpenPopup, text }: Props) => {
  const outsideRef = useRef<HTMLInputElement>(null)

  const handleCloseButtonClick = () => {
    setIsOpenPopup(false)
  }

  useClickAway(outsideRef, () => {
    setIsOpenPopup(false)
  })

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBox} ref={outsideRef}>
        <Exclamation width={80} height={80} />
        <p>{text}</p>
        <Button size='small' onClick={handleCloseButtonClick} primary>
          확인
        </Button>
      </div>
    </div>
  )
}

export default Modal
