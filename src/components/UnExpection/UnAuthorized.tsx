import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Result, Button } from 'antd'

export const UnAuthorized = () => {
  const navigate = useNavigate()

  return (
    <Result
      status="403"
      title="403"
      subTitle={'unauthorized'}
      extra={
        <Button
          type="primary"
          onClick={() => navigate('/login', { replace: true, state: { from: location.pathname } })}
        >
          goToLogin
        </Button>
      }
    />
  )
}
