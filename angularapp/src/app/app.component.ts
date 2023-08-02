import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resValue: any
  fromCurrency: any
  toCurrency: any
  amount:any


  constructor(public fb: FormBuilder) { }
  CurrencyForm = this.fb.group({
    fromCurrency: [''],
    toCurrency: [''],
       amount: [''],
      })
  onSubmitt() {
 
    // this.resValue = (this.CurrencyForm.value.fromCurrency *  1) * (this.CurrencyForm.value.toCurrency *1 );

    this.amount=this.CurrencyForm.value.amount;  
    this.fromCurrency=this.CurrencyForm.value.fromCurrency;
    this.toCurrency=this.CurrencyForm.value.toCurrency;
    //this.amount=
this.resValue='1.00';


  
    this.resValue=(this.toCurrency/this.fromCurrency) * this.amount;
    this.resValue=Math.round(this.resValue);
    this.resValue=parseFloat(this.resValue).toFixed(2);



  }
}