import { createSelector, createFeatureSelector } from "@ngrx/store";
import { State } from "./form-component.reducer";

export const selectFormState = createFeatureSelector<State>("form");

export const selectSubscriptionData = createSelector(
    selectFormState,
    (state: State) => state.subscriptionData
);

export const selectStep = createSelector(
    selectFormState,
    (state: State) => state.step
);
