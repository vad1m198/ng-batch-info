import { Component, Input, TemplateRef, Directive,Optional } from "@angular/core";

@Directive({
  selector: 'ng-template[sl-tab]',
  exportAs: 'slTab',
})
export class SlTab {
  @Input() Id: string | number;
  @Input() heading: string | TemplateRef<any>;
  private _active: boolean = false;

  constructor(@Optional() public templateRef: TemplateRef<any>) {}

    ngAfterContentInit() {
      console.log('SlTab ngAfterContentInit', this.heading)
    }

  set active(active: boolean) {
    this._active = active;
  }

  get active(): boolean {
    return this._active;
  }
}

@Directive({selector: 'ng-template[sl-tab-heading]'})
export class SlTabHeading {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[sl-tab-content]'})
export class SlTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
