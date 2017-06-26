import { Component, Input,QueryList, ContentChildren } from "@angular/core";
import {SlTab} from './tab.component';

@Component({
  selector: 'sl-tabs',
  templateUrl: './tabs.component.html'
})

export class SlTabs {
  @Input() type: 'default' | 'scoped' = 'default';
  activeTab: SlTab;
  @ContentChildren(SlTab) tabs: QueryList<SlTab>;

  select(tab: SlTab) {
    if(this.activeTab) this.activeTab.active = false;
    tab.active = true;
    this.activeTab = tab;

  }
  ngAfterContentInit() {
    this.activeTab = this.tabs.first;
    if(this.activeTab) this.activeTab.active = true;
  }

}
