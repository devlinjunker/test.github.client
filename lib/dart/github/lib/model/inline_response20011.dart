part of openapi.api;

class InlineResponse20011 {
  
  List<CheckRun> checkRuns = [];
  
  int totalCount = null;

  InlineResponse20011({
    this.checkRuns,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse20011[checkRuns=$checkRuns, totalCount=$totalCount, ]';
  }

  InlineResponse20011.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    checkRuns = (json['check_runs'] == null) ?
      null :
      CheckRun.listFromJson(json['check_runs']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (checkRuns != null)
      json['check_runs'] = checkRuns;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse20011> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20011>() : json.map((value) => InlineResponse20011.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20011> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20011>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20011.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20011-objects as value to a dart map
  static Map<String, List<InlineResponse20011>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20011>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20011.listFromJson(value);
       });
     }
     return map;
  }
}

