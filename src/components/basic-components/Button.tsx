import "./styles/buttons.css";

interface props {
  type?: string;
  children: JSX.Element | string;
}
const Button = ({ type = "primary", children }: props) => {
  return (
    <>
      <button className={"btn-" + type}>{children}</button>
    </>
  );
};

export default Button;
