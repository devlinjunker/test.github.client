part of openapi.api;

class GroupMappingGroups {
  /* a description of the group */
  String groupDescription = null;
  /* The ID of the group */
  String groupId = null;
  /* The name of the group */
  String groupName = null;

  GroupMappingGroups({
    this.groupDescription,
    this.groupId,
    this.groupName,
  });

  @override
  String toString() {
    return 'GroupMappingGroups[groupDescription=$groupDescription, groupId=$groupId, groupName=$groupName, ]';
  }

  GroupMappingGroups.fromJson(Map<String, dynamic> json) {
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

  static List<GroupMappingGroups> listFromJson(List<dynamic> json) {
    return json == null ? List<GroupMappingGroups>() : json.map((value) => GroupMappingGroups.fromJson(value)).toList();
  }

  static Map<String, GroupMappingGroups> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GroupMappingGroups>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GroupMappingGroups.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GroupMappingGroups-objects as value to a dart map
  static Map<String, List<GroupMappingGroups>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GroupMappingGroups>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GroupMappingGroups.listFromJson(value);
       });
     }
     return map;
  }
}

