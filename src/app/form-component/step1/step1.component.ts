import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { SubscriptionModel } from "src/app/models/subscription.model";
import * as FormActions from "../../store/form-component.actions";

@Component({
    selector: "app-step1",
    templateUrl: "./step1.component.html",
    styleUrls: ["./step1.component.scss"],
})
export class Step1Component implements OnInit, OnDestroy {
    public personalInfo: FormGroup | any;
    private subscriptionDataFromStore: any;
    private formSubscriptionData: SubscriptionModel;

    constructor(
        private store: Store<{
            formData: { subscriptionData: SubscriptionModel };
        }>
    ) {}

    ngOnInit() {
        this.subscriptionDataFromStore = this.store
            .select("formData")
            .subscribe((data) => {
                this.formSubscriptionData = data.subscriptionData;
                return this.formSubscriptionData;
            });
        this.personalInfo = new FormGroup({
            name: new FormControl(
                this.formSubscriptionData.name,
                Validators.required
            ),
            email: new FormControl(this.formSubscriptionData.email, [
                Validators.required,
                Validators.email,
            ]),
            phone: new FormControl(
                this.formSubscriptionData.phone,
                Validators.required
            ),
        });
    }

    ngOnDestroy(): void {
        this.subscriptionDataFromStore.unsubscribe();
    }

    onSubmit() {
        this.store.dispatch(
            new FormActions.UpdateForm(this.formSubscriptionData)
        );
        this.store.dispatch(new FormActions.StepForward());
    }
}
