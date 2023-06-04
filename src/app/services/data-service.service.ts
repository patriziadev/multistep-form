import { Injectable } from "@angular/core";
import { planTypeModel } from "../models/planType.model";

@Injectable({
    providedIn: "root",
})
export class DataServiceService {
    public planTypes: planTypeModel[] = [
        { name: "arcade", monthlyCost: 9, yearlyCost: 90 },
        { name: "advanced", monthlyCost: 12, yearlyCost: 120 },
        { name: "pro", monthlyCost: 15, yearlyCost: 150 },
    ];

    constructor() {}
}
