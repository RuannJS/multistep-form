import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

import { ThanksComponent } from './thanks/thanks.component';
import { HomeComponent } from './home/home.component';
import { stepTwoGuard } from './guards/stepTwo/step-two.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { stepThreeGuard } from './guards/stepThree/step-three.guard';
import { stepFourGuard } from './guards/stepFour/step-four.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Welcome!' },
  {
    path: '1',
    component: StepOneComponent,
    title: 'First Step',
  },
  {
    path: '2',
    component: StepTwoComponent,
    title: 'Second step',
    canActivate: [stepTwoGuard],
  },
  {
    path: '3',
    component: StepThreeComponent,
    title: 'Third Step',
    canActivate: [stepThreeGuard],
  },
  {
    path: '4',
    component: StepFourComponent,
    title: 'Last Step',
    canActivate: [stepFourGuard],
  },
  {
    path: 'thanks',
    component: ThanksComponent,
    title: 'Thank You!',
    canActivate: [stepFourGuard],
  },
  { path: '**', component: NotFoundComponent, title: 'Page not found' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
