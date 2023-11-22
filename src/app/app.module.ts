import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, StepFourComponent, ThanksComponent, HomeComponent],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
