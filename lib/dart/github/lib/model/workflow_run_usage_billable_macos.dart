part of openapi.api;

class WorkflowRunUsageBillableMACOS {
  
  int jobs = null;
  
  int totalMs = null;

  WorkflowRunUsageBillableMACOS({
    this.jobs,
    this.totalMs,
  });

  @override
  String toString() {
    return 'WorkflowRunUsageBillableMACOS[jobs=$jobs, totalMs=$totalMs, ]';
  }

  WorkflowRunUsageBillableMACOS.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    jobs = json['jobs'];
    totalMs = json['total_ms'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (jobs != null)
      json['jobs'] = jobs;
    if (totalMs != null)
      json['total_ms'] = totalMs;
    return json;
  }

  static List<WorkflowRunUsageBillableMACOS> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowRunUsageBillableMACOS>() : json.map((value) => WorkflowRunUsageBillableMACOS.fromJson(value)).toList();
  }

  static Map<String, WorkflowRunUsageBillableMACOS> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowRunUsageBillableMACOS>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowRunUsageBillableMACOS.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowRunUsageBillableMACOS-objects as value to a dart map
  static Map<String, List<WorkflowRunUsageBillableMACOS>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowRunUsageBillableMACOS>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowRunUsageBillableMACOS.listFromJson(value);
       });
     }
     return map;
  }
}

