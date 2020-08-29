part of openapi.api;

class OrgMembershipPermissions {
  
  bool canCreateRepository = null;

  OrgMembershipPermissions({
    this.canCreateRepository,
  });

  @override
  String toString() {
    return 'OrgMembershipPermissions[canCreateRepository=$canCreateRepository, ]';
  }

  OrgMembershipPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    canCreateRepository = json['can_create_repository'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (canCreateRepository != null)
      json['can_create_repository'] = canCreateRepository;
    return json;
  }

  static List<OrgMembershipPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgMembershipPermissions>() : json.map((value) => OrgMembershipPermissions.fromJson(value)).toList();
  }

  static Map<String, OrgMembershipPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgMembershipPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgMembershipPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgMembershipPermissions-objects as value to a dart map
  static Map<String, List<OrgMembershipPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgMembershipPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgMembershipPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

