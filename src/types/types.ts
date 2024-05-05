export enum FileTypes {
  directory = 'folder',
  file = 'file'
}

export interface File {
  name: string,
  type: FileTypes | string,
  data?: File[],
  meta?: string
}
