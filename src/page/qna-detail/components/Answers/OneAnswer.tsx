"use client"

import type { Answer } from "@/interfaces/answer"
import Image from "next/image"
import { getDate } from "@/util/getDate"
import { VoteIcons } from "@/components/icons/Icons"
import dynamic from "next/dynamic"
import { useRecoilState } from "recoil"
import voteAtoms from "@/recoil/atoms/vote"
import { useEffect } from "react"

const MdViewer = dynamic(() => import("../Markdown/MdViewer"), {
  ssr: false,
})

interface OneAnswerProps {
  answer: Answer
  user: string | undefined
}

const OneAnswer: React.FC<OneAnswerProps> = ({ answer, user }) => {
  const isEdited = answer.created_date !== answer.modified_date

  const [vote, setVote] = useRecoilState(voteAtoms(answer?.created_by))

  const handleRaise = () => setVote({ ...vote, value: vote.value + 1 })
  const handleReduce = () => setVote({ ...vote, value: vote.value - 1 })

  useEffect(() => {
    setVote({ ...vote, value: answer.vote_count })
  }, [])

  return (
    <div className="border-b-[1px] border-b-gray my-5">
      <div className="flex justify-between">
        <div>
          <div className="flex justify-center">
            <VoteIcons.Up
              className="text-[30px] hover:text-primary"
              onClick={handleRaise}
            />
          </div>
          <div className="text-[30px]">{vote.value}</div>
          <div className="flex justify-center">
            <VoteIcons.Down
              className="text-[30px] hover:text-primary"
              onClick={handleReduce}
            />
          </div>
        </div>
        <MdViewer content={answer.content} />
      </div>
      <div className="flex justify-end mb-5">
        <div className="max-h-[52px] flex flex-col justify-center">
          <div>답변일시: {getDate({ date: answer.created_date })}</div>
          {isEdited && (
            <div className="text-right text-slate-400">(수정됨)</div>
          )}
        </div>
        <div className="ml-[20px] w-[50px] h-[50px] relative">
          <Image
            src={answer.member_image_url}
            alt="답변자 프로필 이미지"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="ml-[20px]">
          <div className="px-2 bg-[#F3EDC8] rounded-md mb-1">
            {answer.created_by}
          </div>
          <div className="text-center">Lv. </div>
        </div>
      </div>
    </div>
  )
}

export default OneAnswer
