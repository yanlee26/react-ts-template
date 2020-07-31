import React from 'react'
import styled from 'styled-components'

import { flex } from 'assets/common-styled'


const StyledAccount = styled.div`
  ${flex.flex};
  color: red;
`

export default function Account() {
  return (
    <StyledAccount>
      Account
    </StyledAccount>
  )
}
