import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

export const LayoutContainer = styled(Layout)`
   
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
