import { Component,Input } from "@angular/core";
import { Config } from '../util/Config';

@Component({
  selector: "sl-toast",
  templateUrl: "toast.component.html",
  styles:[`:host {
          display: block;
          position: absolute;
          width: 100%;
        }`]
})
export class SlToastComponent {

  private _type = '';
  private _message = '';

  @Input()
  set type(type: string) {
    this._type = (type && type.trim());
  }

  @Input()
  set message(message: string) {
    this._message = message;
  }

  get type(){
    return this._type;
  }

  get message(){
    return this._message;
  }

}
