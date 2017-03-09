import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Customers Object
  id: Id of customer
  name: name of customer
  description: description of customer
  customerId: id of customer  
  duration: duration of the customer
  timelimit: maximum amount of time which is available for the customer
  startdate: start date of the customer
*/
@Injectable()
export class CustomerProvider {

  public customers = new Array();

  constructor(public http: Http) {

    this.generateExampleData(50);

  }

  // Return all the customers
  getAllCustomers() {
    return this.customers;
  }

  // Get a specific customer by its id
  getCustomerById(id) {
    return this.customers[this.getCustomerKeyByID(id)];
  }

  getCustomerKeyByID(id) {
    for (let key in this.customers) {
      if (this.customers[key].id == id) {
        return key;
      }
    }
  }

  // Add a new customer
  addCustomer(customer) {
    this.customers.push(customer);
    return this.getCustomerById(customer.id);
  }

  updateCustomer(customerUpdate) {
    let customerKey = this.getCustomerKeyByID(customerUpdate.id);
    this.customers[customerKey] = customerUpdate;
    return this.customers[customerKey];
  }

  deleteCustomer(id) {
    let customerKey = this.getCustomerKeyByID(id);
    if (!customerKey) {
      return;
    }
    let customerKeyInt = parseInt(customerKey);
    this.customers.splice(customerKeyInt, 1);
  }

  generateExampleData(amount) {

    for (let i = 0; i <= amount; i++) {
      let newCustomer = new Object();
      newCustomer['id'] = Math.random();
      newCustomer['name'] = Math.round(Math.random() * 1000);
      newCustomer['desc'] = Math.random();
      newCustomer['customerId'] = Math.random();
      newCustomer['duration'] = Math.random();

      this.addCustomer(newCustomer);
    }

  }

}