import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Dropdown } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

import { selectTagView, removeTag, removeOtherTag, removeAllTag } from './tagViewSlice'

export const TagsViewAction = () => {
  const { activeTagId } = useSelector(selectTagView)
  const dispatch = useDispatch()

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item
            key="0"
            onClick={() => {
              dispatch(removeTag(activeTagId))
            }}
          >
            closeCurrent
          </Menu.Item>
          <Menu.Item
            key="1"
            onClick={() => {
              dispatch(removeOtherTag())
            }}
          >
            closeOther
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              dispatch(removeAllTag())
            }}
          >
            closeAll
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            key="3"
            onClick={() => {
              dispatch(removeAllTag())
            }}
          >
            dashboard
          </Menu.Item>
        </Menu>
      }
    >
      <span id="pageTabs-actions">
        <SettingOutlined className="tagsView-extra" />
      </span>
    </Dropdown>
  )
}
