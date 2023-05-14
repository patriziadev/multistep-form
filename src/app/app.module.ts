import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponentComponent } from "./form-component/form-component.component";
import { Step1Component } from "./form-component/step1/step1.component";
import { Step2Component } from "./form-component/step2/step2.component";
import * as fromApp from "./store/app.reducer";

@NgModule({
    declarations: [
        AppComponent,
        FormComponentComponent,
        Step1Component,
        Step2Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.appReducer),
        StoreDevtoolsModule.instrument(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
