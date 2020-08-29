part of openapi.api;

class ProjectPermissions {
  
  bool admin = null;
  
  bool read = null;
  
  bool write = null;

  ProjectPermissions({
    this.admin,
    this.read,
    this.write,
  });

  @override
  String toString() {
    return 'ProjectPermissions[admin=$admin, read=$read, write=$write, ]';
  }

  ProjectPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    admin = json['admin'];
    read = json['read'];
    write = json['write'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (admin != null)
      json['admin'] = admin;
    if (read != null)
      json['read'] = read;
    if (write != null)
      json['write'] = write;
    return json;
  }

  static List<ProjectPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<ProjectPermissions>() : json.map((value) => ProjectPermissions.fromJson(value)).toList();
  }

  static Map<String, ProjectPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProjectPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProjectPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProjectPermissions-objects as value to a dart map
  static Map<String, List<ProjectPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProjectPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProjectPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

