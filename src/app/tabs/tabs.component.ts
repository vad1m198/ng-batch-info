import { Component, Input } from "@angular/core";

@Component({
  selector: 'sl-tabs',
  templateUrl: './tabs.component.html'
})

export class SlTabs {
  @Input() type: 'default' | 'scoped' = 'default';
  activeTabId: string | number = 2;

  select(id: string | number) {
    console.log('select >>> ', id);
    this.activeTabId = id;
  }

}
