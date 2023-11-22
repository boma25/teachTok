import Svg, {SvgProps, Path} from 'react-native-svg';
const CommentSvg = (props: SvgProps) => (
  <Svg width={31} height={30} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M29.5 13.5c0 .427-.027.848-.08 1.262-.405 4.328-4.21 10.093-12.263 13.01a.491.491 0 0 1-.657-.466v-2.314A15.96 15.96 0 0 1 16 25C8.544 25 2.5 19.851 2.5 13.5S8.544 2 16 2s13.5 5.149 13.5 11.5Zm-19 2.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CommentSvg;
