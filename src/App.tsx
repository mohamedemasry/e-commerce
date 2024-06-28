import Text from "./components/basic-components/Text";
import Alert from "./components/header/Alert";
import Navbar from "./components/header/navbar";
import Sidebar from "./components/Sidebar";
import Countdown from "./components/product-view/Countdown";
import ProductCard from "./components/product-view/ProductCard";

var serverstatus = 200;
function App() {
  if (serverstatus === 200) {
    return (
      <>
        <Alert>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow English
        </Alert>
        <Navbar />
        <div className="layout">
          <div className="section">
            <Sidebar />
            <img src="/images/Frame 560.png" alt="frame 560" />
          </div>
          <Text type="section">Today’s</Text>
          <div className="flex">
            <Text type="h5">Flash Sales</Text>
            <Countdown />
          </div>
          <ProductCard
            src="/images/71RdoeXxtrL 1.png"
            name="Breed Dry Dog Food"
            price={1160}
            rating="4"
            ratings="84"
            discountedPrice={960}
          />
        </div>
      </>
    );
  }
  if (serverstatus === 404) return <Text type="h1">404 Not Found</Text>;
  else return <Text type="h1">{`Error ${serverstatus}`}</Text>;
}

export default App;
