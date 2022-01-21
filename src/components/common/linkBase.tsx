import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'

type LinkBaseProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

const LinkBase = (props: LinkBaseProps) => <Container {...props} />

export { LinkBase }

const Container = tw.a`underline text-blue-500`
