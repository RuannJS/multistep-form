import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

const routes: Routes = [
  { path: '1', component: StepOneComponent, title: 'First Step' },
  { path: '2', component: StepTwoComponent, title: 'Second step' },
  { path: '3', component: StepThreeComponent, title: 'Third Step' },
  { path: '4', component: StepFourComponent, title: 'Last Step' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
