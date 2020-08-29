part of openapi.api;

class RepositoryCollaboratorPermission {
  
  String permission = null;
  
  SimpleUser user = null;

  RepositoryCollaboratorPermission({
    this.permission,
    this.user,
  });

  @override
  String toString() {
    return 'RepositoryCollaboratorPermission[permission=$permission, user=$user, ]';
  }

  RepositoryCollaboratorPermission.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    permission = json['permission'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (permission != null)
      json['permission'] = permission;
      json['user'] = user;
    return json;
  }

  static List<RepositoryCollaboratorPermission> listFromJson(List<dynamic> json) {
    return json == null ? List<RepositoryCollaboratorPermission>() : json.map((value) => RepositoryCollaboratorPermission.fromJson(value)).toList();
  }

  static Map<String, RepositoryCollaboratorPermission> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RepositoryCollaboratorPermission>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RepositoryCollaboratorPermission.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RepositoryCollaboratorPermission-objects as value to a dart map
  static Map<String, List<RepositoryCollaboratorPermission>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RepositoryCollaboratorPermission>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RepositoryCollaboratorPermission.listFromJson(value);
       });
     }
     return map;
  }
}

