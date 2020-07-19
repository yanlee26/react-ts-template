import React, { useState, useEffect, useCallback } from 'react'
import { Modal, Tree, Spin } from 'antd'
import { TreeNodeNormal } from 'antd/lib/tree/Tree'

import { Role } from 'interface/permission/role.interface'
import { getMenuList } from 'api/layout.api'
import { usePrevious } from 'hooks'

interface Values extends Role {}

interface RoleModifyDialogProps {
  values: Values
  visible: boolean
  onAuthorize: (values: string[]) => void
  onCancel: () => void
}

export const RoleAuthorizeDialog = ({ onAuthorize, onCancel, visible, values }: RoleModifyDialogProps) => {
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])
  const [treeData, setTreeData] = useState<TreeNodeNormal[]>([])
  const prevRoleId = usePrevious(values.id)

  const onSubmit = async () => {
    onAuthorize(checkedKeys)
  }

  const initData = useCallback(async () => {
    const { success, data } = await getMenuList()
    // console.log('result: ', result)
    if (success) {
      // format
      setTreeData(
        data.map(a => ({
          title: a.label,
          key: a.key,
          children: a.children?.map(b => ({
            title: b.label,
            key: b.key
          }))
        }))
      )
    }
  }, [])

  useEffect(() => {
    // Optimize: Opening a dialog repeatedly will not trigger initData method. #usePrevious hooks
    // Locale changed will trigger initData in any case.
    if (visible && prevRoleId !== values.id) {
      console.log('initData')
    }
  }, [initData, visible, prevRoleId, values.id])

  return (
    <Modal title={'authorize'} visible={visible} onOk={onSubmit} onCancel={onCancel}>
      {treeData.length ? (
        <Tree
          checkable
          defaultExpandAll
          checkedKeys={checkedKeys}
          onCheck={keys => setCheckedKeys(keys as string[])}
          treeData={treeData}
        />
      ) : (
        <Spin />
      )}
    </Modal>
  )
}
