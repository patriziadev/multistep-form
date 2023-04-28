import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
    selector: "app-form-component",
    templateUrl: "./form-component.component.html",
    styleUrls: ["./form-component.component.scss"],
})
export class FormComponentComponent implements OnInit, OnDestroy {
    step: number;
    private subscriptionDataFromStore: any;

    constructor(private store: Store<{ formData: { formStep: number } }>) {}

    ngOnInit() {
        this.subscriptionDataFromStore = this.store
            .select("formData")
            .subscribe((data) => {
                this.step = data.formStep;
                console.log(this.step);
                return this.step;
            });
    }

    ngOnDestroy() {
        this.subscriptionDataFromStore.unsubscribe();
    }
}
