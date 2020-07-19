import Mock from 'mockjs'
import { Response } from 'utils/request'

Mock.setup({
  timeout: 300
})

// Mock the real back-end api structure.
export function intercepter<T>(data: T): Response<T> {
  return {
    success: true,
    code: '0',
    data,
    errors: {},
    message: '成功'
  }
}

export const mock = Mock
