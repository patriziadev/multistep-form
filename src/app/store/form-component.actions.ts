import { Action } from "@ngrx/store";
import { SubscriptionModel } from "../models/subscription.model";

export const UPDATE_FORM = "UPDATE_FORM";
export const STEP_FORWARD = "STEP_FORWARD";
export const STEP_BACK = "STEP_BACK";

export class UpdateForm implements Action {
    readonly type = UPDATE_FORM;
    constructor(public payload: SubscriptionModel) {}
}

export class StepForward implements Action {
    readonly type = STEP_FORWARD;
}

export class StepBack implements Action {
    readonly type = STEP_BACK;
}

export type FormComponentActions = UpdateForm | StepForward | StepBack;
