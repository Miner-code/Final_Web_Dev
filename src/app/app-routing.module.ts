import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { CabinetComponent } from './component/cabinet/cabinet.component';
import { PathologieComponent } from './component/pathologie/pathologie.component';

const routes: Routes = [  {
  path: '',
  component: IndexComponent
},
{
  path: 'cabinet',
  component: CabinetComponent
},
{
  path: 'pathologie',
  component: PathologieComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
