import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Pages
import { ProjectDetailPage } from '../project-detail/project-detail';
import { CustomerDetailPage } from '../customer-detail/customer-detail';
import { MilestoneDetailPage } from '../milestone-detail/milestone-detail';


// Providers
import { ProjectProvider } from '../../providers/project.provider';
import { CustomerProvider } from '../../providers/customer.provider';
import { MilestoneProvider } from '../../providers/milestone.provider';

/*
  Generated class for the Manager page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {

  manageType: string = "customers";

  public projectList = new Array();
  public customerList = new Array();
  public milestoneList = new Array();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public projectProvider: ProjectProvider,
    public customerProvider: CustomerProvider,
    public milestoneProvider: MilestoneProvider) {

    // constructor
    this.customerList = this.customerProvider.getAllCustomers();
    this.milestoneList = this.milestoneProvider.getAllMilestones();
    this.projectList = this.projectProvider.getAllProjects();
  }

  selectListItem(type, item) {
    let detailPage;
    if (type == 'project') {
      detailPage = ProjectDetailPage;
    }
    if (type == 'customer') {
      detailPage = CustomerDetailPage;
    }
    if (type == 'milestone') {
      detailPage = MilestoneDetailPage;
    }

    if (detailPage) {
      this.navCtrl.push(detailPage, { id: item.id });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerPage');
  }

}