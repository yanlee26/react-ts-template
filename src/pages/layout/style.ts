import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

export const LayoutContainer = styled(Layout)`
    height: 100%;
    
    .layout-page-sider {
      background-color: #fff !important;
      box-sizing: border-box;
      border-right: 1px solid #f0f0f0;
      margin-bottom: 10px;
    }
    .layout-page-header-main {
      width:100%;
      display: flex;
      align-items: center;
      justify-content:space-between;
      margin-left: 60px;
    }
    .layout-page-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      > :nth-child(1) .ant-tabs-bar {
        padding: 6px 0 0;
        background: #fff;
      }

      > :nth-child(2) {
        flex: auto;
        overflow-y: auto;
        overflow-x: hidden;
        margin: 12px;
        box-sizing: border-box;
        background-color: #ffffff;
        .ant-form,
        .ant-table-wrapper {
          border: 6px solid #fff;
          box-sizing: border-box;
          padding: 6px;
        }

        .ant-form {
          margin-bottom: 12px;
        }
        .innerText {
          background-color: #fff;
          padding: 24px;
          border-radius: 2px;
          display: block;
          line-height: 32px;
          font-size: 16px;
        }
      }
    }
  }

  .layout-page-sider-menu {
    border-right: none !important;
  }
  .ant-menu-inline-collapsed {
    width: 79px !important;
  }

  .notice-description {
    font-size: 12px;
    &-datetime {
      margin-top: 4px;
      line-height: 1.5;
    }
  }

  .notice-title {
    display: flex;
    justify-content: space-between;
  }

  .user-action {
    cursor: pointer;
  }

  .actions {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
      margin-left: 30px;
      height: 100%;
      display: flex;
      align-items: center;
      .notice {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        cursor: pointer;
      }
    }
  }

  .user-avator {
    margin-right: 8px;
    width: 40px;
    height: 40px;
  }
`

export const LayoutHeader = styled(Header)`
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    background-color: #fff !important;
    box-shadow: 0 4px 10px #dddddd;
  .layout-page-main {
    padding: 0 15px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    height: 64px;
    width: 200px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    img {
      width: 30px;
      height: 30px;
    }



`
