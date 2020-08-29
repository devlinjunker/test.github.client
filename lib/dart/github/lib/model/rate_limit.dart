part of openapi.api;

class RateLimit {
  
  int limit = null;
  
  int remaining = null;
  
  int reset = null;

  RateLimit({
    this.limit,
    this.remaining,
    this.reset,
  });

  @override
  String toString() {
    return 'RateLimit[limit=$limit, remaining=$remaining, reset=$reset, ]';
  }

  RateLimit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    limit = json['limit'];
    remaining = json['remaining'];
    reset = json['reset'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (limit != null)
      json['limit'] = limit;
    if (remaining != null)
      json['remaining'] = remaining;
    if (reset != null)
      json['reset'] = reset;
    return json;
  }

  static List<RateLimit> listFromJson(List<dynamic> json) {
    return json == null ? List<RateLimit>() : json.map((value) => RateLimit.fromJson(value)).toList();
  }

  static Map<String, RateLimit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RateLimit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RateLimit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RateLimit-objects as value to a dart map
  static Map<String, List<RateLimit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RateLimit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RateLimit.listFromJson(value);
       });
     }
     return map;
  }
}

