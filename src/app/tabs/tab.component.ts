import { Component, Input, TemplateRef, Directive,Optional } from "@angular/core";

@Directive({
  selector: 'template[sl-tab]',
  exportAs: 'slTab',
})
export class SlTab {
  @Input() Id: string | number;
  @Input() heading: string | TemplateRef<any>;
  private _active: boolean = false;

  constructor(@Optional() public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'template[sl-tab-heading]'})
export class SlTabHeading {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'template[sl-tab-content]'})
export class SlTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
