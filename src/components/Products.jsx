import React from 'react';
import '../App.css';

/*can also do function Footer()*/
class Products extends React.Component {
    render() {
       return (
          
            <div className="col mb-3">
                <div className="card h-100 product-body-style" style={{width: '15rem'}} id={this.props.id}>
                <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="card-text">{this.props.price}$</p>
                        <button className="btn btn-primary" onClick={this.props.onClick}>Add to Cart</button>
                
                    </div>
                </div>
            </div>
          
       );
    }
  }

  export default Products;