part of openapi.api;

class OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups {
  /* Description of the IdP group. */
  String groupDescription = null;
  /* ID of the IdP group. */
  String groupId = null;
  /* Name of the IdP group. */
  String groupName = null;

  OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups({
    this.groupDescription,
    this.groupId,
    this.groupName,
  });

  @override
  String toString() {
    return 'OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups[groupDescription=$groupDescription, groupId=$groupId, groupName=$groupName, ]';
  }

  OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    groupDescription = json['group_description'];
    groupId = json['group_id'];
    groupName = json['group_name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (groupDescription != null)
      json['group_description'] = groupDescription;
    if (groupId != null)
      json['group_id'] = groupId;
    if (groupName != null)
      json['group_name'] = groupName;
    return json;
  }

  static List<OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups>() : json.map((value) => OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups.fromJson(value)).toList();
  }

  static Map<String, OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups-objects as value to a dart map
  static Map<String, List<OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgsOrgTeamsTeamSlugTeamSyncGroupMappingsGroups.listFromJson(value);
       });
     }
     return map;
  }
}

