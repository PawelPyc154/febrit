import React from 'react'
import 'styled-components/macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import tw from 'twin.macro'
import { Home } from './pages/home'
import { PostDetails } from './pages/postDetails'
import { UserDetails } from './pages/userDetails/userDetails'

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="/user/:userId/:postId" element={<PostDetails />} />
      </Routes>
    </Container>
  </BrowserRouter>
)

export { App }

const Container = tw.div`p-6 lg:(p-10)  2xl:(p-20)`
