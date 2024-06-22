import Text from "../basic-components/Text";
interface props {
  isLastNumber?: boolean;
  children: string;
  value?: string;
}
const CountdownNumber = ({
  isLastNumber = false,
  children,
  value = "00",
}: props) => {
  return (
    <div className="countdown-number">
      <div>
        <Text type="small">{children}</Text>
        <Text type="h6">{value}</Text>
      </div>
      {!isLastNumber && <Text type="colon">:</Text>}
    </div>
  );
};

export default CountdownNumber;
