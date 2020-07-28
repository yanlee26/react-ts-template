import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html,
body,
#root{
  height: 100%;
}

body {
  font-size: 14px;
  color: #333 !important;
}

a {
  text-decoration: underline;
  cursor: pointer;
}

#searchForm > .ant-row > .ant-row.ant-form-item {
  width: 100%;
  text-align: right;
  padding-right: 12px;
  .ant-col {
    flex: 1;
    max-width: 100%;
    width: 100%;
    .ant-btn:first-child {
      margin-right: 10px;
    }
  }
}
// antd reset
&&&{
  .ant-list-item {
    padding: 12px 12px;
  }
  
  .ant-table-cell .ant-btn.ant-btn-link {
    padding: 0 4px;
  }
}
`
