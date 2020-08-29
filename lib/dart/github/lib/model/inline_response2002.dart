part of openapi.api;

class InlineResponse2002 {
  
  List<Runner> runners = [];
  
  int totalCount = null;

  InlineResponse2002({
    this.runners,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2002[runners=$runners, totalCount=$totalCount, ]';
  }

  InlineResponse2002.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    runners = (json['runners'] == null) ?
      null :
      Runner.listFromJson(json['runners']);
    totalCount = json['total_count'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (runners != null)
      json['runners'] = runners;
    if (totalCount != null)
      json['total_count'] = totalCount;
    return json;
  }

  static List<InlineResponse2002> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2002>() : json.map((value) => InlineResponse2002.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2002> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2002>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2002.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2002-objects as value to a dart map
  static Map<String, List<InlineResponse2002>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2002>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2002.listFromJson(value);
       });
     }
     return map;
  }
}

