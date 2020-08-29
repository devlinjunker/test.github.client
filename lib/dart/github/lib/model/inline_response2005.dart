part of openapi.api;

class InlineResponse2005 {
  
  List<Installation> installations = [];
  
  int totalCount = null;

  InlineResponse2005({
    this.installations,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2005[installations=$installations, totalCount=$totalCount, ]';
  }

  InlineResponse2005.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    installations = (json['installations'] == null) ?
      null :
      Installation.listFromJson(json['installations']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (installations != null)
      json['installations'] = installations;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2005> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2005>() : json.map((value) => InlineResponse2005.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2005> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2005>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2005.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2005-objects as value to a dart map
  static Map<String, List<InlineResponse2005>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2005>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2005.listFromJson(value);
       });
     }
     return map;
  }
}

