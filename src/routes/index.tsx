import { Routes, Route } from 'react-router-dom'
import { worker } from 'mocks/browser'
import Calender from './calendar'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Calender />} />
      <Route path='*' element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  )
}

export default App
