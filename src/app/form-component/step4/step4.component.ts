import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as FormComponentActions from "../../store/form-component.actions";
import { selectSubscriptionData } from "../../store/selectors";
import { SubscriptionModel } from "src/app/models/subscription.model";

@Component({
    selector: "app-step4",
    templateUrl: "./step4.component.html",
    styleUrls: ["./step4.component.scss"],
    standalone: false,
})
export class Step4Component {
    public subscriptionData!: SubscriptionModel;
    public total: number = 0;

    private store = inject(Store);

    constructor() {
        this.store
            .select(selectSubscriptionData)
            .pipe(takeUntilDestroyed())
            .subscribe((data) => {
                this.subscriptionData = data;
                this.total =
                    data.planCost +
                    data.onlineServiceCost +
                    data.largerStorageCost +
                    data.customizableProfileCost;
            });
    }

    onGoBack() {
        this.store.dispatch(new FormComponentActions.stepBack());
    }

    onChangePlan() {
        this.store.dispatch(new FormComponentActions.changePlan());
    }

    onSubmit() {
        this.store.dispatch(new FormComponentActions.stepForward());
    }
}
