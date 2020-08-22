import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order/order-model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { OrderService } from 'src/app/services/orders/order.service';
import { error } from 'protractor';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  orderdeliveryForm: FormGroup;
  productDetailsForm: FormGroup;
  shipmentDetailsForm: FormGroup;
  orderDeliverySubmitted: boolean = false;
  productDetailsSubmitted: boolean = false;
  shipmentDetailsSubmitted: boolean = false;
  cities = [];
  productTypes = [];
  selectedCity: number
  step = 0;
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthenticationService,
    private orderService : OrderService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resList => {
      console.log(resList);
      this.productTypes = resList.placeOrderRequiredData[0];
      this.cities = resList.placeOrderRequiredData[1];
      console.log(this.productTypes);
      console.log(this.cities);
    });
    this.createOrderForm();
  }

  createOrderForm() {
    this.orderdeliveryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
    this.productDetailsForm = new FormGroup({
      orderId: new FormControl('', [Validators.required]),
      numOfProducts: new FormControl('', [Validators.required]),
      productType: new FormControl('', [Validators.required]),
      bookingDate: new FormControl('', [Validators.required]),
      instructions: new FormControl('', [Validators.required])
    });
    this.shipmentDetailsForm = new FormGroup({
      weight: new FormControl('', [Validators.required]),
      cod: new FormControl('', [Validators.required])
    });
  }

  nextStepOne() {
    this.orderDeliverySubmitted = true;
    if (this.orderdeliveryForm.valid) {
      this.step++;
    }
  }

  nextStepTwo() {
    this.productDetailsSubmitted = true;
    if (this.productDetailsForm.valid) {
      this.step++;
    }
  }

  prevStep() {
    this.step--;
  }

  placeOrder() {
    this.shipmentDetailsSubmitted = true;
    if (this.shipmentDetailsForm.valid) {
      const order: Order = {
        ConsigneeName: this.orderdeliveryForm.get('name').value,
        ConsigneeContactNumber: this.orderdeliveryForm.get('number').value,
        CityId: this.orderdeliveryForm.get('city').value,
        Address: this.orderdeliveryForm.get('address').value,
        OrderId: this.productDetailsForm.get('orderId').value,
        NumberOfProducts: parseInt(this.productDetailsForm.get('numOfProducts').value),
        ProductTypeId: this.productDetailsForm.get('productType').value,
        BookingDate: this.productDetailsForm.get('bookingDate').value,
        SpecialInstructions: this.productDetailsForm.get('instructions').value,
        Weight: parseInt(this.shipmentDetailsForm.get('weight').value),
        CashOnDelivery: parseInt(this.shipmentDetailsForm.get('cod').value),
        ClientPersonalId : this.authService.getClientPersonalId()
      };
      this.orderService.placeOrder(order).subscribe(res=>{
        console.log('successfully placed an order');
      },error=>{
        console.log('error placing an order');
      });
    }
  }
}
