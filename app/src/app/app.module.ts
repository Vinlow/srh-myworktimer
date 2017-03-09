import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ManagerPage } from '../pages/manager/manager';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';
import { CustomerDetailPage } from '../pages/customer-detail/customer-detail';
import { MilestoneDetailPage } from '../pages/milestone-detail/milestone-detail';
import { SettingsPage } from '../pages/settings/settings';


// Providers
import { ConnectionProvider } from '../providers/connection.provider';
import { ProjectProvider } from '../providers/project.provider';
import { CustomerProvider } from '../providers/customer.provider';
import { MilestoneProvider } from '../providers/milestone.provider';
import { SettingsProvider } from '../providers/settings.provider';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    ManagerPage,
    ProjectDetailPage,
    CustomerDetailPage,
    MilestoneDetailPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ManagerPage,
    ProjectDetailPage,
    CustomerDetailPage,
    MilestoneDetailPage,
    SettingsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ProjectProvider,
    CustomerProvider,
    MilestoneProvider,
    SettingsProvider,
    ConnectionProvider
  ]
})
export class AppModule { }