import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Tape } from '../pages/tape/Tape'
import { Registration } from '../pages/registration/Registration'
import { Viewing } from '../pages/viewing/Viewing'



export const Private = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tape />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/viewing" element={<Viewing />} />
      </Routes>
    </BrowserRouter>

  )
}