part of openapi.api;

class InlineResponse2009 {
  
  List<ActionsSecret> secrets = [];
  
  int totalCount = null;

  InlineResponse2009({
    this.secrets,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2009[secrets=$secrets, totalCount=$totalCount, ]';
  }

  InlineResponse2009.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    secrets = (json['secrets'] == null) ?
      null :
      ActionsSecret.listFromJson(json['secrets']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (secrets != null)
      json['secrets'] = secrets;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2009> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2009>() : json.map((value) => InlineResponse2009.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2009> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2009>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2009.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2009-objects as value to a dart map
  static Map<String, List<InlineResponse2009>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2009>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2009.listFromJson(value);
       });
     }
     return map;
  }
}

