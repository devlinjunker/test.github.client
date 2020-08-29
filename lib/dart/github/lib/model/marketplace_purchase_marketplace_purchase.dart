part of openapi.api;

class MarketplacePurchaseMarketplacePurchase {
  
  String billingCycle = null;
  
  String freeTrialEndsOn = null;
  
  bool isInstalled = null;
  
  String nextBillingDate = null;
  
  bool onFreeTrial = null;
  
  MarketplaceListingPlan plan = null;
  
  int unitCount = null;
  
  String updatedAt = null;

  MarketplacePurchaseMarketplacePurchase({
    this.billingCycle,
    this.freeTrialEndsOn,
    this.isInstalled,
    this.nextBillingDate,
    this.onFreeTrial,
    this.plan,
    this.unitCount,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'MarketplacePurchaseMarketplacePurchase[billingCycle=$billingCycle, freeTrialEndsOn=$freeTrialEndsOn, isInstalled=$isInstalled, nextBillingDate=$nextBillingDate, onFreeTrial=$onFreeTrial, plan=$plan, unitCount=$unitCount, updatedAt=$updatedAt, ]';
  }

  MarketplacePurchaseMarketplacePurchase.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    billingCycle = json['billing_cycle'];
    freeTrialEndsOn = json['free_trial_ends_on'];
    isInstalled = json['is_installed'];
    nextBillingDate = json['next_billing_date'];
    onFreeTrial = json['on_free_trial'];
    plan = (json['plan'] == null) ?
      null :
      MarketplaceListingPlan.fromJson(json['plan']);
    unitCount = json['unit_count'];
    updatedAt = json['updated_at'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (billingCycle != null)
      json['billing_cycle'] = billingCycle;
      json['free_trial_ends_on'] = freeTrialEndsOn;
    if (isInstalled != null)
      json['is_installed'] = isInstalled;
      json['next_billing_date'] = nextBillingDate;
    if (onFreeTrial != null)
      json['on_free_trial'] = onFreeTrial;
    if (plan != null)
      json['plan'] = plan;
      json['unit_count'] = unitCount;
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    return json;
  }

  static List<MarketplacePurchaseMarketplacePurchase> listFromJson(List<dynamic> json) {
    return json == null ? List<MarketplacePurchaseMarketplacePurchase>() : json.map((value) => MarketplacePurchaseMarketplacePurchase.fromJson(value)).toList();
  }

  static Map<String, MarketplacePurchaseMarketplacePurchase> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MarketplacePurchaseMarketplacePurchase>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MarketplacePurchaseMarketplacePurchase.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MarketplacePurchaseMarketplacePurchase-objects as value to a dart map
  static Map<String, List<MarketplacePurchaseMarketplacePurchase>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MarketplacePurchaseMarketplacePurchase>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MarketplacePurchaseMarketplacePurchase.listFromJson(value);
       });
     }
     return map;
  }
}

