import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { DynamicFieldBuilderComponent } from './dynamic-field-builder/dynamic-field-builder.component';
import { TextboxComponent } from './fields/textbox/textbox.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { ButtonComponent } from './fields/button/button.component'
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormBuilderComponent,
    DynamicFieldBuilderComponent,
    TextboxComponent,
    CheckboxComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
