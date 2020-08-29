part of openapi.api;

class InlineObject37 {
  /* The permission to grant the team on this repository. Can be one of:   \\* `pull` - team members can pull, but not push to or administer this repository.   \\* `push` - team members can pull and push, but not administer this repository.   \\* `admin` - team members can pull, push and administer this repository.   \\* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.   \\* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.      If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository. */
  String permission = null;
  //enum permissionEnum {  pull,  push,  admin,  maintain,  triage,  };{

  InlineObject37({
    this.permission,
  });

  @override
  String toString() {
    return 'InlineObject37[permission=$permission, ]';
  }

  InlineObject37.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
    return json;
  }

  static List<InlineObject37> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject37>() : json.map((value) => InlineObject37.fromJson(value)).toList();
  }

  static Map<String, InlineObject37> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject37>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject37.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject37-objects as value to a dart map
  static Map<String, List<InlineObject37>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject37>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject37.listFromJson(value);
       });
     }
     return map;
  }
}

