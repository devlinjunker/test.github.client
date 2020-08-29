part of openapi.api;

class InlineResponse2003 {
  
  List<OrganizationActionsSecret> secrets = [];
  
  int totalCount = null;

  InlineResponse2003({
    this.secrets,
    this.totalCount,
  });

  @override
  String toString() {
    return 'InlineResponse2003[secrets=$secrets, totalCount=$totalCount, ]';
  }

  InlineResponse2003.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    secrets = (json['secrets'] == null) ?
      null :
      OrganizationActionsSecret.listFromJson(json['secrets']);
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

  static List<InlineResponse2003> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2003>() : json.map((value) => InlineResponse2003.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2003> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2003>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2003.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2003-objects as value to a dart map
  static Map<String, List<InlineResponse2003>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2003>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2003.listFromJson(value);
       });
     }
     return map;
  }
}

