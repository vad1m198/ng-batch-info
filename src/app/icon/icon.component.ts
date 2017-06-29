import { Component,Input } from "@angular/core";
import { Config } from '../util/Config';

@Component({
  selector: "slIcon",
  templateUrl: "icon.component.html"
})
export class SlIconComponent {

  private _type = '';
  private _name = '';

  @Input()
  set type(type: string) {
    this._type = (type && type.trim());
  }

  @Input()
  set name(name: string) {
    this._name = (name && name.trim());
  }

    constructor(private config: Config) {}


    get iconUrl(): string {
      //return this.config.sldsUrl + '/assets/icons/'+ this._type + '-sprite/svg/symbols.svg#announcement';
      return this.config.sldsUrl + '/assets/icons/'+ this._type + '-sprite/svg/symbols.svg#' + this._name;
    }
}
