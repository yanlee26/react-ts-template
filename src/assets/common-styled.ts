export const row = () => `
display: block;
`

export const col = () => `
display: inline-block;  `
const flexStyle = `display: flex`
const alignCenter = `align-items: center;`
const jcCenter = `justify-content: center;`

export const flex = {
  flex: `${flexStyle}`,
  col: `${flexStyle};flex-direction: column`,
  wrap: `${flexStyle};flex-wrap: wrap;`,
  biCenter: `${flexStyle};${alignCenter};${jcCenter}`,
  center: `${flexStyle};${jcCenter}`,
  middle: `${flexStyle};${alignCenter}`,
  flexEnd: `${flexStyle};align-items: flex-end;`
}

export const textEllipsis = () => `
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const textEllipsis2 = () => `
overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const borderBox = () => `
box-sizing: border-box;
`

export const mainPadding = () => `
padding: 0 30rpx;
`

export const clear = () => `
zoom: 1;
&:after {
  content: '';
  display: block;
  clear: both;
}
`

export const noWrap = () => `
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`

export const bgFull = () => `
background-position: 50%;
background-size: contain;
background-repeat: no-repeat;
`
export default {
  'primary-color': '#13c2c2',
  'theme-color': '#d44439',
  'theme-color-shadow': 'rgba(212, 68, 57, .5)',
  'official-red': '#E82001',
  noWrap,
  bgFull
}
