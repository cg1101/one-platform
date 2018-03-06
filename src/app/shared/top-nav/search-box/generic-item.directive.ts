import {
  Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentRef, OnDestroy,
  ComponentFactoryResolver, Directive
} from '@angular/core';
import {GenericItem} from './generic-item';

@Component({
  selector: 'op-item-campaign',
  template: `<div>Campaign {{item?.campaignId}}</div>`,
  styles: [`:host{display:block;background-color: lightgreen;}`],
})
export class CampaignItemComponent implements GenericItem {
  @Input() item;
  @Input() searchText;
}

@Component({
  selector: 'op-item-creative',
  template: `<div>Creative {{item?.creativeId}}</div>`,
  styles: [`:host{display:block;background-color: lightyellow;}`],
})
export class CreativeItemComponent implements GenericItem {
  @Input() item;
  @Input() searchText;
}

@Component({
  selector: 'op-item-audience',
  template: `<div>Audience {{item?.audienceId}}</div>`,
  styles: [`:host{display:block;background-color: lightblue;}`],
})
export class AudienceItemComponent implements GenericItem {
  @Input() item;
  @Input() searchText;
}

@Component({
  selector: 'op-item-user',
  template: `<div>User {{item?.userId}}</div>`,
  styles: [`:host{display:block;background-color: lightcyan;}`],
})
export class UserItemComponent implements GenericItem {
  @Input() item;
  @Input() searchText;
}

@Component({
  selector: 'op-item-unknown',
  template: `<div>unknown {{item |json}}</div>`,
  styles: [`:host{display:block;background-color: lightpink;}`],
})
export class UnknownItemComponent implements GenericItem {
  @Input() item;
  @Input() searchText;
}

/* tslint:disable:directive-selector*/
@Directive({
  selector: '[op-generic-item]',
})
export class GenericItemDirective implements OnInit, OnDestroy {

  @Input() item: any;
  @Input() searchText: string;

  private componentRef: ComponentRef<{}>;
  private mappings = {
    'campaign': CampaignItemComponent,
    'creative': CreativeItemComponent,
    'audience': AudienceItemComponent,
    'user': UserItemComponent,
  };

  constructor(public viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const type = this.item.type;
    const componentType = this.getComponentType(type);
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.componentRef = this.viewContainerRef.createComponent(factory);
    const instance = <GenericItem>this.componentRef.instance;
    instance.item = this.item;
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type || UnknownItemComponent;
  }
}
/* tslint:enable:directive-selector*/
