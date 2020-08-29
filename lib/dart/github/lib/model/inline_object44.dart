part of openapi.api;

class InlineObject44 {
  /* The permission to grant the collaborator. */
  String permission = "write";
  //enum permissionEnum {  read,  write,  admin,  };{

  InlineObject44({
    this.permission,
  });

  @override
  String toString() {
    return 'InlineObject44[permission=$permission, ]';
  }

  InlineObject44.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
    return json;
  }

  static List<InlineObject44> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject44>() : json.map((value) => InlineObject44.fromJson(value)).toList();
  }

  static Map<String, InlineObject44> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject44>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject44.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject44-objects as value to a dart map
  static Map<String, List<InlineObject44>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject44>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject44.listFromJson(value);
       });
     }
     return map;
  }
}

