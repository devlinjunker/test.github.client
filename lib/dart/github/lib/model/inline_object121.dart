part of openapi.api;

class InlineObject121 {
  /* **Required:** The username or organization name the repository will be transferred to. */
  String newOwner = null;
  /* ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories. */
  List<int> teamIds = [];

  InlineObject121({
    this.newOwner,
    this.teamIds,
  });

  @override
  String toString() {
    return 'InlineObject121[newOwner=$newOwner, teamIds=$teamIds, ]';
  }

  InlineObject121.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    newOwner = json['new_owner'];
    teamIds = (json['team_ids'] == null) ?
      null :
      (json['team_ids'] as List).cast<int>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (newOwner != null)
      json['new_owner'] = newOwner;
    if (teamIds != null)
      json['team_ids'] = teamIds;
    return json;
  }

  static List<InlineObject121> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject121>() : json.map((value) => InlineObject121.fromJson(value)).toList();
  }

  static Map<String, InlineObject121> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject121>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject121.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject121-objects as value to a dart map
  static Map<String, List<InlineObject121>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject121>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject121.listFromJson(value);
       });
     }
     return map;
  }
}

