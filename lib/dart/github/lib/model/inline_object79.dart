part of openapi.api;

class InlineObject79 {
  /* The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`. */
  String permissions = null;
  //enum permissionsEnum {  read,  write,  maintain,  triage,  admin,  };{

  InlineObject79({
    this.permissions,
  });

  @override
  String toString() {
    return 'InlineObject79[permissions=$permissions, ]';
  }

  InlineObject79.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permissions = json['permissions'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permissions != null)
      json['permissions'] = permissions;
    return json;
  }

  static List<InlineObject79> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject79>() : json.map((value) => InlineObject79.fromJson(value)).toList();
  }

  static Map<String, InlineObject79> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject79>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject79.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject79-objects as value to a dart map
  static Map<String, List<InlineObject79>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject79>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject79.listFromJson(value);
       });
     }
     return map;
  }
}

