import {TAnswer} from '../@types/app.types';

export const checkSelection = (
  result: {answer?: TAnswer; selected?: TAnswer},
  id: string,
): boolean | undefined => {
  if (
    result.selected?.correct_options[0].id === id &&
    result.answer?.correct_options[0].id === id
  ) {
    return true;
  }
  if (result.answer?.correct_options[0].id === id) {
    return true;
  }
  if (
    result.selected?.correct_options[0].id === id &&
    result.answer?.correct_options[0].id !== id
  ) {
    return false;
  }

  return undefined;
};
