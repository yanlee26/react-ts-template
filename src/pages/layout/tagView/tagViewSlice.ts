import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TagState, TagItem } from 'interface/layout/tagsView.interface'

const initialState: TagState = {
  tags: [],
  activeTagId: ''
}

export const tagViewSlice = createSlice({
  name: 'tagView',
  initialState,
  reducers: {
    setActiveTag: (state, { payload }: PayloadAction<string>) => {
      state.activeTagId = payload
    },
    addTag: (state, { payload }: PayloadAction<TagItem>) => {
      if (!state.tags.find(tag => tag.id === payload.id)) {
        state.tags.push(payload)
      }
      state.activeTagId = payload.id
    },
    // 视业务而定
    removeTag: (state, { payload: targetKey }: PayloadAction<string>) => {
      if (targetKey === state.tags[0].id) {
        console.log(`dashboard cloud't be closed`)
        return
      }
      let activeTagId = state.activeTagId
      const lastIndex = state.tags.findIndex(tag => tag.id === targetKey) - 1
      const tagList = state.tags.filter(tag => tag.id !== targetKey)

      if (tagList.length && activeTagId === targetKey) {
        activeTagId = lastIndex >= 0 ? tagList[lastIndex].id : tagList[0].id
      }
      state.tags = tagList
      state.activeTagId = activeTagId
    },
    removeAllTag: state => {
      state.tags = [state.tags[0]]
    },
    removeOtherTag: state => {
      const activeTag = state.tags.find(tag => tag.id === state.activeTagId)
      const activeIsDashboard = activeTag!.id === state.tags[0].id

      state.tags = activeIsDashboard ? [state.tags[0]] : [state.tags[0], activeTag!]
    }
  }
})

export const { addTag, setActiveTag, removeTag, removeAllTag, removeOtherTag } = tagViewSlice.actions
export const selectTagView = (state: { tagView: TagState }) => state.tagView
export default tagViewSlice.reducer
