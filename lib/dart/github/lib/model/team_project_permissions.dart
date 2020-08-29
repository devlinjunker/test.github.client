part of openapi.api;

class TeamProjectPermissions {
  
  bool admin = null;
  
  bool read = null;
  
  bool write = null;

  TeamProjectPermissions({
    this.admin,
    this.read,
    this.write,
  });

  @override
  String toString() {
    return 'TeamProjectPermissions[admin=$admin, read=$read, write=$write, ]';
  }

  TeamProjectPermissions.fromJson(Map<String, dynamic> json) {
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

  static List<TeamProjectPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamProjectPermissions>() : json.map((value) => TeamProjectPermissions.fromJson(value)).toList();
  }

  static Map<String, TeamProjectPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamProjectPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamProjectPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamProjectPermissions-objects as value to a dart map
  static Map<String, List<TeamProjectPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamProjectPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamProjectPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

