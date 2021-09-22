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
    {id: 1, name: 'Pizza', price: 5.99, imagepath: '../../assets/icon/pizza.jpg', amount: 1, description: 'La miglior pizza! Direttamente dai nostri locali di fiducia della tua citta\'! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'},
    {id: 2, name: 'Sushi', price: 10.45, imagepath: '../../assets/icon/sushi.jpg', amount: 1, description: 'Il miglior sushi! Direttamente dai nostri locali di fiducia della tua citta\'! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'},
    {id: 3, name: 'Pasta', price: 7.17, imagepath: '../../assets/icon/pasta.jpg', amount: 1, description: 'La miglior pasta! Direttamente dai nostri locali di fiducia della tua citta\'! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'},
    {id: 4, name: 'Carne', price: 15.36, imagepath: '../../assets/icon/carne.jpg', amount: 1, description: 'I migliori tagli di carne! Direttamente dai nostri locali di fiducia della tua citta\'! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'},
    {id: 5, name: 'Pesce', price: 20.69, imagepath: '../../assets/icon/pesce.jpg', amount: 1, description: 'Le migliori ricette di pesce! Direttamente dai nostri locali di fiducia della tua citta\'! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'},
    {id: 6, name: 'Vegano', price: 10.99, imagepath: '../../assets/icon/vegano.jpg', amount: 1, description: 'I migliori piatti vegani! Direttamente dai nostri locali di fiducia della tua citta\'! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'}
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
