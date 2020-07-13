import React from 'react'
import { Form, Input, Col, Row, Select } from 'antd'
import { ColProps } from 'antd/lib/col'
import { FormProps } from 'antd/lib/form'

const wrapperCol: ColProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 6
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

interface Props {
  name: string
  required?: boolean
  responsive?: boolean
  values?: {
    [x: string]: any
  }
}

export default function useGetRoleForm({ required = false, responsive = false, name = 'form', values = {} }: Props) {
  const [formInstance] = Form.useForm()

  const _Form = ({ children, ...props }: FormProps) => {
    return (
      <Form {...props} {...layout} form={formInstance} name={name} initialValues={values}>
        {responsive ? <Row>{children}</Row> : children}
      </Form>
    )
  }

  type InternalForm = typeof _Form
  interface Forms extends InternalForm {
    Item: typeof Form.Item
  }

  const WrappedForm: Forms = _Form as Forms

  WrappedForm.Item = Form.Item

  const Name = () => {
    const name = (
      <Form.Item name="name" label={'name'} rules={[{ required, message: 'nameRequired' }]}>
        <Input />
      </Form.Item>
    )

    return responsive ? <Col {...wrapperCol}>{name}</Col> : name
  }

  const Code = () => {
    const code = (
      <Form.Item name="code" label={'code'} rules={[{ required, message: 'codeRequired' }]}>
        <Input />
      </Form.Item>
    )

    return responsive ? <Col {...wrapperCol}>{code}</Col> : code
  }

  const Status = () => {
    const status = (
      <Form.Item name="status" label={'status'} rules={[{ required, message: 'statusRequired' }]}>
        <Select>
          <Select.Option key="all" value="all">
            {'all'}
          </Select.Option>
          <Select.Option key="enabled" value="enabled">
            {'enabled'}
          </Select.Option>
          <Select.Option key="disabled" value="disabled">
            {'disabled'}
          </Select.Option>
        </Select>
      </Form.Item>
    )

    return responsive ? <Col {...wrapperCol}>{status}</Col> : status
  }

  return {
    form: formInstance,
    Form: WrappedForm,
    Name,
    Code,
    Status
  }
}
