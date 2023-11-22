import {FlatList} from 'react-native';
import styles from './styles';
import QuestionScreen from '../../components/questionScreen';
import {useStoreContext} from '../../store';
import {AppApi} from '../../api/app.api';
import {useEffect, useState} from 'react';

const HomeScreen = () => {
  const {questions, updateQuestions} = useStoreContext();

  const init = async () => {
    try {
      const {data} = await AppApi.getQuestions();
      updateQuestions(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <FlatList
      data={questions}
      renderItem={({item}) => <QuestionScreen {...item} />}
      contentContainerStyle={styles.container}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      pagingEnabled
      snapToEnd
      onScroll={init}
    />
  );
};

export default HomeScreen;
