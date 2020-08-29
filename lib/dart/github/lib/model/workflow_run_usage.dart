part of openapi.api;

class WorkflowRunUsage {
  
  WorkflowRunUsageBillable billable = null;
  
  int runDurationMs = null;

  WorkflowRunUsage({
    this.billable,
    this.runDurationMs,
  });

  @override
  String toString() {
    return 'WorkflowRunUsage[billable=$billable, runDurationMs=$runDurationMs, ]';
  }

  WorkflowRunUsage.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    billable = (json['billable'] == null) ?
      null :
      WorkflowRunUsageBillable.fromJson(json['billable']);
    runDurationMs = json['run_duration_ms'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (billable != null)
      json['billable'] = billable;
    if (runDurationMs != null)
      json['run_duration_ms'] = runDurationMs;
    return json;
  }

  static List<WorkflowRunUsage> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowRunUsage>() : json.map((value) => WorkflowRunUsage.fromJson(value)).toList();
  }

  static Map<String, WorkflowRunUsage> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowRunUsage>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowRunUsage.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowRunUsage-objects as value to a dart map
  static Map<String, List<WorkflowRunUsage>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowRunUsage>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowRunUsage.listFromJson(value);
       });
     }
     return map;
  }
}

