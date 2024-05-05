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

type Point = {
  x: number, y: number
}

export interface ExplorerContextType {
  selectedFile: string,
  setSelectedFile: (file: string) => void
  clicked: boolean,
  setClicked: (v: boolean) => void,
  points: Point,
  setPoints: (v: Point) => void,
}
