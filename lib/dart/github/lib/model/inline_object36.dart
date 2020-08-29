part of openapi.api;

class InlineObject36 {
  /* The permission to grant to the team for this project. Can be one of:   \\* `read` - team members can read, but not write to or administer this project.   \\* `write` - team members can read and write, but not administer this project.   \\* `admin` - team members can read, write and administer this project.   Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\" */
  String permission = null;
  //enum permissionEnum {  read,  write,  admin,  };{

  InlineObject36({
    this.permission,
  });

  @override
  String toString() {
    return 'InlineObject36[permission=$permission, ]';
  }

  InlineObject36.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
    return json;
  }

  static List<InlineObject36> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject36>() : json.map((value) => InlineObject36.fromJson(value)).toList();
  }

  static Map<String, InlineObject36> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject36>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject36.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject36-objects as value to a dart map
  static Map<String, List<InlineObject36>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject36>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject36.listFromJson(value);
       });
     }
     return map;
  }
}

