import type { AuthResponse } from "../interfaces/auth.response"
import { tesloApi } from "@/api/teslo.api"

export const registerAction = async (
  fullName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    })

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
