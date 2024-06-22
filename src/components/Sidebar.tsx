import Button from "./SidebarButton"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button expandbutton={true}>Woman’s Fashion</Button>
      <Button expandbutton={true}>Men’s Fashion</Button>
      <Button>Electronics</Button>
      <Button>Home & Lifestyle</Button>
      <Button>Medicine</Button>
      <Button>Sports & Outdoor</Button>
      <Button>Baby’s & Toys</Button>
      <Button>Groceries & Pets</Button>
      <Button>Health & Beauty</Button>
    </div>
  );
}

export default Sidebar