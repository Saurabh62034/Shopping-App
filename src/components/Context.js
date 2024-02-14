import React, { Component } from 'react';
import {storeProducts, detailProduct} from "../Data";

const ProductContext = React.createContext();
export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal:0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount(){
    this.setProduct();
  }
  setProduct = ()=>{
    let tempproducts = [];
    storeProducts.forEach(item=>{
      const singleitem = {...item};
      tempproducts = [...tempproducts, singleitem];
    })
    this.setState(()=>{
      return {products: tempproducts}
    })
  }
  getItem=(id)=>{
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

handleDetail = (id) =>{
  const product = this.getItem(id);
  this.setState(()=>{
    return {detailProduct:product}
  })
}

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = parseInt(price.replace(/,/g, ''), 10);;

    this.setState(
      ()=>{
      return {
        products: tempProducts,
        cart: [...this.state.cart, product],
      }},
        () => {
          this.addTotal();
        }
    )
  };
  openModal = id=>{
    const product = this.getItem(id);
    this.setState(()=>{
      return {modalProduct: product, modalOpen:true}
    })
  }
  closeModal =id=>{
    this.setState(()=>{
      return {modalOpen:false}
    })
  }

  increment = id =>{
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item=>item.id===id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count+1;
    let tempPrice = product.count * parseFloat(product.price.replace(/,/g, ''));
    product.total = tempPrice;
     

    this.setState(()=>{
      return {cart: [...tempCart]}
    },
    ()=>{this.addTotal()}
    )
  }
  decrement = id=>{
    let tempCart = [...this.state.cart];
    let selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count -1;

    if(product.count === 0){
      this.remove(id);
    }
    else{
    let tempPrice = product.count * parseFloat(product.price.replace(/,/g, ''));
    product.total = tempPrice;
    
    this.setState(() => {
      return { cart: [...tempCart] }
    },
      () => { this.addTotal() }
    )
  }
  }
  remove=id=>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item=>item.id!=id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(()=>{
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    },
    ()=>{
      this.addTotal();
    }
    )
  }
  clearCart=id=>{
    this.setState(()=>{
      return {cart: []}
    },()=>{
      this.setProduct();
      this.addTotal();
    })
  }
  addTotal = ()=>{
    let subTotal=0;
    this.state.cart.map(item=>{
      (subTotal+=item.total)}
    );
    const tempTax = subTotal*0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal+tax;
    this.setState(()=>{
      return ({
        cartSubTotal: subTotal.toLocaleString(),
        cartTax: tax.toLocaleString(),
        cartTotal: total.toLocaleString()
      }
      )
    })
  }

  render() {
    
    return (
      <ProductContext.Provider value={{
        ...this.state,
        addToCart: this.addToCart,
        handleDetail: this.handleDetail,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        remove: this.remove,
        clearCart: this.clearCart
      }}>{this.props.children}</ProductContext.Provider>
    )
  }
}



const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};