import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { selectStep } from "../store/selectors";

@Component({
    selector: "app-form-component",
    templateUrl: "./form-component.component.html",
    styleUrls: ["./form-component.component.scss"],
    standalone: false,
})
export class FormComponentComponent {
    public step: number = 1;

    private store = inject(Store);

    constructor() {
        this.store
            .select(selectStep)
            .pipe(takeUntilDestroyed())
            .subscribe((step) => {
                this.step = step;
            });
    }
}
