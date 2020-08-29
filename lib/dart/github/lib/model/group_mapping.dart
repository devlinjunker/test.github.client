part of openapi.api;

class GroupMapping {
  /* a description of the group */
  String groupDescription = null;
  /* The ID of the group */
  String groupId = null;
  /* The name of the group */
  String groupName = null;
  /* Array of groups to be mapped to this team */
  List<GroupMappingGroups> groups = [];
  /* synchronization status for this group mapping */
  String status = null;
  /* the time of the last sync for this group-mapping */
  String syncedAt = null;

  GroupMapping({
    this.groupDescription,
    this.groupId,
    this.groupName,
    this.groups,
    this.status,
    this.syncedAt,
  });

  @override
  String toString() {
    return 'GroupMapping[groupDescription=$groupDescription, groupId=$groupId, groupName=$groupName, groups=$groups, status=$status, syncedAt=$syncedAt, ]';
  }

  GroupMapping.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    groupDescription = json['group_description'];
    groupId = json['group_id'];
    groupName = json['group_name'];
    groups = (json['groups'] == null) ?
      null :
      GroupMappingGroups.listFromJson(json['groups']);
    status = json['status'];
    syncedAt = json['synced_at'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (groupDescription != null)
      json['group_description'] = groupDescription;
    if (groupId != null)
      json['group_id'] = groupId;
    if (groupName != null)
      json['group_name'] = groupName;
    if (groups != null)
      json['groups'] = groups;
    if (status != null)
      json['status'] = status;
    if (syncedAt != null)
      json['synced_at'] = syncedAt;
    return json;
  }

  static List<GroupMapping> listFromJson(List<dynamic> json) {
    return json == null ? List<GroupMapping>() : json.map((value) => GroupMapping.fromJson(value)).toList();
  }

  static Map<String, GroupMapping> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GroupMapping>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GroupMapping.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GroupMapping-objects as value to a dart map
  static Map<String, List<GroupMapping>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GroupMapping>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GroupMapping.listFromJson(value);
       });
     }
     return map;
  }
}

