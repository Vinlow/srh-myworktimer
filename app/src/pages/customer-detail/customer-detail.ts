import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CustomerProvider } from '../../providers/customer.provider';


/*
  Generated class for the customerDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html'
})
export class CustomerDetailPage {

  public pageTitle = "";
  public editMode = false;

  public customer = new Object({

  })

  constructor(public navCtrl: NavController, public navParams: NavParams, public customerProvider: CustomerProvider) {

    let customerId = this.navParams.data.id;
    if (customerId != null) {
      this.customer = this.customerProvider.getCustomerById(customerId);
      this.pageTitle = "Details: " + this.customer['name'];
    }
    else {
      this.pageTitle = "New customer";
    }


  }

  saveItem() {
    if (this.customer['id']) {
      let call = this.customerProvider.updateCustomer(this.customer);
      if(call == null){
        // Fehler anzeigen
      }
    }
    else {
      this.customerProvider.addCustomer(this.customer);
    }

    console.log(this.customer);

    console.log(new Date(this.customer['startdate']));

    this.navCtrl.pop();
  }

  editItem() {
    this.editMode = !this.editMode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad customerDetailPage');
  }

}
