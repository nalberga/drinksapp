import React from 'react';
import Products from './components/Products';
import Header from './components/Header';

//Test JSON data for now
//Will connect to database later
//which I will have the componentDidMount api call and set products
//with this.setState. example of this located in job-post-react-app
const products = 
[{"id":1,"product":"Best Intentions, The (Den goda viljan)","description":"odio in hac habitasse platea","price":15,"image":"http://dummyimage.com/250x250.jpg/dddddd/000000"},
{"id":289,"product":"Brother Orchid","description":"quam pede lobortis ligula sit","price":90,"image":"http://dummyimage.com/250x250.jpg/ff4444/ffffff"},
{"id":3,"product":"Azumi 2: Death or Love","description":"amet lobortis sapien sapien non","price":99,"image":"http://dummyimage.com/250x250.jpg/cc0000/ffffff"},
{"id":4,"product":"Romance in a Minor Key (Romanze in Moll)","description":"orci pede venenatis non sodales","price":91,"image":"http://dummyimage.com/250x250.jpg/dddddd/000000"},
{"id":5,"product":"Docking the Boat (Att angöra en brygga)","description":"hac habitasse platea dictumst etiam","price":95,"image":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff"}]

const cart = 
[{"id":1,"product":"Best Intentions, The (Den goda viljan)","description":"odio in hac habitasse platea","price":15,"image":"http://dummyimage.com/250x250.jpg/dddddd/000000", "units":2},
{"id":2,"product":"Brother Orchid","description":"quam pede lobortis ligula sit","price":90,"image":"http://dummyimage.com/250x250.jpg/ff4444/ffffff", "units": 5}];

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      error: null,
      isLoaded: true,
      products: products, //will make this empty array [] once i connect to db,
      cart: cart
    };

    this.AddToCart=this.AddToCart.bind(this);
  }
  
  AddToCart(e){
    alert("works");
    console.log(e)
}

  render() {   

    const productsJSX = this.state.products.map( (product, index) => 
    {
      //Passing the key and spreading the product to the products component
      //Also spreading the product into the add to cart function when user clicks
      return <Products key={product.id} {...product} onClick={() => this.AddToCart({...product})}  />
    });

    return (
        <div className="App">
            <Header check={this.state}/>
            <div className="Products row row-cols-1 row-cols-md-4 col-rows-4">{productsJSX}</div>
        </div>
    );
  }
}

export default App;