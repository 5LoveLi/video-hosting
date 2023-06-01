export type TapeDTO = {
  id: number,
  name: string,
  preview: string,
  author: string,
  like: number,
}


export type VideoPlayType = {
  id: number,
  name: string,
  author: string,
  like: number,
  data: string,
  description: string,
  link: string
}

export type Like = {
  likes: number
}