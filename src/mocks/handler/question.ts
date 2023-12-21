import { GetQuestionListResponse } from "@/interfaces/dto/question/get-questionlist.dto"
import { RouteMap } from "@/service/route-map"
import { HttpStatusCode } from "axios"
import { DefaultBodyType, HttpResponse, PathParams, http } from "msw"
import { mockQuestions } from "../db/questions"
import { Question } from "@/interfaces/question"
import { generatePagination } from "@/util/paginate"

export const questionHandler = [
  http.get<PathParams, DefaultBodyType, GetQuestionListResponse>(
    `${process.env.NEXT_PUBLIC_SERVER}${RouteMap.question.getQuestionList}`,
    ({ request }) => {
      const url = new URL(request.url)

      const page = Number(url.searchParams.get("page"))
      const perPage = Number(url.searchParams.get("size"))

      const invalidQueries = []

      // page는 0부터 시작
      if (page < 0 || Number.isNaN(page)) invalidQueries.push("page")
      if (perPage <= 0 || Number.isNaN(perPage)) invalidQueries.push("size")

      if (invalidQueries.length) {
        return HttpResponse.json(
          { code: HttpStatusCode.BadRequest, msg: "잘못된 요청입니다" },
          { status: HttpStatusCode.BadRequest },
        )
      }

      const { pages, maximumPage } = generatePagination<Question>(
        mockQuestions,
        { perPage },
      )

      const pagePayload = pages[page] ?? []

      return HttpResponse.json(
        {
          code: HttpStatusCode.Ok,
          msg: "모든 질문 조회 성공",
          data: {
            pagination: {
              total_page: maximumPage,
              pageable: pagePayload.length,
              is_end: page === maximumPage,
            },
            list: [...pagePayload],
          },
        },
        {
          status: HttpStatusCode.Ok,
        },
      )
    },
  ),
]
