part of openapi.api;

class InlineObject136 {
  /* The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove. */
  List<TeamsTeamIdTeamSyncGroupMappingsGroups> groups = [];
  
  String syncedAt = null;

  InlineObject136({
    this.groups,
    this.syncedAt,
  });

  @override
  String toString() {
    return 'InlineObject136[groups=$groups, syncedAt=$syncedAt, ]';
  }

  InlineObject136.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    groups = (json['groups'] == null) ?
      null :
      TeamsTeamIdTeamSyncGroupMappingsGroups.listFromJson(json['groups']);
    syncedAt = json['synced_at'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (groups != null)
      json['groups'] = groups;
    if (syncedAt != null)
      json['synced_at'] = syncedAt;
    return json;
  }

  static List<InlineObject136> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject136>() : json.map((value) => InlineObject136.fromJson(value)).toList();
  }

  static Map<String, InlineObject136> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject136>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject136.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject136-objects as value to a dart map
  static Map<String, List<InlineObject136>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject136>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject136.listFromJson(value);
       });
     }
     return map;
  }
}

