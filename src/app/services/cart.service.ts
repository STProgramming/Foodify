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
    {id: 1, name: 'Pizza', price: 5.99, imagepath: '../../assets/icon/pizza.jpg', amount: 1, description: 'La pizza più buona del mondo direttamente a casa tua, scopri i gusti più ricercati e dai posti più vicini a casa tua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 2, name: 'Sushi', price: 10.45, imagepath: '../../assets/icon/sushi.jpg', amount: 1, description: 'Il sushi più buono del mondo direttamente a casa tua, scopri i gusti più ricercati e dai posti più vicini a casa tua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 3, name: 'Pasta', price: 7.17, imagepath: '../../assets/icon/pasta.jpg', amount: 1, description: 'La pasta più buona del mondo direttamente a casa tua, scopri i gusti più ricercati e dai posti più vicini a casa tua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 4, name: 'Carne', price: 15.36, imagepath: '../../assets/icon/carne.jpg', amount: 1, description: 'La carne più buona del mondo direttamente a casa tua, scopri i tagli più pregiati e dai posti più vicini a casa tua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 5, name: 'Pesce', price: 20.69, imagepath: '../../assets/icon/pesce.jpg', amount: 1, description: 'Il pesce più buono del mondo direttamente a casa tua, scopri gli abinamenti più ricercati e dai posti più vicini a casa tua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 6, name: 'Vegano', price: 10.99, imagepath: '../../assets/icon/vegano.jpg', amount: 1, description: 'Nessun escludo! Scopri i piatti vegani più buoni del mondo direttamente a casa tua, i gusti più ricercati e dai posti più vicini a casa tua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ]

  private cart=[];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart
  }

  getSingleProduct(id):Product{
     return this.data.find(product => product.id === id);
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for(let p of this.cart){
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
    for(let [index, p] of this.cart.entries()) {
      if(p.id === product.id){
        p.amount -= 1;
        if(p.amount == 0){
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value -1);
  }

  removeProduct(product){
    for(let[index, p] of this.cart.entries()){
      if(p.id===product.id){
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
