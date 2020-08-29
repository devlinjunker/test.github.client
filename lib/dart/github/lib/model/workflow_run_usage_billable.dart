part of openapi.api;

class WorkflowRunUsageBillable {
  
  WorkflowRunUsageBillableMACOS MACOS = null;
  
  WorkflowRunUsageBillableMACOS UBUNTU = null;
  
  WorkflowRunUsageBillableMACOS WINDOWS = null;

  WorkflowRunUsageBillable({
    this.MACOS,
    this.UBUNTU,
    this.WINDOWS,
  });

  @override
  String toString() {
    return 'WorkflowRunUsageBillable[MACOS=$MACOS, UBUNTU=$UBUNTU, WINDOWS=$WINDOWS, ]';
  }

  WorkflowRunUsageBillable.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    MACOS = (json['MACOS'] == null) ?
      null :
      WorkflowRunUsageBillableMACOS.fromJson(json['MACOS']);
    UBUNTU = (json['UBUNTU'] == null) ?
      null :
      WorkflowRunUsageBillableMACOS.fromJson(json['UBUNTU']);
    WINDOWS = (json['WINDOWS'] == null) ?
      null :
      WorkflowRunUsageBillableMACOS.fromJson(json['WINDOWS']);
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

  static List<WorkflowRunUsageBillable> listFromJson(List<dynamic> json) {
    return json == null ? List<WorkflowRunUsageBillable>() : json.map((value) => WorkflowRunUsageBillable.fromJson(value)).toList();
  }

  static Map<String, WorkflowRunUsageBillable> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, WorkflowRunUsageBillable>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = WorkflowRunUsageBillable.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of WorkflowRunUsageBillable-objects as value to a dart map
  static Map<String, List<WorkflowRunUsageBillable>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<WorkflowRunUsageBillable>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = WorkflowRunUsageBillable.listFromJson(value);
       });
     }
     return map;
  }
}

