export interface SubscriptionModel {
    name: string;
    email: string;
    phone: string;
    planType: string;
    planCost: number;
    yearlyPlan: boolean;
    onlineService: boolean;
    onlineServiceCost: number;
    largerStorage: boolean;
    largerStorageCost: number;
    customizableProfile: boolean;
    customizableProfileCost: number;
}
