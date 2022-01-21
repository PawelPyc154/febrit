import React from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { UserComments } from './pages/userComments'
import { UserLayout } from './pages/userLayout'
import { UserPosts } from './pages/userPosts'

const App = () => (
  <Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<UserLayout />}>
          <Route index element={<UserPosts />} />
          <Route path=":id" element={<UserComments />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </Container>
)

export { App }

const Container = tw.div`bg-red-500 text-white`
