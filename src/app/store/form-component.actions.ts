import { Action } from "@ngrx/store";
import { SubscriptionModel } from "../models/subscription.model";

export const EDIT_FORM = "[Form Component] Edit Form";
export const STEP_FORWARD = "[Form Component] Step Forward";
export const STEP_BACK = "[Form Component] Step Back";

export class editForm implements Action {
    readonly type = EDIT_FORM;
    constructor(public payload: SubscriptionModel) {}
}

export class stepForward implements Action {
    readonly type = STEP_FORWARD;
}

export class stepBack implements Action {
    readonly type = STEP_BACK;
}

export type formActions = editForm | stepForward | stepBack;
