import { SubscriptionModel } from "./../models/subscription.model";
import * as formComponentActions from "./form-component.actions";

export interface State {
    subscriptionData: SubscriptionModel;
    step: number;
}

const initialState = {
    subscriptionData: {
        name: "Ugo",
        email: "",
        phone: "",
        planType: "",
        yearlyPlan: false,
        onlineService: false,
        largerStorage: false,
        custoizableProfile: false,
    },
    step: 1,
};

export function FormReducer(
    state = initialState,
    action: formComponentActions.formActions
): State {
    switch (action.type) {
        case formComponentActions.EDIT_FORM:
            return {
                ...state,
                subscriptionData: {
                    ...state.subscriptionData,
                    ...action.payload,
                },
            };
        case formComponentActions.STEP_FORWARD:
            return {
                ...state,
                step: state.step + 1,
            };
        case formComponentActions.STEP_BACK:
            return {
                ...state,
                step: state.step - 1,
            };
        default:
            return state;
    }
}
