import { CodingMeetingHourMinuteTime } from "@/constants/timeOptions"
import { CodingMeetingHashTag } from "./coding-meetings"
import { ImageFieldArrayItem } from "./form/question-form"
export interface LoginFormData {
  email: string
  password: string
}

// signup
export interface SignupFormData {
  email: string
  nickname: string
  image_url?: string
  password: string
}

export interface SignupHookFormData extends SignupFormData {
  passwordCheck: string
}

// answer
export interface AnswerFormData {
  answer: string
  images: ImageFieldArrayItem[]
  imagesToDelete: ImageFieldArrayItem[]
}

// coding-meeting

// [coding-meeting] form data
export type CodingMeetingPageMode = "create" | "update"

export interface CodingMeetingFormData {
  title: string
  content: string
  member_upper_limit: number
  date: {
    day: Date
    start_time: [
      CodingMeetingHourMinuteTime["hour"],
      CodingMeetingHourMinuteTime["minute"],
    ]
    end_time: [
      CodingMeetingHourMinuteTime["hour"],
      CodingMeetingHourMinuteTime["minute"],
    ]
  }
  location: {
    id: string
    longitude: string
    latitude: string
    place_name: string
  }
  hashtags: { tag: CodingMeetingHashTag }[]
}

export interface CodingMeetingLocationSearchFormData {
  keyword: string
}

export type CodingMeetingFormInitialValues = CodingMeetingFormData

// [coding-meeting] comment
export interface CommentFormData {
  comment: string
}

export interface CommentUpdateFormData {
  commentForUpdate: string
}

// hashtag
type HashTag = string

export interface HashTagFormData {
  hashTag: HashTag
}
