import styled, { css } from 'styled-components'

import { LogoProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}

    ${media.lessThan('medium')`
      .text {
        display: none;
      }
    `}
  `}
`
