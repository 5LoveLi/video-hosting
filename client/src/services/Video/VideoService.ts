import { AliClientInstance } from "../../api/ApiClient"
import { TapeDTO, VideoPlayType, Like } from "./VideoService.types"

export const VideoService = {
  gallery: async () => {
    const data = await AliClientInstance.getWithoutAuth<Array<TapeDTO>>('/tape');

    return data;
  },

  likeGallery: async () => {
    const data = await AliClientInstance.get<Array<TapeDTO>>('/tape/like');

    return data;
  },

  myGallery: async () => {
    const data = await AliClientInstance.get<Array<TapeDTO>>('/tape/my');

    return data;
  },

  play: async (id: any) => {
    const data = await AliClientInstance.getWithoutAuth<VideoPlayType>(`/viewing/${id}`)

    return data
  },

  search: async (str: any) => {
    const data = await AliClientInstance.getWithoutAuth<Array<TapeDTO>>(`tape/search/${str}`);

    return data;
  }, 

  like: async (id: any) => {
    const data = await AliClientInstance.post<Like>(`/viewing/${id}/like`);

    return data;
  }, 

  create: async (form: FormData) => {
    const data = await AliClientInstance.post<Like>('/video/upload', form);

    return data;
  }, 

}