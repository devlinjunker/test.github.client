part of openapi.api;

class InlineResponse20010 {
  
  int totalCount = null;
  
  List<Workflow> workflows = [];

  InlineResponse20010({
    this.totalCount,
    this.workflows,
  });

  @override
  String toString() {
    return 'InlineResponse20010[totalCount=$totalCount, workflows=$workflows, ]';
  }

  InlineResponse20010.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    totalCount = json['total_count'];
    workflows = (json['workflows'] == null) ?
      null :
      Workflow.listFromJson(json['workflows']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (totalCount != null)
      json['total_count'] = totalCount;
    if (workflows != null)
      json['workflows'] = workflows;
    return json;
  }

  static List<InlineResponse20010> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse20010>() : json.map((value) => InlineResponse20010.fromJson(value)).toList();
  }

  static Map<String, InlineResponse20010> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse20010>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse20010.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse20010-objects as value to a dart map
  static Map<String, List<InlineResponse20010>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse20010>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse20010.listFromJson(value);
       });
     }
     return map;
  }
}

