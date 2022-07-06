import { Routes, Route } from 'react-router-dom'
import { worker } from 'mocks/browser'
import Calender from './calendar'
import Layout from './_shared/Layout'
import Todo from './todo'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Calender />} />
        <Route path='todo' element={<Todo />}>
          <Route path=':num' element={<Todo />} />
        </Route>
      </Route>
      <Route path='*' element={<div>잘못된 접근입니다.</div>} />
    </Routes>
  )
}

export default App
