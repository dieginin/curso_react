import type { SummaryResponse } from "../interfaces/summary.response"
import { heroApi } from "../api/hero.api"

export const getSummary = async () => {
  const { data } = await heroApi.get<SummaryResponse>("/summary")

  return data
}
