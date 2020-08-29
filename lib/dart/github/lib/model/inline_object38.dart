part of openapi.api;

class InlineObject38 {
  /* The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove. */
  List<OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups> groups = [];

  InlineObject38({
    this.groups,
  });

  @override
  String toString() {
    return 'InlineObject38[groups=$groups, ]';
  }

  InlineObject38.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    groups = (json['groups'] == null) ?
      null :
      OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups.listFromJson(json['groups']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (groups != null)
      json['groups'] = groups;
    return json;
  }

  static List<InlineObject38> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject38>() : json.map((value) => InlineObject38.fromJson(value)).toList();
  }

  static Map<String, InlineObject38> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject38>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject38.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject38-objects as value to a dart map
  static Map<String, List<InlineObject38>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject38>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject38.listFromJson(value);
       });
     }
     return map;
  }
}

