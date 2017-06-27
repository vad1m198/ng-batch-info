import { Component, Input, TemplateRef, Directive,Optional,ContentChild,QueryList } from "@angular/core";

@Directive({selector: '[sl-tab-heading]'})
export class SlTabHeading {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: '[sl-tab-content]'})
export class SlTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: 'sl-tab'
})
export class SlTab {
  @Input() Id: string | number;
  @Input() heading: TemplateRef<any>;
  private _active: boolean = false;
  @ContentChild(SlTabContent) contentTemplate: SlTabContent;
  @ContentChild(SlTabHeading) headingTemplate: SlTabHeading;

  constructor(@Optional() public templateRef: TemplateRef<any>) {}

  ngAfterContentInit() {
    console.log('this.headingTemplate',this.headingTemplate);
    console.log('this.contentTemplate',this.contentTemplate);
    if (this.headingTemplate) {
      this.heading = this.headingTemplate.templateRef;
    }
    this.templateRef = this.contentTemplate.templateRef;
  }

  set active(active: boolean) {
    this._active = active;
  }

  get active(): boolean {
    return this._active;
  }
}