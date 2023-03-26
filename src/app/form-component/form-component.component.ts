import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-form-component",
    templateUrl: "./form-component.component.html",
    styleUrls: ["./form-component.component.scss"],
})
export class FormComponentComponent implements OnInit {
    formData = {};
    step = 1;

    constructor() {}
    ngOnInit() {
        console.log(this.step);
    }

    onAddPersonalData(data: any) {
        this.formData = { ...this.formData, ...data };
        console.log(this.formData);
        this.step += 1;
    }
}
