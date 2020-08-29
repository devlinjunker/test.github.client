part of openapi.api;

class InlineObject27 {
  /* The description of the team. */
  String description = null;
  /* List GitHub IDs for organization members who will become team maintainers. */
  List<String> maintainers = [];
  /* The name of the team. */
  String name = null;
  /* The ID of a team to set as the parent team. */
  int parentTeamId = null;
  /* **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \\* `pull` - team members can pull, but not push to or administer newly-added repositories.   \\* `push` - team members can pull and push, but not administer newly-added repositories.   \\* `admin` - team members can pull, push and administer newly-added repositories. */
  String permission = "pull";
  //enum permissionEnum {  pull,  push,  admin,  };{
  /* The level of privacy this team should have. The options are:   **For a non-nested team:**   \\* `secret` - only visible to organization owners and members of this team.   \\* `closed` - visible to all members of this organization.   Default: `secret`   **For a parent or child team:**   \\* `closed` - visible to all members of this organization.   Default for child team: `closed` */
  String privacy = null;
  //enum privacyEnum {  secret,  closed,  };{
  /* The full name (e.g., \"organization-name/repository-name\") of repositories to add the team to. */
  List<String> repoNames = [];

  InlineObject27({
    this.description,
    this.maintainers,
    this.name,
    this.parentTeamId,
    this.permission,
    this.privacy,
    this.repoNames,
  });

  @override
  String toString() {
    return 'InlineObject27[description=$description, maintainers=$maintainers, name=$name, parentTeamId=$parentTeamId, permission=$permission, privacy=$privacy, repoNames=$repoNames, ]';
  }

  InlineObject27.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    maintainers = (json['maintainers'] == null) ?
      null :
      (json['maintainers'] as List).cast<String>();
    name = json['name'];
    parentTeamId = json['parent_team_id'];
    permission = json['permission'];
    privacy = json['privacy'];
    repoNames = (json['repo_names'] == null) ?
      null :
      (json['repo_names'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (maintainers != null)
      json['maintainers'] = maintainers;
    if (name != null)
      json['name'] = name;
    if (parentTeamId != null)
      json['parent_team_id'] = parentTeamId;
    if (permission != null)
      json['permission'] = permission;
    if (privacy != null)
      json['privacy'] = privacy;
    if (repoNames != null)
      json['repo_names'] = repoNames;
    return json;
  }

  static List<InlineObject27> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject27>() : json.map((value) => InlineObject27.fromJson(value)).toList();
  }

  static Map<String, InlineObject27> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject27>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject27.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject27-objects as value to a dart map
  static Map<String, List<InlineObject27>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject27>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject27.listFromJson(value);
       });
     }
     return map;
  }
}

