part of openapi.api;

class InlineObject {
  
  AppInstallationsInstallationIdAccessTokensPermissions permissions = null;
  /* List of repository names that the token should have access to */
  List<String> repositories = [];
  /* List of repository IDs that the token should have access to */
  List<int> repositoryIds = [];

  InlineObject({
    this.permissions,
    this.repositories,
    this.repositoryIds,
  });

  @override
  String toString() {
    return 'InlineObject[permissions=$permissions, repositories=$repositories, repositoryIds=$repositoryIds, ]';
  }

  InlineObject.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permissions = (json['permissions'] == null) ?
      null :
      AppInstallationsInstallationIdAccessTokensPermissions.fromJson(json['permissions']);
    repositories = (json['repositories'] == null) ?
      null :
      (json['repositories'] as List).cast<String>();
    repositoryIds = (json['repository_ids'] == null) ?
      null :
      (json['repository_ids'] as List).cast<int>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permissions != null)
      json['permissions'] = permissions;
    if (repositories != null)
      json['repositories'] = repositories;
    if (repositoryIds != null)
      json['repository_ids'] = repositoryIds;
    return json;
  }

  static List<InlineObject> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject>() : json.map((value) => InlineObject.fromJson(value)).toList();
  }

  static Map<String, InlineObject> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject-objects as value to a dart map
  static Map<String, List<InlineObject>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject.listFromJson(value);
       });
     }
     return map;
  }
}

