part of openapi.api;

class Runner {
  /* The id of the runner. */
  int id = null;
  /* The name of the runner. */
  String name = null;
  /* The Operating System of the runner. */
  String os = null;
  /* The status of the runner. */
  String status = null;

  Runner({
    this.id,
    this.name,
    this.os,
    this.status,
  });

  @override
  String toString() {
    return 'Runner[id=$id, name=$name, os=$os, status=$status, ]';
  }

  Runner.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    name = json['name'];
    os = json['os'];
    status = json['status'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (os != null)
      json['os'] = os;
    if (status != null)
      json['status'] = status;
    return json;
  }

  static List<Runner> listFromJson(List<dynamic> json) {
    return json == null ? List<Runner>() : json.map((value) => Runner.fromJson(value)).toList();
  }

  static Map<String, Runner> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Runner>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Runner.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Runner-objects as value to a dart map
  static Map<String, List<Runner>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Runner>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Runner.listFromJson(value);
       });
     }
     return map;
  }
}

