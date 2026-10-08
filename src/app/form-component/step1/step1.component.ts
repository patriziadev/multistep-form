import { Component, OnInit, inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as FormComponentActions from "../../store/form-component.actions";
import { selectSubscriptionData } from "../../store/selectors";
import { SubscriptionModel } from "src/app/models/subscription.model";

@Component({
    selector: "app-step1",
    templateUrl: "./step1.component.html",
    styleUrls: ["./step1.component.scss"],
    standalone: false,
})
export class Step1Component implements OnInit {
    public personalInfo!: FormGroup;
    public formSubscriptionData!: SubscriptionModel;

    private store = inject(Store);

    constructor() {
        this.store
            .select(selectSubscriptionData)
            .pipe(takeUntilDestroyed())
            .subscribe((data) => {
                this.formSubscriptionData = data;
            });
    }

    ngOnInit() {
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

    onSubmit() {
        this.store.dispatch(new FormComponentActions.stepForward());
        this.store.dispatch(
            new FormComponentActions.editForm({
                name: this.personalInfo.value.name,
                email: this.personalInfo.value.email,
                phone: this.personalInfo.value.phone,
            })
        );
    }
}
