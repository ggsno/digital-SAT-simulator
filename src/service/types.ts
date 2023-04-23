export type AuthLoginRequest = {
  id: string;
  password: string;
};

export type AuthLoginResponse = {
  result: boolean;
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
  };
};

export type UserResponse = {
  result: boolean;
  message: string;
  data: {
    id: string;
    password: string;
    name: string;
    phone: string;
    is_teacher: boolean;
    exam_id: number;
  };
};

export type AllUsersResponse = {
  result: boolean;
  message: string;
  count: number;
  data: Array<{
    id: string;
    password: string;
    name: string;
    phone: string;
    is_teacher: boolean;
    exam_id: number;
  }>;
};

type Exam = {
  id: number;
  name: string;
  sections: Array<{
    id: number;
    number: number;
    name: string;
    subject: string;
    exam_id: number;
    modulars: Array<{
      id: number;
      name: string;
      number: number;
      section_id: number;
      questions: Array<{
        id: number;
        number: number;
        passage: string;
        content: string;
        image_path: string;
        choice_A: string;
        choice_B: string;
        choice_C: string;
        choice_D: string;
        choice_E: string;
        correct_answer: string;
        modular_id: number;
      }>;
    }>;
  }>;
};

export type ExamResponse = {
  result: boolean;
  message: string;
  data: Exam;
};

export type AllExamResponse = {
  result: boolean;
  message: string;
  data: Array<{ id: number; name: string }>;
};
