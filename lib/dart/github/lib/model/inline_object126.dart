part of openapi.api;

class InlineObject126 {
  /* The description of the team. */
  String description = null;
  /* The name of the team. */
  String name = null;
  /* The ID of a team to set as the parent team. */
  int parentTeamId = null;
  /* **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \\* `pull` - team members can pull, but not push to or administer newly-added repositories.   \\* `push` - team members can pull and push, but not administer newly-added repositories.   \\* `admin` - team members can pull, push and administer newly-added repositories. */
  String permission = "pull";
  //enum permissionEnum {  pull,  push,  admin,  };{
  /* The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:   **For a non-nested team:**   \\* `secret` - only visible to organization owners and members of this team.   \\* `closed` - visible to all members of this organization.   **For a parent or child team:**   \\* `closed` - visible to all members of this organization. */
  String privacy = null;
  //enum privacyEnum {  secret,  closed,  };{

  InlineObject126({
    this.description,
    this.name,
    this.parentTeamId,
    this.permission,
    this.privacy,
  });

  @override
  String toString() {
    return 'InlineObject126[description=$description, name=$name, parentTeamId=$parentTeamId, permission=$permission, privacy=$privacy, ]';
  }

  InlineObject126.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    name = json['name'];
    parentTeamId = json['parent_team_id'];
    permission = json['permission'];
    privacy = json['privacy'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (name != null)
      json['name'] = name;
      json['parent_team_id'] = parentTeamId;
    if (permission != null)
      json['permission'] = permission;
    if (privacy != null)
      json['privacy'] = privacy;
    return json;
  }

  static List<InlineObject126> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject126>() : json.map((value) => InlineObject126.fromJson(value)).toList();
  }

  static Map<String, InlineObject126> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject126>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject126.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject126-objects as value to a dart map
  static Map<String, List<InlineObject126>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject126>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject126.listFromJson(value);
       });
     }
     return map;
  }
}

