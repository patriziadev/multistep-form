import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponentComponent } from "./form-component/form-component.component";
import { Step1Component } from "./form-component/step1/step1.component";

@NgModule({
    declarations: [AppComponent, FormComponentComponent, Step1Component],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
