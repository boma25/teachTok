import Svg, {SvgProps, Path} from 'react-native-svg';
const RightAngleSvg = (props: SvgProps) => (
  <Svg width={8} height={13} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M7.4 6.417c0 .311-.107.571-.374.825l-4.798 4.704a.957.957 0 0 1-.705.285 1.013 1.013 0 0 1-.692-1.758l4.183-4.062L.831 2.354a1.025 1.025 0 0 1-.324-.742c0-.552.457-1.01 1.016-1.01.28 0 .514.096.705.286l4.798 4.704c.26.247.375.508.375.825Z"
    />
  </Svg>
);
export default RightAngleSvg;
