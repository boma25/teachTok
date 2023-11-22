import {AxiosResponse} from 'axios';
import {TAnswer, TQuiz} from './app.types';

export type TAppApi = {
  getQuestions: () => Promise<AxiosResponse<TQuiz>>;
  getCorrectAnswers: (id: number) => Promise<AxiosResponse<TAnswer>>;
};
