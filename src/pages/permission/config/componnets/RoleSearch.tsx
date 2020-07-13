import React from 'react'
import { Button } from 'antd'

import useGetRoleFormItem from '../hooks/useGetRoleForm'

export const RoleSearch = () => {
  const { Form, form, Name, Code, Status } = useGetRoleFormItem({ name: 'searchForm', responsive: true })

  const onSearch = () => {
    //
  }

  return (
    <Form>
      <Name />
      <Code />
      <Status />
      <Form.Item>
        <Button type="primary" onClick={onSearch}>
          search
        </Button>
        <Button onClick={() => form.resetFields()}>reset</Button>
      </Form.Item>
    </Form>
  )
}
