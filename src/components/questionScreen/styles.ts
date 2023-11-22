import {StyleSheet} from 'react-native';
import {
  RFPercentage,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../helpers/responsiveness.helpers';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: heightPercentageToDP(91),
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: heightPercentageToDP(86),
    backgroundColor: colors.black,
  },
  innerContainer: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(6),
    flex: 1,
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: heightPercentageToDP(45),
    zIndex: 100,
  },
  bottom: {
    height: heightPercentageToDP(5),
    backgroundColor: colors.black_02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP(2),
  },
  bottomText: {
    color: colors.white,
    marginLeft: widthPercentageToDP(2),
    fontSize: RFPercentage(1.5),
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: heightPercentageToDP(),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: colors.grey_02,
    marginLeft: widthPercentageToDP(2),
  },
  forYouText: {
    color: colors.white,
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
  },
  forYouContainer: {
    alignItems: 'center',
  },
  forYouUnderline: {
    width: widthPercentageToDP(7),
    height: heightPercentageToDP(0.5),
    backgroundColor: colors.white,
    marginTop: heightPercentageToDP(0.5),
  },
  questionContainer: {
    width: widthPercentageToDP(70),
    marginTop: heightPercentageToDP(5),
    backgroundColor: colors.black_01,
    borderRadius: 10,
    paddingHorizontal: widthPercentageToDP(2),
    paddingVertical: heightPercentageToDP(0.2),
  },
  questionText: {
    color: colors.white,
    fontSize: RFPercentage(2.7),
    fontWeight: 'bold',
  },
  questionWidgetContainer: {
    position: 'absolute',
    bottom: heightPercentageToDP(2),
    left: widthPercentageToDP(5),
  },
  optionsContainer: {
    width: widthPercentageToDP(70),
  },
  option: {
    backgroundColor: colors.grey_01,
    borderRadius: 10,
    paddingHorizontal: widthPercentageToDP(3),
    paddingVertical: heightPercentageToDP(1.5),
    marginTop: heightPercentageToDP(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    color: colors.white,
    shadowColor: colors.black,
    width: '80%',
  },
  nameContainer: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(80),
  },
  nameText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
  },
  descriptionText: {
    color: colors.white,
    fontSize: RFPercentage(1.4),
  },
  answerContainer: {},
  gif: {width: 30, height: 30},
});
