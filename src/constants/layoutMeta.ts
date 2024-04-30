export type LayoutMetaKey =
  | "/"
  | "qna"
  | "coding-meetings"
  | "question"
  | "updateQuestion"
  | "signup"
  | "login"
  | "chat"
  | "chat/popup"
  | "faq"
  | "profile"
  | "userProfile"
  | "search"
  | "oauth"
  | "notification"

export type LayoutMeta = {
  title: string
  description: string
  containLayout: {
    header: boolean
    navigation: boolean
    footer: boolean
  }
}

export const NOTMATCH_SEGMENT = "__DEFAULT__"

export const layoutMeta = {
  "/": {
    title: "홈",
    description: "커널 스퀘어에 오신 것을 환영합니다",
    containLayout: {
      header: false,
      navigation: false,
      footer: false,
    },
  },
  qna: {
    title: "개발자 Q&A",
    description: "커널 스퀘어 개발자 Q&A",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  "coding-meetings": {
    title: "모각코",
    description: "모여서 각자 코딩",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  question: {
    title: "개발자 Q&A",
    description: "Q&A",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  updateQuestion: {
    title: "질문 수정",
    description: "질문 수정",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  signup: {
    title: "회원가입",
    description: "커널스퀘어의 멤버가 되어 지속 가능한 성장을 경험해 보세요",
    containLayout: {
      header: false,
      navigation: false,
      footer: false,
    },
  },
  login: {
    title: "로그인",
    description: "커널스퀘어에 로그인하고 다양한 서비스를 이용해 보세요",
    containLayout: {
      header: false,
      navigation: false,
      footer: false,
    },
  },
  chat: {
    title: "커피챗",
    description: "커피챗을 통해 지속 가능한 성장을 경험해 보세요",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  "chat/popup": {
    title: "커피챗:채팅",
    description: "커피챗:채팅",
    containLayout: {
      header: false,
      navigation: false,
      footer: false,
    },
  },
  faq: {
    title: "FAQ",
    description: "FAQ",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  profile: {
    title: "내 프로필",
    description: "내 프로필",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  userProfile: {
    title: "유저 프로필",
    description: "유저 프로필",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  search: {
    title: "검색",
    description: "검색",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
  oauth: {
    title: "소셜 로그인",
    description: "소셜 로그인",
    containLayout: {
      header: false,
      navigation: false,
      footer: false,
    },
  },
  notification: {
    title: "알림 조회",
    description: "개인 알림 조회",
    containLayout: {
      header: true,
      navigation: true,
      footer: false,
    },
  },
} satisfies Record<LayoutMetaKey, LayoutMeta>
