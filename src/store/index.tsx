import {createContext, useContext, useState} from 'react';
import {TAnswer, TQuiz, TStoreObj} from '../@types/app.types';
import moment from 'moment';

const storeContext = createContext(
  {} as TStoreObj & {
    updateAnswer: (answer: TAnswer) => void;
    updateQuestions: (question: TQuiz) => void;
    updateUserAnswers: (answer: TAnswer) => void;
    setLoading: (loading: boolean) => void;
  },
);

export const StoreProvider = ({children}: {children: JSX.Element}) => {
  const [store, setStore] = useState<TStoreObj>({
    questions: [],
    answers: [],
    userAnswers: [],
    loading: false,
    appOpened: moment().add(10, 'minute'),
  });
  const updateQuestions = (question: TQuiz) => {
    setStore(prevStore => {
      const questionExists = prevStore.questions.find(
        q => q.id === question.id,
      );
      if (questionExists) return prevStore;
      return {...prevStore, questions: [...prevStore.questions, question]};
    });
  };

  const updateAnswer = (answer: TAnswer) => {
    setStore(prevStore => {
      const answerExists = prevStore.answers.find(a => a.id === answer.id);
      if (answerExists) return prevStore;
      return {...prevStore, answers: [...prevStore.answers, answer]};
    });
  };

  const updateUserAnswers = (answer: TAnswer) => {
    setStore(prevStore => {
      const userAnswerExists = prevStore.userAnswers.find(
        a => a.id === answer.id,
      );
      if (userAnswerExists) return prevStore;
      return {...prevStore, userAnswers: [...prevStore.userAnswers, answer]};
    });
  };

  const setLoading = (loading: boolean) => {
    setStore(prevStore => ({...prevStore, loading}));
  };
  return (
    <storeContext.Provider
      value={{
        ...store,
        updateAnswer,
        updateQuestions,
        updateUserAnswers,
        setLoading,
      }}>
      {children}
    </storeContext.Provider>
  );
};

export const useStoreContext = () => useContext(storeContext);
