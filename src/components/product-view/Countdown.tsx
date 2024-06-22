import CountdownNumber from "./CountdownNumber";
const Countdown = () => {
  return (
    <div className="countdown">
      <CountdownNumber value="03">Days</CountdownNumber>
      <CountdownNumber value="23">hours</CountdownNumber>
      <CountdownNumber value="19">mins</CountdownNumber>
      <CountdownNumber value="56" isLastNumber={true}>
        seconds
      </CountdownNumber>
    </div>
  );
};

export default Countdown;
