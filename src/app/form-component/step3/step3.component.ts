import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as FormComponentActions from "../../store/form-component.actions";
import { selectSubscriptionData } from "../../store/selectors";
import { SubscriptionModel } from "src/app/models/subscription.model";
import { AddonModel } from "src/app/models/addon.model";
import { DataServiceService } from "src/app/services/data-service.service";

@Component({
    selector: "app-step3",
    templateUrl: "./step3.component.html",
    styleUrls: ["./step3.component.scss"],
    standalone: false,
})
export class Step3Component implements OnInit, OnDestroy {
    public addons: AddonModel[] = [];
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
        this.addons = this.dataService.addons;

        this.planInfo = new FormGroup({
            onlineService: new FormControl(this.subscriptionData.onlineService),
            largerStorage: new FormControl(this.subscriptionData.largerStorage),
            customizableProfile: new FormControl(
                this.subscriptionData.customizableProfile
            ),
        });
    }

    // Required by the interface — takeUntilDestroyed handles unsubscription
    ngOnDestroy(): void {}

    private getAddonCost(addonId: string, selected: boolean): number {
        if (!selected) return 0;
        const addon = this.addons.find((a) => a.id === addonId);
        if (!addon) return 0;
        return this.subscriptionData.yearlyPlan
            ? addon.yearlyCost
            : addon.monthlyCost;
    }

    onSubmit() {
        const { onlineService, largerStorage, customizableProfile } =
            this.planInfo.value;

        this.store.dispatch(new FormComponentActions.stepForward());
        this.store.dispatch(
            new FormComponentActions.editForm({
                onlineService,
                onlineServiceCost: this.getAddonCost(
                    "onlineService",
                    onlineService
                ),
                largerStorage,
                largerStorageCost: this.getAddonCost(
                    "largerStorage",
                    largerStorage
                ),
                customizableProfile,
                customizableProfileCost: this.getAddonCost(
                    "customizableProfile",
                    customizableProfile
                ),
            })
        );
    }

    onGoBack() {
        this.store.dispatch(new FormComponentActions.stepBack());
    }
}
