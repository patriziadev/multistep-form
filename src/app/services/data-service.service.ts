import { Injectable } from "@angular/core";
import { PlanTypeModel } from "../models/planType.model";
import { AddonModel } from "../models/addon.model";

@Injectable({
    providedIn: "root",
})
export class DataServiceService {
    public planTypes: PlanTypeModel[] = [
        { name: "arcade", monthlyCost: 9, yearlyCost: 90 },
        { name: "advanced", monthlyCost: 12, yearlyCost: 120 },
        { name: "pro", monthlyCost: 15, yearlyCost: 150 },
    ];

    public addons: AddonModel[] = [
        {
            id: "onlineService",
            name: "Online service",
            description: "Access to multiplayer games",
            monthlyCost: 1,
            yearlyCost: 10,
        },
        {
            id: "largerStorage",
            name: "Larger storage",
            description: "Extra 1TB of cloud save",
            monthlyCost: 2,
            yearlyCost: 20,
        },
        {
            id: "customizableProfile",
            name: "Customizable profile",
            description: "Custom theme on your profile",
            monthlyCost: 2,
            yearlyCost: 20,
        },
    ];

    public steps = ["Your info", "Select plan", "Add-ons", "Summary"];
}
