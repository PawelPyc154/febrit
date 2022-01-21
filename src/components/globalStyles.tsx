import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.green.600`,
    ...tw`antialiased`,
    background: theme`colors.gray.100`,
  },
})

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}

export { GlobalStyles }
