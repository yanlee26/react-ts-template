import React from 'react'
import { Modal } from 'antd'

import { Role } from 'interface/permission/role.interface'
import useGetRoleFormItem from '../hooks/useGetRoleForm'

interface Values extends Role {}

interface RoleModifyDialogProps {
  values: Values
  visible: boolean
  onModify: (values: Values) => void
  onCancel: () => void
}

export const RoleModifyDialog = ({ onModify, onCancel, visible, values }: RoleModifyDialogProps) => {
  const { Form, form, Name, Code, Status } = useGetRoleFormItem({ name: 'modifyForm', required: true, values })

  const onSubmit = async () => {
    const values: any = await form.validateFields()
    onModify(values)
  }

  return (
    <Modal title={'modify'} visible={visible} onOk={onSubmit} onCancel={onCancel}>
      <Form>
        <Name />
        <Code />
        <Status />
      </Form>
    </Modal>
  )
}
