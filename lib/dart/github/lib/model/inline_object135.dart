part of openapi.api;

class InlineObject135 {
  /* The permission to grant the team on this repository. Can be one of:   \\* `pull` - team members can pull, but not push to or administer this repository.   \\* `push` - team members can pull and push, but not administer this repository.   \\* `admin` - team members can pull, push and administer this repository.      If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository. */
  String permission = null;
  //enum permissionEnum {  pull,  push,  admin,  };{

  InlineObject135({
    this.permission,
  });

  @override
  String toString() {
    return 'InlineObject135[permission=$permission, ]';
  }

  InlineObject135.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
    return json;
  }

  static List<InlineObject135> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject135>() : json.map((value) => InlineObject135.fromJson(value)).toList();
  }

  static Map<String, InlineObject135> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject135>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject135.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject135-objects as value to a dart map
  static Map<String, List<InlineObject135>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject135>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject135.listFromJson(value);
       });
     }
     return map;
  }
}

