part of openapi.api;

class InlineObject134 {
  /* The permission to grant to the team for this project. Can be one of:   \\* `read` - team members can read, but not write to or administer this project.   \\* `write` - team members can read and write, but not administer this project.   \\* `admin` - team members can read, write and administer this project.   Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://developer.github.com/v3/#http-verbs).\" */
  String permission = null;
  //enum permissionEnum {  read,  write,  admin,  };{

  InlineObject134({
    this.permission,
  });

  @override
  String toString() {
    return 'InlineObject134[permission=$permission, ]';
  }

  InlineObject134.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
    return json;
  }

  static List<InlineObject134> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject134>() : json.map((value) => InlineObject134.fromJson(value)).toList();
  }

  static Map<String, InlineObject134> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject134>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject134.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject134-objects as value to a dart map
  static Map<String, List<InlineObject134>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject134>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject134.listFromJson(value);
       });
     }
     return map;
  }
}

