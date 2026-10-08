import { Component, OnInit, inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DataServiceService } from "src/app/services/data-service.service";
import * as FormComponentActions from "../../store/form-component.actions";
import { selectSubscriptionData } from "../../store/selectors";
import { SubscriptionModel } from "src/app/models/subscription.model";
import { PlanTypeModel } from "src/app/models/planType.model";

@Component({
    selector: "app-step2",
    templateUrl: "./step2.component.html",
    styleUrls: ["./step2.component.scss"],
    standalone: false,
})
export class Step2Component implements OnInit {
    public planTypes: PlanTypeModel[] = [];
    public planInfo!: FormGroup;
    public subscriptionData!: SubscriptionModel;

    private store = inject(Store);
    private dataService = inject(DataServiceService);

    constructor() {
        this.store
            .select(selectSubscriptionData)
            .pipe(takeUntilDestroyed())
            .subscribe((data) => {
                this.subscriptionData = data;
            });
    }

    ngOnInit() {
        this.planTypes = this.dataService.planTypes;
        this.planInfo = new FormGroup({
            planType: new FormControl(
                this.subscriptionData.planType,
                Validators.required
            ),
            yearlyPlan: new FormControl(this.subscriptionData.yearlyPlan),
        });
    }

    onSubmit() {
        const selectedPlan = this.dataService.planTypes.find(
            (plan) => plan.name === this.planInfo.value.planType
        );
        const isYearly: boolean = this.planInfo.value.yearlyPlan;
        const planCost = selectedPlan
            ? isYearly
                ? selectedPlan.yearlyCost
                : selectedPlan.monthlyCost
            : 0;

        this.store.dispatch(new FormComponentActions.stepForward());
        this.store.dispatch(
            new FormComponentActions.editForm({
                planType: this.planInfo.value.planType,
                planCost,
                yearlyPlan: isYearly,
            })
        );
    }

    onGoBack() {
        this.store.dispatch(new FormComponentActions.stepBack());
    }
}
