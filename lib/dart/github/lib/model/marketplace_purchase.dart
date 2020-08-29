part of openapi.api;

class MarketplacePurchase {
  
  int id = null;
  
  String login = null;
  
  MarketplacePurchaseMarketplacePendingChange marketplacePendingChange = null;
  
  MarketplacePurchaseMarketplacePurchase marketplacePurchase = null;
  
  String organizationBillingEmail = null;
  
  String type = null;
  
  String url = null;

  MarketplacePurchase({
    this.id,
    this.login,
    this.marketplacePendingChange,
    this.marketplacePurchase,
    this.organizationBillingEmail,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'MarketplacePurchase[id=$id, login=$login, marketplacePendingChange=$marketplacePendingChange, marketplacePurchase=$marketplacePurchase, organizationBillingEmail=$organizationBillingEmail, type=$type, url=$url, ]';
  }

  MarketplacePurchase.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    login = json['login'];
    marketplacePendingChange = (json['marketplace_pending_change'] == null) ?
      null :
      MarketplacePurchaseMarketplacePendingChange.fromJson(json['marketplace_pending_change']);
    marketplacePurchase = (json['marketplace_purchase'] == null) ?
      null :
      MarketplacePurchaseMarketplacePurchase.fromJson(json['marketplace_purchase']);
    organizationBillingEmail = json['organization_billing_email'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    if (login != null)
      json['login'] = login;
      json['marketplace_pending_change'] = marketplacePendingChange;
    if (marketplacePurchase != null)
      json['marketplace_purchase'] = marketplacePurchase;
    if (organizationBillingEmail != null)
      json['organization_billing_email'] = organizationBillingEmail;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<MarketplacePurchase> listFromJson(List<dynamic> json) {
    return json == null ? List<MarketplacePurchase>() : json.map((value) => MarketplacePurchase.fromJson(value)).toList();
  }

  static Map<String, MarketplacePurchase> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MarketplacePurchase>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MarketplacePurchase.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MarketplacePurchase-objects as value to a dart map
  static Map<String, List<MarketplacePurchase>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MarketplacePurchase>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MarketplacePurchase.listFromJson(value);
       });
     }
     return map;
  }
}

