export class SubscriptionModel {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public planType: string,
        public yearlyPlan: boolean,
        public onlineService: boolean,
        public largerStorage: boolean,
        public custoizableProfile: boolean
    ) {}
}
