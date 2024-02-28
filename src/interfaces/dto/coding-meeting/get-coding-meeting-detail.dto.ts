import type { CodingMeetingDetail } from "@/interfaces/coding-meetings"
import type { APIResponse } from "../api-response"

export interface GetCodingMeetingDetailRequest {
  coding_meeting_token: string
}

export interface CodingMeetingDetailPayload
  extends Omit<CodingMeetingDetail, "created_date"> {}

export interface GetCodingMeetingDetailResponse
  extends APIResponse<CodingMeetingDetailPayload> {}
