import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

import { ThanksComponent } from './thanks/thanks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Welcome!' },
  { path: '1', component: StepOneComponent, title: 'First Step' },
  { path: '2', component: StepTwoComponent, title: 'Second step' },
  { path: '3', component: StepThreeComponent, title: 'Third Step' },
  { path: '4', component: StepFourComponent, title: 'Last Step' },
  { path: 'thanks', component: ThanksComponent, title: 'Thank You!' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
