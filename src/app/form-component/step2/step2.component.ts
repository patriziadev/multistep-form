import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { SubscriptionModel } from "src/app/models/subscription.model";

@Component({
    selector: "app-step2",
    templateUrl: "./step2.component.html",
    styleUrls: ["./step2.component.scss"],
})
export class Step2Component implements OnInit, OnDestroy {
    public planTypes = [
        { name: "arcade", monthlyCost: 9, yearlyCost: 90 },
        { name: "advanced", monthlyCost: 12, yearlyCost: 120 },
        { name: "pro", monthlyCost: 15, yearlyCost: 150 },
    ];
    public planInfo: FormGroup | any;
    public subscriptionData: SubscriptionModel;
    private subscriptionDataFromStore: any;

    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        this.subscriptionDataFromStore = this.store
            .select("form")
            .subscribe((data) => {
                this.subscriptionData = data.subscriptionData;
                return this.subscriptionData;
            });

        this.planInfo = new FormGroup({
            planType: new FormControl(
                this.subscriptionData.planType,
                Validators.required
            ),
            planPeriod: new FormControl(this.subscriptionData.yearlyPlan),
        });
    }

    ngOnDestroy() {
        this.subscriptionDataFromStore.unsubscribe();
    }

    onSubmit() {}
}
