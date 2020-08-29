part of openapi.api;

class WorkflowUsage {
  
  WorkflowUsageBillable billable = null;

  WorkflowUsage({
    this.billable,
  });

  @override
  String toString() {
    return 'WorkflowUsage[billable=$billable, ]';
  }

  WorkflowUsage.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    billable = (json['billable'] == null) ?
      null :
      WorkflowUsageBillable.fromJson(json['billable']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (billable != null)
      json['billable'] = billable;
    return json;
  }

  static List<WorkflowUsage> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowUsage>() : json.map((value) => WorkflowUsage.fromJson(value)).toList();
  }

  static Map<String, WorkflowUsage> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowUsage>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowUsage.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowUsage-objects as value to a dart map
  static Map<String, List<WorkflowUsage>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowUsage>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowUsage.listFromJson(value);
       });
     }
     return map;
  }
}

