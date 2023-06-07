import { Route, Routes } from 'react-router-dom'

import { Viewing } from '../pages/viewing/Viewing'

import { CreateVideo } from '../pages/createVideo/CreateVideo'
import { Tape } from '../pages/tape/Tape'
import { LikeVideoTape } from '../pages/likeVideoTape/LikeVideoTape'
import { MyCreateVideoTape } from '../pages/myCreateVideoTape/MyCreateVideoTape'
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'

import './Private.style.css'

export const Private = () => {
  return (
    <div className='page'>
      <div className='header-wrapper'>
        <Header />
      </div>
      <div className="navigation-wrapper">
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Tape />} />
          <Route path='/like' element={<LikeVideoTape />} />
          <Route path='/my' element={<MyCreateVideoTape />} />
          <Route path="/viewing/:id_user" element={<Viewing />} />
          <Route path='/create' element={<CreateVideo />} />
        </Routes>
      </div>
    </div>

  )
}