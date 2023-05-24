import { ApiClient } from "../../api/apiClient"
import { TapeDTO, VideoPlayType } from "./VideoService.types"

export const VideoService = {
  gallery: async () => {
    const data = await ApiClient.getWithoutAuth<Array<TapeDTO>>('/tape');

    return data;
  },

  play: async (id: any) => {
    const data = await ApiClient.getWithoutAuth<VideoPlayType>(`/viewing/${id}`)

    return data
  }
}