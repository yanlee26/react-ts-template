import React from 'react'
import styled from 'styled-components'

import { flex } from 'assets/common-styled'

import { DatePicker } from 'components/date'

const StyledAccount = styled.div`
  ${flex.flex};
  color: red;
`

export default function Account() {
  return (
    <StyledAccount>
      <DatePicker />
    </StyledAccount>
  )
}
