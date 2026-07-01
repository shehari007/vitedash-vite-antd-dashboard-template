import { Typography } from 'antd';

const { Text } = Typography;

const SectionLabel = ({ children, style }) => (
  <Text
    type="secondary"
    style={{
      display: 'block',
      marginTop: 32,
      marginBottom: 12,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0.6,
      textTransform: 'uppercase',
      ...style,
    }}
  >
    {children}
  </Text>
);

export default SectionLabel;
