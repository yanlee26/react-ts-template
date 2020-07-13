import React from 'react'
import { Modal } from 'antd'

import { Role } from 'interface/permission/role.interface'
import useGetRoleFormItem from '../hooks/useGetRoleForm'

interface Values extends Role {}

interface RoleCreateDialogProps {
  visible: boolean
  onCreate: (values: Values) => void
  onCancel: () => void
}

export const RoleCreateDialog = ({ onCreate, onCancel, visible }: RoleCreateDialogProps) => {
  const { Form, form, Name, Code, Status } = useGetRoleFormItem({ name: 'createForm', required: true })

  return (
    <Modal
      title={'create'}
      visible={visible}
      onOk={async () => onCreate((await form.validateFields()) as any)}
      onCancel={onCancel}
    >
      <Form>
        <Name />
        <Code />
        <Status />
      </Form>
    </Modal>
  )
}
