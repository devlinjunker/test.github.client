part of openapi.api;

class UserMarketplacePurchase {
  
  MarketplaceAccount account = null;
  
  String billingCycle = null;
  
  DateTime freeTrialEndsOn = null;
  
  DateTime nextBillingDate = null;
  
  bool onFreeTrial = null;
  
  MarketplaceListingPlan plan = null;
  
  int unitCount = null;
  
  DateTime updatedAt = null;

  UserMarketplacePurchase({
    this.account,
    this.billingCycle,
    this.freeTrialEndsOn,
    this.nextBillingDate,
    this.onFreeTrial,
    this.plan,
    this.unitCount,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'UserMarketplacePurchase[account=$account, billingCycle=$billingCycle, freeTrialEndsOn=$freeTrialEndsOn, nextBillingDate=$nextBillingDate, onFreeTrial=$onFreeTrial, plan=$plan, unitCount=$unitCount, updatedAt=$updatedAt, ]';
  }

  UserMarketplacePurchase.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    account = (json['account'] == null) ?
      null :
      MarketplaceAccount.fromJson(json['account']);
    billingCycle = json['billing_cycle'];
    freeTrialEndsOn = (json['free_trial_ends_on'] == null) ?
      null :
      DateTime.parse(json['free_trial_ends_on']);
    nextBillingDate = (json['next_billing_date'] == null) ?
      null :
      DateTime.parse(json['next_billing_date']);
    onFreeTrial = json['on_free_trial'];
    plan = (json['plan'] == null) ?
      null :
      MarketplaceListingPlan.fromJson(json['plan']);
    unitCount = json['unit_count'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (account != null)
      json['account'] = account;
    if (billingCycle != null)
      json['billing_cycle'] = billingCycle;
      json['free_trial_ends_on'] = freeTrialEndsOn == null ? null : freeTrialEndsOn.toUtc().toIso8601String();
      json['next_billing_date'] = nextBillingDate == null ? null : nextBillingDate.toUtc().toIso8601String();
    if (onFreeTrial != null)
      json['on_free_trial'] = onFreeTrial;
    if (plan != null)
      json['plan'] = plan;
      json['unit_count'] = unitCount;
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    return json;
  }

  static List<UserMarketplacePurchase> listFromJson(List<dynamic> json) {
    return json == null ? List<UserMarketplacePurchase>() : json.map((value) => UserMarketplacePurchase.fromJson(value)).toList();
  }

  static Map<String, UserMarketplacePurchase> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, UserMarketplacePurchase>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = UserMarketplacePurchase.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of UserMarketplacePurchase-objects as value to a dart map
  static Map<String, List<UserMarketplacePurchase>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<UserMarketplacePurchase>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = UserMarketplacePurchase.listFromJson(value);
       });
     }
     return map;
  }
}

