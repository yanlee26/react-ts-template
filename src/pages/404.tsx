import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle={'notfound'}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          backHome
        </Button>
      }
    ></Result>
  )
}

export default NotFoundPage
