import React from 'react'

import { Registration } from '../pages/registration/Registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Private = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>

  )
}