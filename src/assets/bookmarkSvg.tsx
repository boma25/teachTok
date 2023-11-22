import Svg, {SvgProps, Path} from 'react-native-svg';
const BookmarkSvg = (props: SvgProps) => (
  <Svg width={31} height={30} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M4.5 4.985C4.5 3.89 5.395 3 6.5 3h18c1.105 0 2 .889 2 1.985v21.02c0 .784-.871 1.259-1.537.838l-8.926-5.638a1.006 1.006 0 0 0-1.074 0l-8.926 5.638c-.666.42-1.537-.054-1.537-.837V4.986Z"
    />
  </Svg>
);
export default BookmarkSvg;
