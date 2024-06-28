import Button from "../basic-components/Button";
import Text from "../basic-components/Text";
import Input from "../basic-components/Input";
const navbar = () => {
  return (
    <div className="navbar-layout">
      <div className="navbar">
        <Text type="heading">Exclusive</Text>
        <div className="navbar-navigation">
          <Button type="primary">
            <Text type="line-hover">Home</Text>
          </Button>
          <Button>
            <Text type="line-hover">Contact</Text>
          </Button>
          <Button>
            <Text type="line-hover">About</Text>
          </Button>
          <Button>
            <Text type="line-hover">Sign Up</Text>
          </Button>
        </div>
        <div className="navbar-icons">
          <Input placeholder="What are you looking for?" />
          <Button>
            <img src="public/images/Wishlist.svg" alt="wishlist" />
          </Button>
          <Button>
            <img src="public/images/Cart1 with buy.svg" alt="cart" />
          </Button>
          <Button>
            <img src="public/images/user.svg" alt="account" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
