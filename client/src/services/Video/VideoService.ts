import { ApiClient } from "../../api/apiClient"
import { TapeDTO } from "./VideoService.types"

export const VideoService = {
  gallery: async () => {
    const data = await ApiClient.getWithoutAuth<Array<TapeDTO>>('/tape');

    return data;
  }
}