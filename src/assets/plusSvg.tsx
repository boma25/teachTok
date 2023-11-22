import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const PlusSvg = (props: SvgProps) => (
  <Svg width={23} height={22} fill="none" {...props}>
    <Rect width={22} height={22} x={0.5} fill="#28B18F" rx={11} />
    <Path
      fill="#fff"
      d="M6.473 10.77c0-.487.398-.885.89-.885h3.252V6.633c0-.487.393-.89.885-.89s.89.403.89.89v3.252h3.253a.888.888 0 0 1 0 1.775H12.39v3.252c0 .486-.399.89-.891.89a.889.889 0 0 1-.885-.89V11.66H7.363a.89.89 0 0 1-.89-.89Z"
    />
  </Svg>
);
export default PlusSvg;
