import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdviceComponent } from './add-advice/add-advice.component';
import { ListAdviceComponent } from './list-advice/list-advice.component';

const routes: Routes = [
  {path : 'add-advice', component : AddAdviceComponent},
  {path : 'list-advice', component : ListAdviceComponent},
  {path: '', redirectTo: 'list-advice', pathMatch: 'full'},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
