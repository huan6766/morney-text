type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createAt?: Date
}

type Tag = {
  id: string
  name: string
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'  //success表示成功   duplicated表示name重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: Tag[]
  createTag: (name: string) => void
  findTag: (id: string) => Tag | undefined
  removeTag: (id: string) => boolean
  updateTag: TagListModel['update']
  recordList: RecordItem[]
  createRecord: (record: RecordItem) => void
}

