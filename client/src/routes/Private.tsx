import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Registration } from '../pages/registration/Registration'
import { Viewing } from '../pages/viewing/Viewing'
import { AuthProvider } from '../context/AuthContext'
import { Authorization } from '../pages/authorization/Authorization'
import { Tape } from '../pages/tape/Tape'
import { CreateVideo } from '../pages/createVideo/CreateVideo'
// import { Test } from '../pages/test'



export const Private = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tape />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/viewing/:id_user" element={<Viewing/>} />
          <Route path='/create' element={<CreateVideo />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}