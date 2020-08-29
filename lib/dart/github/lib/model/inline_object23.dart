part of openapi.api;

class InlineObject23 {
  /* The role to give the user in the organization. Can be one of:   \\* `admin` - The user will become an owner of the organization.   \\* `member` - The user will become a non-owner member of the organization. */
  String role = "member";
  //enum roleEnum {  admin,  member,  };{

  InlineObject23({
    this.role,
  });

  @override
  String toString() {
    return 'InlineObject23[role=$role, ]';
  }

  InlineObject23.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    role = json['role'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (role != null)
      json['role'] = role;
    return json;
  }

  static List<InlineObject23> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject23>() : json.map((value) => InlineObject23.fromJson(value)).toList();
  }

  static Map<String, InlineObject23> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject23>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject23.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject23-objects as value to a dart map
  static Map<String, List<InlineObject23>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject23>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject23.listFromJson(value);
       });
     }
     return map;
  }
}

