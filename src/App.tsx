import React from 'react'
import 'styled-components/macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import { UserComments } from './pages/userComments'
import { UserLayout } from './pages/userLayout'
import { UserPosts } from './pages/userPosts'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:id" element={<UserLayout />}>
        <Route index element={<UserPosts />} />
        <Route path=":id" element={<UserComments />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export { App }
