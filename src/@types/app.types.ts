import {Moment} from 'moment';

export type TOption = {
  id: string;
  answer: string;
};

export type TUser = {
  name: string;
  avatar: string;
};

export type TQuiz = {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: TOption[];
  user: TUser;
};

export type TAnswer = {
  id: number;
  correct_options: TOption[];
};

export type TStoreObj = {
  questions: TQuiz[];
  answers: TAnswer[];
  userAnswers: TAnswer[];
  loading: boolean;
  appOpened: Moment;
};
