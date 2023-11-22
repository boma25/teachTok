import {Image, StyleSheet, Text, View} from 'react-native';
import PlusSvg from '../assets/plusSvg';
import {colors} from '../utils/colors';
import {
  RFPercentage,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../helpers/responsiveness.helpers';
import LikeSvg from '../assets/likeSvg';
import CommentSvg from '../assets/commentSvg';
import BookmarkSvg from '../assets/bookmarkSvg';
import ShareSvg from '../assets/shareSvg';

const QuestionWidgets = ({avatar}: {avatar: string}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: avatar}} style={styles.avatar} />
        <PlusSvg style={styles.plus} />
      </View>
      <View style={styles.itemContainer}>
        <LikeSvg />
        <Text style={styles.itemValue}>87</Text>
      </View>
      <View style={styles.itemContainer}>
        <CommentSvg />
        <Text style={styles.itemValue}>2</Text>
      </View>
      <View style={styles.itemContainer}>
        <BookmarkSvg />
        <Text style={styles.itemValue}>203</Text>
      </View>
      <View style={styles.itemContainer}>
        <ShareSvg />
        <Text style={styles.itemValue}>17</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    right: widthPercentageToDP(5),
    bottom: heightPercentageToDP(2),
    zIndex: 100,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: colors.white,
    borderWidth: 1,
  },
  plus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  itemContainer: {
    alignItems: 'center',
    marginTop: heightPercentageToDP(2),
  },
  itemValue: {
    color: colors.white,
    fontSize: RFPercentage(1.5),
    fontWeight: 'bold',
  },
});

export default QuestionWidgets;
