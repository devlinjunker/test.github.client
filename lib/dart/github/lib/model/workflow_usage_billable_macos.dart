part of openapi.api;

class WorkflowUsageBillableMACOS {
  
  int totalMs = null;

  WorkflowUsageBillableMACOS({
    this.totalMs,
  });

  @override
  String toString() {
    return 'WorkflowUsageBillableMACOS[totalMs=$totalMs, ]';
  }

  WorkflowUsageBillableMACOS.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    totalMs = json['total_ms'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (totalMs != null)
      json['total_ms'] = totalMs;
    return json;
  }

  static List<WorkflowUsageBillableMACOS> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowUsageBillableMACOS>() : json.map((value) => WorkflowUsageBillableMACOS.fromJson(value)).toList();
  }

  static Map<String, WorkflowUsageBillableMACOS> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowUsageBillableMACOS>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowUsageBillableMACOS.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowUsageBillableMACOS-objects as value to a dart map
  static Map<String, List<WorkflowUsageBillableMACOS>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowUsageBillableMACOS>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowUsageBillableMACOS.listFromJson(value);
       });
     }
     return map;
  }
}

