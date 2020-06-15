import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginsharedService {

  @Output() change: EventEmitter<any> = new EventEmitter();

  loginEvent(){
    this.change.emit();
  }
}
