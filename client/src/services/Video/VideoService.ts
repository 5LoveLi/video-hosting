import { ApiClient } from "../../api/apiClient"
import { TapeDTO, VideoPlayType, Like } from "./VideoService.types"

export const VideoService = {
  gallery: async () => {
    const data = await ApiClient.getWithoutAuth<Array<TapeDTO>>('/tape');

    return data;
  },

  likeGallery: async () => {
    const data = await ApiClient.get<Array<TapeDTO>>('/tape/like');

    return data;
  },

  play: async (id: any) => {
    const data = await ApiClient.getWithoutAuth<VideoPlayType>(`/viewing/${id}`)

    return data
  },

  search: async (str: any) => {
    const data = await ApiClient.getWithoutAuth<Array<TapeDTO>>(`tape/search/${str}`);

    return data;
  }, 

  like: async (id: any) => {
    const data = await ApiClient.post<Like>(`/viewing/${id}/like`);

    return data;
  }
}