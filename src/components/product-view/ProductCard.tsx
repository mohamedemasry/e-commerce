import Button from "../basic-components/Button";
import Text from "../basic-components/Text";
import "../basic-components/styles/buttons.css";
interface props {
  src: string;
  name: string;
  price: number;
  discountedPrice: number;
  rating?: string;
  ratings?: string;
}

const ProductCard = ({
  src,
  name,
  price,
  //rating,
  //ratings,
  discountedPrice,
}: props) => {
  return (
    <div className="product-card-container">
      <div className="product-card-img">
        <Text type="discount-precentage">{`-${35}%`}</Text>
        <img src={src} alt={name} />
        <Button type="add-to-cart">Add To Cart</Button>
      </div>
      <div className="product-card-info">
        <Text>{name}</Text>
        <div className="product-card-price">
          <Text type="price-d">{`$ ${discountedPrice}`}</Text>
          <Text type="price">{`$ ${price}`}</Text>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
