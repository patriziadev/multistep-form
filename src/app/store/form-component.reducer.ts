import { Action } from "@ngrx/store";
import { SubscriptionModel } from "../models/subscription.model";
import * as FormComponentActions from "./form-component.actions";

const initialState = {
    subscriptionData: {
        name: "Ugo",
        email: "",
        phone: "",
        planType: "",
        planPeriod: "monthly",
        onlineService: false,
        largerStorage: false,
        custoizableProfile: false,
    },
    formStep: 1,
};

export function formReduce(state = initialState, action: Action) {
    switch (action.type) {
        case FormComponentActions.UPDATE_FORM: {
            return {
                ...state,
                subscriptionData: {
                    ...state.subscriptionData,
                    ...action,
                },
            };
        }
        case FormComponentActions.STEP_FORWARD: {
            return {
                ...state,
                formStep: state.formStep + 1,
            };
        }
        case FormComponentActions.STEP_BACK:
            return {
                ...state,
                formStep: state.formStep - 1,
            };
        default:
            return state;
    }
}
