part of openapi.api;

class InlineObject35 {
  /* The role that this user should have in the team. Can be one of:   \\* `member` - a normal member of the team.   \\* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description. */
  String role = "member";
  //enum roleEnum {  member,  maintainer,  };{

  InlineObject35({
    this.role,
  });

  @override
  String toString() {
    return 'InlineObject35[role=$role, ]';
  }

  InlineObject35.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    role = json['role'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (role != null)
      json['role'] = role;
    return json;
  }

  static List<InlineObject35> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject35>() : json.map((value) => InlineObject35.fromJson(value)).toList();
  }

  static Map<String, InlineObject35> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject35>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject35.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject35-objects as value to a dart map
  static Map<String, List<InlineObject35>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject35>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject35.listFromJson(value);
       });
     }
     return map;
  }
}

