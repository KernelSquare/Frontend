import type {
  UploadImagesRequest,
  UploadImagesResponse,
} from "@/interfaces/dto/upload/upload-images.dto"
import { apiInstance } from "./axios"
import { RouteMap } from "./route-map"
import { AxiosError, type AxiosResponse } from "axios"
import type { APIResponse } from "@/interfaces/dto/api-response"

export const uploadImages = async ({ category, file }: UploadImagesRequest) => {
  const formData = new FormData()
  formData.append("category", category)
  formData.append("file", file)

  const res = await apiInstance
    .post<any, AxiosResponse<UploadImagesResponse>>(
      RouteMap.images.uploadImages,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    )
    .catch((err) => {
      if (err instanceof AxiosError) {
        const { response } = err as AxiosError<APIResponse>

        console.log("answers res", { response: response?.data })
      }
      console.log("err", err)
      throw err
    })

  return res
}