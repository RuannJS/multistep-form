import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppComponent } from './app.component';
import { StepOneComponent } from './step-one/step-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StepTwoComponent } from './step-two/step-two.component';

@NgModule({
  declarations: [AppComponent, StepOneComponent, StepTwoComponent],
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
