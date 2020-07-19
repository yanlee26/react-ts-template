import React, { useState, useEffect } from 'react'
import { Button, Table, Tag, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { apiGetRoleList } from 'api/permission/role.api'
import { Role, RoleStatus } from 'interface/permission/role.interface'

enum TagColor {
  enabled = 'success',
  disabled = 'error'
}

interface RoleTableProps {
  onCreate: () => void
  onModify: (row: Role) => void
  onAuthorize: (row: Role) => void
}

export const RoleTable = ({ onCreate, onModify, onAuthorize }: RoleTableProps) => {
  const [tableData, setTableData] = useState<Role[]>()

  const getLocaleStatus = (status: RoleStatus) => {
    switch (status) {
      case 'enabled':
        return 'disabled'
    }
  }

  useEffect(() => {
    const initData = async () => {
      try {
        const { data, success } = await apiGetRoleList()
        // console.log('data: ', data)
        if (success) {
          setTableData(data)
        }
      } catch (e) {
        console.log(e)
      }
    }
    initData()
  }, [])

  return (
    <Table
      rowKey="id"
      dataSource={tableData}
      scroll={{ x: 500 }}
      title={() => (
        <Button type="primary" onClick={onCreate}>
          create
        </Button>
      )}
    >
      <Table.Column<Role> title={'name'} width={100} render={(_, { name }) => name} />
      <Table.Column<Role> title={'code'} dataIndex="code" width={100} />
      <Table.Column<Role>
        title={'status'}
        width={100}
        render={(_, { status }) => <Tag color={TagColor[status]}>{getLocaleStatus(status)}</Tag>}
      />
      <Table.Column<Role>
        title={'operation'}
        width={200}
        align="center"
        render={(_, row) => [
          <Button type="link" key="1" onClick={() => onAuthorize({ ...row })}>
            authorize
          </Button>,
          <Button
            type="link"
            key="2"
            onClick={() =>
              onModify({
                ...row,
                name: row.name as any
              })
            }
          >
            modify
          </Button>,
          <Button
            type="link"
            key="3"
            onClick={() => {
              Modal.confirm({
                icon: <ExclamationCircleOutlined />,
                title: 'deleteConfirm'
              })
            }}
          >
            delete
          </Button>
        ]}
      />
    </Table>
  )
}
