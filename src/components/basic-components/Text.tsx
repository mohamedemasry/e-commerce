import "./styles/text.css";
interface props {
  children?: string;
  type?: string;
}

const Text = ({ children = "", type = "p" }: props) => {
  if (type === "section")
    return (
      <div className="flex">
        <div className={"text-" + type + "-box"}></div>
        <p className={"text-" + type}>{children}</p>
      </div>
    );
  else return <p className={"text-" + type}>{children}</p>;
};

export default Text;
