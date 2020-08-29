part of openapi.api;

class InlineResponse20012 {
  
  List<CheckSuite> checkSuites = [];
  
  int totalCount = null;

  InlineResponse20012({
    this.checkSuites,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20012[checkSuites=$checkSuites, totalCount=$totalCount, ]';
  }

  InlineResponse20012.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    checkSuites = (json['check_suites'] == null) ?
      null :
      CheckSuite.listFromJson(json['check_suites']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (checkSuites != null)
      json['check_suites'] = checkSuites;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse20012> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20012>() : json.map((value) => InlineResponse20012.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20012> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20012>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20012.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20012-objects as value to a dart map
  static Map<String, List<InlineResponse20012>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20012>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20012.listFromJson(value);
       });
     }
     return map;
  }
}

