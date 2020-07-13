import React, { useState } from 'react'

import { RoleCreateDialog, RoleTable, RoleSearch, RoleModifyDialog, RoleAuthorizeDialog } from './componnets'

import { Role } from 'interface/permission/role.interface'
import { PermissionContainer } from './style'

const RolePage = () => {
  const [mcreateVisible, setCreateVisible] = useState(false)
  const [modifyVisible, setModifyVisible] = useState(false)
  const [authorizeVisible, setAuthorizeVisible] = useState(false)
  const [values, setValues] = useState({} as Role)

  return (
    <PermissionContainer>
      <RoleSearch />
      <RoleCreateDialog
        visible={mcreateVisible}
        onCancel={() => setCreateVisible(false)}
        onCreate={() => setCreateVisible(false)}
      />
      <RoleModifyDialog
        values={values}
        visible={modifyVisible}
        onCancel={() => setModifyVisible(false)}
        onModify={() => setModifyVisible(false)}
      />
      <RoleAuthorizeDialog
        values={values}
        visible={authorizeVisible}
        onCancel={() => setAuthorizeVisible(false)}
        onAuthorize={() => setAuthorizeVisible(false)}
      />
      <RoleTable
        onCreate={() => setCreateVisible(true)}
        onModify={values => {
          setValues(values)
          setModifyVisible(true)
        }}
        onAuthorize={values => {
          setValues(values)
          setAuthorizeVisible(true)
        }}
      />
    </PermissionContainer>
  )
}

export default RolePage
