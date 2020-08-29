part of openapi.api;

class MarketplaceListingPlan {
  
  String accountsUrl = null;
  
  List<String> bullets = [];
  
  String description = null;
  
  bool hasFreeTrial = null;
  
  int id = null;
  
  int monthlyPriceInCents = null;
  
  String name = null;
  
  int number = null;
  
  String priceModel = null;
  
  String state = null;
  
  String unitName = null;
  
  String url = null;
  
  int yearlyPriceInCents = null;

  MarketplaceListingPlan({
    this.accountsUrl,
    this.bullets,
    this.description,
    this.hasFreeTrial,
    this.id,
    this.monthlyPriceInCents,
    this.name,
    this.number,
    this.priceModel,
    this.state,
    this.unitName,
    this.url,
    this.yearlyPriceInCents,
  });

  @override
  String toString() {
    return 'MarketplaceListingPlan[accountsUrl=$accountsUrl, bullets=$bullets, description=$description, hasFreeTrial=$hasFreeTrial, id=$id, monthlyPriceInCents=$monthlyPriceInCents, name=$name, number=$number, priceModel=$priceModel, state=$state, unitName=$unitName, url=$url, yearlyPriceInCents=$yearlyPriceInCents, ]';
  }

  MarketplaceListingPlan.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    accountsUrl = json['accounts_url'];
    bullets = (json['bullets'] == null) ?
      null :
      (json['bullets'] as List).cast<String>();
    description = json['description'];
    hasFreeTrial = json['has_free_trial'];
    id = json['id'];
    monthlyPriceInCents = json['monthly_price_in_cents'];
    name = json['name'];
    number = json['number'];
    priceModel = json['price_model'];
    state = json['state'];
    unitName = json['unit_name'];
    url = json['url'];
    yearlyPriceInCents = json['yearly_price_in_cents'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (accountsUrl != null)
      json['accounts_url'] = accountsUrl;
    if (bullets != null)
      json['bullets'] = bullets;
    if (description != null)
      json['description'] = description;
    if (hasFreeTrial != null)
      json['has_free_trial'] = hasFreeTrial;
    if (id != null)
      json['id'] = id;
    if (monthlyPriceInCents != null)
      json['monthly_price_in_cents'] = monthlyPriceInCents;
    if (name != null)
      json['name'] = name;
    if (number != null)
      json['number'] = number;
    if (priceModel != null)
      json['price_model'] = priceModel;
    if (state != null)
      json['state'] = state;
      json['unit_name'] = unitName;
    if (url != null)
      json['url'] = url;
    if (yearlyPriceInCents != null)
      json['yearly_price_in_cents'] = yearlyPriceInCents;
    return json;
  }

  static List<MarketplaceListingPlan> listFromJson(List<dynamic> json) {
    return json == null ? List<MarketplaceListingPlan>() : json.map((value) => MarketplaceListingPlan.fromJson(value)).toList();
  }

  static Map<String, MarketplaceListingPlan> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MarketplaceListingPlan>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MarketplaceListingPlan.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MarketplaceListingPlan-objects as value to a dart map
  static Map<String, List<MarketplaceListingPlan>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MarketplaceListingPlan>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MarketplaceListingPlan.listFromJson(value);
       });
     }
     return map;
  }
}

