import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { RegisterUser } from 'src/app/models/user/user-model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  name: string;
  companyName: string;
  contactNumber: string;
  email: string;
  shipmentsPerWeek: string;
  cnicNumber: string;
  address: string;
  accountNumber: string;
  websiteUrl: string;
  ProductTypeList: [];
  SelectedProductTypeId: number

  registerForm = this.fb.group({
    name: ['', Validators.required],
    companyName: ['', Validators.required],
    contactNumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    shipmentsPerWeek: ['', Validators.required],
    cnicNumber: ['', Validators.required],
    address: ['', Validators.required],
    accountNumber: ['', Validators.required],
    websiteUrl: ['', Validators.required],
    productType: ['', Validators.required]
  });

  constructor(private router: Router,
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      console.log(res);
      this.ProductTypeList = res.productTypes;
      console.log(this.ProductTypeList);
    });
  }

  get emailAddress() {
    return this.registerForm.get('email')
  }

  onLoginAction() {
    this.router.navigate(['/login'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  onRegister() {
    const registerUser: RegisterUser = {
      Name: this.registerForm.get('name').value,
      CompanyName: this.registerForm.get('companyName').value,
      ContactNumber: this.registerForm.get('contactNumber').value,
      EmailAddress: this.registerForm.get('email').value,
      ShipmentsPerWeek: parseInt(this.registerForm.get('shipmentsPerWeek').value),
      CnicNumber: this.registerForm.get('cnicNumber').value,
      Address: this.registerForm.get('address').value,
      AccountNumber: this.registerForm.get('accountNumber').value,
      WebsiteUrl: this.registerForm.get('websiteUrl').value,
      ProductTypeId: this.registerForm.get('productType').value
    }
    console.log(registerUser);
    this.authService.register(registerUser).subscribe(res => {
      console.log('register successfully.');
      this.router.navigate(['/login'])
        .then(success => console.log('navigation success?', success))
        .catch(console.error);
    }, error => {
      console.log(error);
    });
  }

}