import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

//导相对时间插件
//导国际化插件i18n
dayjs.extend(relativeTime)

// 实现获取相对时间逻辑  中文格式  相对时间-距离现在 strDate-字符串格式转时间格式
export const relTime = (strDate: string) => {
  return dayjs()
    .locale('zh-cn')
    .from(strDate)
}
