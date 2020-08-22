import { Component, OnInit } from '@angular/core';
import { DisplayOrder } from 'src/app/models/order/order-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {
  order: DisplayOrder;
  showOrderDetails : boolean = false;
  errorMessage : string = "";
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(res => {
      console.log(res);
      this.order = res.orderData;
      this.showOrderDetails = true;
    }, error => {
      this.showOrderDetails = false;
      this.errorMessage = error;
      console.log(error);
    }
    );
  }

}
