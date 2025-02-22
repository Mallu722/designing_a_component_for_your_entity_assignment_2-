// write product card here
import ViewProductButton from './button';


const Productcard = () => {
  return (
    <div className="product-card">
      <img src='https://m.media-amazon.com/images/I/61NIsUGl+FL._AC_UF1000,1000_QL80_.jpg' 
        />
      <h2 className="product-name">SampleProduct</h2>
      <p className="product-price">$ 99.99</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
