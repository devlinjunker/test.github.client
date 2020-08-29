part of openapi.api;

class CheckRunCheckSuite {
  
  int id = null;

  CheckRunCheckSuite({
    this.id,
  });

  @override
  String toString() {
    return 'CheckRunCheckSuite[id=$id, ]';
  }

  CheckRunCheckSuite.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    return json;
  }

  static List<CheckRunCheckSuite> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckRunCheckSuite>() : json.map((value) => CheckRunCheckSuite.fromJson(value)).toList();
  }

  static Map<String, CheckRunCheckSuite> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckRunCheckSuite>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckRunCheckSuite.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckRunCheckSuite-objects as value to a dart map
  static Map<String, List<CheckRunCheckSuite>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckRunCheckSuite>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckRunCheckSuite.listFromJson(value);
       });
     }
     return map;
  }
}

