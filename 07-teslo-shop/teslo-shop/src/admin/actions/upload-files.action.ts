import type { FileUploadResponse } from "../interfaces/FileUpload.response"
import { tesloApi } from "@/api/teslo.api"

export const uploadFiles = async (files: File[]) => {
  const uploadPromises = files.map(async (file) => {
    const formData = new FormData()
    formData.append("file", file)

    const { data } = await tesloApi<FileUploadResponse>({
      url: "/files/product",
      method: "POST",
      data: formData,
    })
    return data.fileName
  })

  const uploadedFileNames = await Promise.all(uploadPromises)
  return uploadedFileNames
}
