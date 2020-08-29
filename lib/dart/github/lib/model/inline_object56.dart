part of openapi.api;

class InlineObject56 {
  /* The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:   \\* `pull` - can pull, but not push to or administer this repository.   \\* `push` - can pull and push, but not administer this repository.   \\* `admin` - can pull, push and administer this repository.   \\* `maintain` - Recommended for project managers who need to manage the repository without access to sensitive or destructive actions.   \\* `triage` - Recommended for contributors who need to proactively manage issues and pull requests without write access. */
  String permission = "push";
  //enum permissionEnum {  pull,  push,  admin,  maintain,  triage,  };{
  
  String permissions = null;

  InlineObject56({
    this.permission,
    this.permissions,
  });

  @override
  String toString() {
    return 'InlineObject56[permission=$permission, permissions=$permissions, ]';
  }

  InlineObject56.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
    permissions = json['permissions'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
    if (permissions != null)
      json['permissions'] = permissions;
    return json;
  }

  static List<InlineObject56> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject56>() : json.map((value) => InlineObject56.fromJson(value)).toList();
  }

  static Map<String, InlineObject56> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject56>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject56.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject56-objects as value to a dart map
  static Map<String, List<InlineObject56>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject56>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject56.listFromJson(value);
       });
     }
     return map;
  }
}

