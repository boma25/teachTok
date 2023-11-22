import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {TAnswer, TOption, TQuiz} from '../../@types/app.types';
import {useEffect, useState} from 'react';
import {colors} from '../../utils/colors';
import PlaySvg from '../../assets/playSvg';
import RightAngleSvg from '../../assets/rightAngleSvg';
import ClockSvg from '../../assets/clockSvg';
import SearchSvg from '../../assets/searchSvg';
import QuestionWidgets from '../questionWidgets';
import {useStoreContext} from '../../store';
import {AppApi} from '../../api/app.api';
import {checkSelection} from '../../helpers/general.helpers';
import {thumbsDownGif, thumbsUpGif} from '../../utils/constants';
import moment from 'moment';

const QuestionScreen = ({
  image,
  playlist,
  question,
  options,
  description,
  id,
  user: {name, avatar},
}: TQuiz) => {
  const [loading, setLoading] = useState(false);
  const {updateUserAnswers, updateAnswer, answers, userAnswers, appOpened} =
    useStoreContext();
  const [result, setResult] = useState<{answer?: TAnswer; selected?: TAnswer}>({
    answer: undefined,
    selected: undefined,
  });

  const answerQuestion = async (option: TOption) => {
    try {
      const {data} = await AppApi.getCorrectAnswers(id);
      updateAnswer(data);
      updateUserAnswers({id, correct_options: [option]});
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    const answer = answers.find(a => a.id === id);
    const selected = userAnswers.find(a => a.id === id);
    setResult({answer, selected});
  }, [answers, userAnswers]);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator color={colors.red_01} style={styles.loader} />
      )}
      <ImageBackground
        source={{
          uri: image,
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.image}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <View style={styles.timeContainer}>
              <ClockSvg />
              <View>
                <Text style={styles.timeText}>
                  {moment(appOpened).diff(moment(), 'minute')}m
                </Text>
              </View>
            </View>

            <View style={styles.forYouContainer}>
              <Text style={styles.forYouText}>For You</Text>
              <View style={styles.forYouUnderline} />
            </View>

            <SearchSvg />
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
          </View>

          <View style={styles.questionWidgetContainer}>
            <View style={styles.answerContainer}>
              <View style={styles.optionsContainer}>
                {options.map(({id, answer}) => (
                  <Pressable
                    key={id}
                    style={{
                      ...styles.option,
                      backgroundColor: checkSelection(result, id)
                        ? colors.green_01
                        : checkSelection(result, id) === undefined
                        ? colors.grey_01
                        : colors.red_01,
                    }}
                    onPress={() => answerQuestion({id, answer})}>
                    <Text style={styles.optionText}>{answer}</Text>
                    {checkSelection(result, id) !== undefined && (
                      <Image
                        source={{
                          uri: checkSelection(result, id)
                            ? thumbsUpGif
                            : thumbsDownGif,
                        }}
                        style={{
                          ...styles.gif,
                          transform: [
                            {rotateY: '180deg'},
                            {
                              rotateX: checkSelection(result, id)
                                ? '0deg'
                                : '180deg',
                            },
                          ],
                        }}
                      />
                    )}
                  </Pressable>
                ))}
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
              </View>
            </View>
          </View>
          <QuestionWidgets avatar={avatar} />
        </View>
      </ImageBackground>
      <View style={styles.bottom}>
        <View style={styles.playContainer}>
          <PlaySvg />
          <Text style={styles.bottomText}>Playlist . {playlist}</Text>
        </View>
        <RightAngleSvg />
      </View>
    </View>
  );
};

export default QuestionScreen;
