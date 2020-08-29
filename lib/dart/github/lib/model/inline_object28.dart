part of openapi.api;

class InlineObject28 {
  /* The description of the team. */
  String description = null;
  /* The name of the team. */
  String name = null;
  /* The ID of a team to set as the parent team. */
  int parentTeamId = null;
  /* **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \\* `pull` - team members can pull, but not push to or administer newly-added repositories.   \\* `push` - team members can pull and push, but not administer newly-added repositories.   \\* `admin` - team members can pull, push and administer newly-added repositories. */
  String permission = "pull";
  //enum permissionEnum {  pull,  push,  admin,  };{
  /* The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:   **For a non-nested team:**   \\* `secret` - only visible to organization owners and members of this team.   \\* `closed` - visible to all members of this organization.   **For a parent or child team:**   \\* `closed` - visible to all members of this organization. */
  String privacy = null;
  //enum privacyEnum {  secret,  closed,  };{

  InlineObject28({
    this.description,
    this.name,
    this.parentTeamId,
    this.permission,
    this.privacy,
  });

  @override
  String toString() {
    return 'InlineObject28[description=$description, name=$name, parentTeamId=$parentTeamId, permission=$permission, privacy=$privacy, ]';
  }

  InlineObject28.fromJson(Map<String, dynamic> json) {
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
    if (parentTeamId != null)
      json['parent_team_id'] = parentTeamId;
    if (permission != null)
      json['permission'] = permission;
    if (privacy != null)
      json['privacy'] = privacy;
    return json;
  }

  static List<InlineObject28> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject28>() : json.map((value) => InlineObject28.fromJson(value)).toList();
  }

  static Map<String, InlineObject28> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject28>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject28.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject28-objects as value to a dart map
  static Map<String, List<InlineObject28>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject28>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject28.listFromJson(value);
       });
     }
     return map;
  }
}

