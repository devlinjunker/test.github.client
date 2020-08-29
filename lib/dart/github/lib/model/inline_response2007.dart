part of openapi.api;

class InlineResponse2007 {
  
  int totalCount = null;
  
  List<WorkflowRun> workflowRuns = [];

  InlineResponse2007({
    this.totalCount,
    this.workflowRuns,
  });

  @override
  String toString() {
    return 'InlineResponse2007[totalCount=$totalCount, workflowRuns=$workflowRuns, ]';
  }

  InlineResponse2007.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    totalCount = json['total_count'];
    workflowRuns = (json['workflow_runs'] == null) ?
      null :
      WorkflowRun.listFromJson(json['workflow_runs']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (totalCount != null)
      json['total_count'] = totalCount;
    if (workflowRuns != null)
      json['workflow_runs'] = workflowRuns;
    return json;
  }

  static List<InlineResponse2007> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse2007>() : json.map((value) => InlineResponse2007.fromJson(value)).toList();
  }

  static Map<String, InlineResponse2007> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse2007>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse2007.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse2007-objects as value to a dart map
  static Map<String, List<InlineResponse2007>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse2007>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse2007.listFromJson(value);
       });
     }
     return map;
  }
}

