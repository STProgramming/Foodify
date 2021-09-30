import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  imagepath: string;
  amount: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    {id: 1, name: 'Pizza', price: 5.99, imagepath: '../../assets/icon/pizza.jpg', amount: 1, description: 'DESCRIPTION_PIZZA'},
    {id: 2, name: 'Sushi', price: 10.45, imagepath: '../../assets/icon/sushi.jpg', amount: 1, description: 'DESCRIPTION_SUSHI'},
    {id: 3, name: 'Pasta', price: 7.17, imagepath: '../../assets/icon/pasta.jpg', amount: 1, description: 'DESCRIPTION_PASTA'},
    {id: 4, name: 'MEAT', price: 15.36, imagepath: '../../assets/icon/carne.jpg', amount: 1, description: 'DESCRIPTION_MEAT'},
    {id: 5, name: 'FISH', price: 20.69, imagepath: '../../assets/icon/pesce.jpg', amount: 1, description: 'DESCRIPTION_FISH'},
    {id: 6, name: 'VEGAN', price: 10.99, imagepath: '../../assets/icon/vegano.jpg', amount: 1, description: 'DESCRIPTION_VEGAN'},
    {id: 7, name: 'INDIAN', price: 20.99, imagepath: '../../assets/icon/indiano.jpg', amount: 1, description: 'DESCRIPTION_INDIAN'},
    {id: 8, name: 'Hamburger', price: 6.99, imagepath: '../../assets/icon/hamburger.jpg', amount: 1, description: 'DESCRIPTION_HAMBURGER'}
  ];

  private cart=[];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getSingleProduct(id): Product{
     return this.data.find(product => product.id === id);
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for(const p of this.cart){
      if(p.id === product.id){
        p.amount += 1;
        added = true;
        break;
      }
    }
    if(!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product){
    for(const [index, p] of this.cart.entries()) {
      if(p.id === product.id){
        p.amount -= 1;
        if(p.amount === 0){
          p.amount += 1;
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value -1);
  }

  removeProduct(product){
    for(const[index, p] of this.cart.entries()){
      if(p.id===product.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
