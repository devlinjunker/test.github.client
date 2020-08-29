part of openapi.api;

class TeamMembership {
  /* The role of the user in the team. */
  String role = "member";
  //enum roleEnum {  member,  maintainer,  };{
  
  String state = null;
  
  String url = null;

  TeamMembership({
    this.role,
    this.state,
    this.url,
  });

  @override
  String toString() {
    return 'TeamMembership[role=$role, state=$state, url=$url, ]';
  }

  TeamMembership.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    role = json['role'];
    state = json['state'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (role != null)
      json['role'] = role;
    if (state != null)
      json['state'] = state;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<TeamMembership> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamMembership>() : json.map((value) => TeamMembership.fromJson(value)).toList();
  }

  static Map<String, TeamMembership> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamMembership>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamMembership.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamMembership-objects as value to a dart map
  static Map<String, List<TeamMembership>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamMembership>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamMembership.listFromJson(value);
       });
     }
     return map;
  }
}

