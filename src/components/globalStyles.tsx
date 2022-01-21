import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle``

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}

export { GlobalStyles }
