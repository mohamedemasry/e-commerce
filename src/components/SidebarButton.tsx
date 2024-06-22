import Button from "./basic-components/Button";
//will be implemented into button.tsx
interface props {
  children: string;
  expandbutton?: boolean;
}
const SidebarButton = ({ expandbutton = false, children }: props) => {
  return (
    <div className="sidebar-button">
      <Button>{children}</Button>
      {expandbutton && (
        <Button>
          <img src="src\assets\images\DropDown.svg" alt="" />
        </Button>
      )}
    </div>
  );
};

export default SidebarButton;
