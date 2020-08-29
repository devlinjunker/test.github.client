part of openapi.api;

class WorkflowUsageBillable {
  
  WorkflowUsageBillableMACOS MACOS = null;
  
  WorkflowUsageBillableMACOS UBUNTU = null;
  
  WorkflowUsageBillableMACOS WINDOWS = null;

  WorkflowUsageBillable({
    this.MACOS,
    this.UBUNTU,
    this.WINDOWS,
  });

  @override
  String toString() {
    return 'WorkflowUsageBillable[MACOS=$MACOS, UBUNTU=$UBUNTU, WINDOWS=$WINDOWS, ]';
  }

  WorkflowUsageBillable.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    MACOS = (json['MACOS'] == null) ?
      null :
      WorkflowUsageBillableMACOS.fromJson(json['MACOS']);
    UBUNTU = (json['UBUNTU'] == null) ?
      null :
      WorkflowUsageBillableMACOS.fromJson(json['UBUNTU']);
    WINDOWS = (json['WINDOWS'] == null) ?
      null :
      WorkflowUsageBillableMACOS.fromJson(json['WINDOWS']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (MACOS != null)
      json['MACOS'] = MACOS;
    if (UBUNTU != null)
      json['UBUNTU'] = UBUNTU;
    if (WINDOWS != null)
      json['WINDOWS'] = WINDOWS;
    return json;
  }

  static List<WorkflowUsageBillable> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowUsageBillable>() : json.map((value) => WorkflowUsageBillable.fromJson(value)).toList();
  }

  static Map<String, WorkflowUsageBillable> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowUsageBillable>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowUsageBillable.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowUsageBillable-objects as value to a dart map
  static Map<String, List<WorkflowUsageBillable>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowUsageBillable>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowUsageBillable.listFromJson(value);
       });
     }
     return map;
  }
}

