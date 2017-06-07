import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { DpComponent } from './../../components/dp/dp';

/**
 * Generated class for the Dp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dp',
  templateUrl: 'dp.html',
})
export class DpPage {
  @ViewChild('dynamicComponentTarget', { read: ViewContainerRef })
  dynamicComponentTarget: ViewContainerRef;
  componentRef: ComponentRef<any>;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(DpComponent);
    this.componentRef = this.dynamicComponentTarget.createComponent(componentFactory);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dp');
  }

}
