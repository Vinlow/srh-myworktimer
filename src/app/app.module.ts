import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ManagerPage } from '../pages/manager/manager';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';

// Providers
import { ProjectProvider } from '../providers/project.provider';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    ManagerPage,
    ProjectDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ManagerPage,
    ProjectDetailPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ProjectProvider
  ]
})
export class AppModule { }