part of openapi.api;

class RateLimitOverview {
  
  RateLimit rate = null;
  
  RateLimitOverviewResources resources = null;

  RateLimitOverview({
    this.rate,
    this.resources,
  });

  @override
  String toString() {
    return 'RateLimitOverview[rate=$rate, resources=$resources, ]';
  }

  RateLimitOverview.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    rate = (json['rate'] == null) ?
      null :
      RateLimit.fromJson(json['rate']);
    resources = (json['resources'] == null) ?
      null :
      RateLimitOverviewResources.fromJson(json['resources']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (rate != null)
      json['rate'] = rate;
    if (resources != null)
      json['resources'] = resources;
    return json;
  }

  static List<RateLimitOverview> listFromJson(List<dynamic> json) {
    return json == null ? List<RateLimitOverview>() : json.map((value) => RateLimitOverview.fromJson(value)).toList();
  }

  static Map<String, RateLimitOverview> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RateLimitOverview>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RateLimitOverview.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RateLimitOverview-objects as value to a dart map
  static Map<String, List<RateLimitOverview>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RateLimitOverview>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RateLimitOverview.listFromJson(value);
       });
     }
     return map;
  }
}

