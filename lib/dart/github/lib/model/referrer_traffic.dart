part of openapi.api;

class ReferrerTraffic {
  
  int count = null;
  
  String referrer = null;
  
  int uniques = null;

  ReferrerTraffic({
    this.count,
    this.referrer,
    this.uniques,
  });

  @override
  String toString() {
    return 'ReferrerTraffic[count=$count, referrer=$referrer, uniques=$uniques, ]';
  }

  ReferrerTraffic.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    count = json['count'];
    referrer = json['referrer'];
    uniques = json['uniques'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (count != null)
      json['count'] = count;
    if (referrer != null)
      json['referrer'] = referrer;
    if (uniques != null)
      json['uniques'] = uniques;
    return json;
  }

  static List<ReferrerTraffic> listFromJson(List<dynamic> json) {
    return json == null ? List<ReferrerTraffic>() : json.map((value) => ReferrerTraffic.fromJson(value)).toList();
  }

  static Map<String, ReferrerTraffic> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReferrerTraffic>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReferrerTraffic.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReferrerTraffic-objects as value to a dart map
  static Map<String, List<ReferrerTraffic>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReferrerTraffic>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReferrerTraffic.listFromJson(value);
       });
     }
     return map;
  }
}

