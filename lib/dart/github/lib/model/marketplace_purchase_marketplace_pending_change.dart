part of openapi.api;

class MarketplacePurchaseMarketplacePendingChange {
  
  String effectiveDate = null;
  
  int id = null;
  
  bool isInstalled = null;
  
  MarketplaceListingPlan plan = null;
  
  int unitCount = null;

  MarketplacePurchaseMarketplacePendingChange({
    this.effectiveDate,
    this.id,
    this.isInstalled,
    this.plan,
    this.unitCount,
  });

  @override
  String toString() {
    return 'MarketplacePurchaseMarketplacePendingChange[effectiveDate=$effectiveDate, id=$id, isInstalled=$isInstalled, plan=$plan, unitCount=$unitCount, ]';
  }

  MarketplacePurchaseMarketplacePendingChange.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    effectiveDate = json['effective_date'];
    id = json['id'];
    isInstalled = json['is_installed'];
    plan = (json['plan'] == null) ?
      null :
      MarketplaceListingPlan.fromJson(json['plan']);
    unitCount = json['unit_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (effectiveDate != null)
      json['effective_date'] = effectiveDate;
    if (id != null)
      json['id'] = id;
    if (isInstalled != null)
      json['is_installed'] = isInstalled;
    if (plan != null)
      json['plan'] = plan;
      json['unit_count'] = unitCount;
    return json;
  }

  static List<MarketplacePurchaseMarketplacePendingChange> listFromJson(List<dynamic> json) {
    return json == null ? List<MarketplacePurchaseMarketplacePendingChange>() : json.map((value) => MarketplacePurchaseMarketplacePendingChange.fromJson(value)).toList();
  }

  static Map<String, MarketplacePurchaseMarketplacePendingChange> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MarketplacePurchaseMarketplacePendingChange>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MarketplacePurchaseMarketplacePendingChange.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MarketplacePurchaseMarketplacePendingChange-objects as value to a dart map
  static Map<String, List<MarketplacePurchaseMarketplacePendingChange>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MarketplacePurchaseMarketplacePendingChange>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MarketplacePurchaseMarketplacePendingChange.listFromJson(value);
       });
     }
     return map;
  }
}

