import { ProjectViewComponent } from './project/view/view.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CustomerComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'project/:name',
        component: ProjectViewComponent
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class CustomerRoutingModule {
}
