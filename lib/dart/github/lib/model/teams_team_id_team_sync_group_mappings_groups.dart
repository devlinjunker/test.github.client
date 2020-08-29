part of openapi.api;

class TeamsTeamIdTeamSyncGroupMappingsGroups {
  
  String description = null;
  /* Description of the IdP group. */
  String groupDescription = null;
  /* ID of the IdP group. */
  String groupId = null;
  /* Name of the IdP group. */
  String groupName = null;
  
  String id = null;
  
  String name = null;

  TeamsTeamIdTeamSyncGroupMappingsGroups({
    this.description,
    this.groupDescription,
    this.groupId,
    this.groupName,
    this.id,
    this.name,
  });

  @override
  String toString() {
    return 'TeamsTeamIdTeamSyncGroupMappingsGroups[description=$description, groupDescription=$groupDescription, groupId=$groupId, groupName=$groupName, id=$id, name=$name, ]';
  }

  TeamsTeamIdTeamSyncGroupMappingsGroups.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    groupDescription = json['group_description'];
    groupId = json['group_id'];
    groupName = json['group_name'];
    id = json['id'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (description != null)
      json['description'] = description;
    if (groupDescription != null)
      json['group_description'] = groupDescription;
    if (groupId != null)
      json['group_id'] = groupId;
    if (groupName != null)
      json['group_name'] = groupName;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<TeamsTeamIdTeamSyncGroupMappingsGroups> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamsTeamIdTeamSyncGroupMappingsGroups>() : json.map((value) => TeamsTeamIdTeamSyncGroupMappingsGroups.fromJson(value)).toList();
  }

  static Map<String, TeamsTeamIdTeamSyncGroupMappingsGroups> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamsTeamIdTeamSyncGroupMappingsGroups>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamsTeamIdTeamSyncGroupMappingsGroups.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamsTeamIdTeamSyncGroupMappingsGroups-objects as value to a dart map
  static Map<String, List<TeamsTeamIdTeamSyncGroupMappingsGroups>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamsTeamIdTeamSyncGroupMappingsGroups>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamsTeamIdTeamSyncGroupMappingsGroups.listFromJson(value);
       });
     }
     return map;
  }
}

