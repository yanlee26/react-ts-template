export type TagItem = {
  id: string
  label: string
  path: string
  closable: boolean
}

export interface TagState {
  tags: TagItem[]
  /**current tagView id */
  activeTagId: TagItem['id']
}
