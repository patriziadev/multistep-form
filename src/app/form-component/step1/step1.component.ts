import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators,
} from "@angular/forms";

@Component({
    selector: "app-step1",
    templateUrl: "./step1.component.html",
    styleUrls: ["./step1.component.scss"],
})
export class Step1Component implements OnInit {
    @Output() public personalData = new EventEmitter();

    public personalInfo: FormGroup | any;
    constructor() {}

    ngOnInit() {
        this.personalInfo = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            phone: new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        console.log('child' + this.personalInfo.value);
        this.personalData.emit(this.personalInfo.value);
    }
}
