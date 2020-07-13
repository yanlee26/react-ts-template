export type RoleStatus = 'enabled' | 'disabled'
export interface Role {
  name: string
  code: string
  id: number
  status: RoleStatus
}

export type GetRoleResult = Role[]
