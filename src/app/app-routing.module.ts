import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormComponent } from './form/form.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: 'full'},

  {path: 'form/:id', component: FormComponent },
  {path: 'build', component: FormBuilderComponent},
  {path: 'build/:id', component: FormBuilderComponent},
  {path: 'forms', component: FormsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
