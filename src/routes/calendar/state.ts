import { atom } from 'recoil'
import dayjs, { Dayjs } from 'dayjs'

const selectDateState = atom<Dayjs>({
  key: '#selectDateState',
  default: dayjs(),
})

export default selectDateState
