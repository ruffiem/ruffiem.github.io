import { ProjectViewComponent } from './project/view/view.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [SharedModule, CustomerRoutingModule],
  exports: [],
  declarations: [
    CustomerComponent,
    ProjectComponent,
    ProjectViewComponent],
  providers: [],
})
export class CustomerModule { }
