import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../services/cart.service';
import { CartService } from '../services/cart.service';

export interface Comuni {
  codice: string;
  nome: string;
  codiceCatastale: string;
  cap: number;
  lat: any;
  lng: any;
  provincia: string;
};

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  cities: Comuni[] = [];
  public deliveryForm: FormGroup;
  searchTerm: string;
  isItemActived: boolean;

  constructor(private cartService: CartService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.deliveryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', [Validators.required, Validators.pattern(/(7|8|9)\d{9}/)]),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      clock: new FormControl('', Validators.required)
    });
    this.getCities();
  }

  redirectToHome(){
    this.router.navigateByUrl('tabs/tab1');
  }

  async getCities() {
    await this.http.get<Comuni[]>('https://comuni-ita.herokuapp.com/api/comuni').subscribe
    (value => {
      this.cities = value;
    }, error => console.log(error));
  }

  async inputChanged($event) {
    const value = $event.target.value;
    if(value && value.trim() !== '') {
      const items = this.cities.filter(item => item.nome.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      this.cities = items;
      this.isItemActived = true;
    }
    else {
      this.isItemActived = false;
    }
  }

  selected(item) {
    this.deliveryForm.patchValue({city: item});
  }
}
