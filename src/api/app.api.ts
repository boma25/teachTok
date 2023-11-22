import {TAppApi} from '../@types/api.types';
import instance from './instance';

export const AppApi: TAppApi = {
  getQuestions: () => instance.get('/for_you'),
  getCorrectAnswers: id => instance.get(`reveal?id=${id}`),
};
