import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DataServiceService } from "../services/data-service.service";
import { selectStep } from "../store/selectors";

@Component({
    selector: "app-step-guide",
    templateUrl: "./step-guide.component.html",
    styleUrls: ["./step-guide.component.scss"],
    standalone: false,
})
export class StepGuideComponent {
    public steps: string[] = [];
    public stepNow: number = 1;

    private store = inject(Store);
    private dataService = inject(DataServiceService);

    constructor() {
        this.steps = this.dataService.steps;
        this.store
            .select(selectStep)
            .pipe(takeUntilDestroyed())
            .subscribe((step) => {
                this.stepNow = step;
            });
    }
}
