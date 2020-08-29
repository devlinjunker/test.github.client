part of openapi.api;

class OrgMembership {
  
  OrganizationSimple organization = null;
  
  String organizationUrl = null;
  
  OrgMembershipPermissions permissions = null;
  
  String role = null;
  
  String state = null;
  
  String url = null;
  
  SimpleUser user = null;

  OrgMembership({
    this.organization,
    this.organizationUrl,
    this.permissions,
    this.role,
    this.state,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'OrgMembership[organization=$organization, organizationUrl=$organizationUrl, permissions=$permissions, role=$role, state=$state, url=$url, user=$user, ]';
  }

  OrgMembership.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    organization = (json['organization'] == null) ?
      null :
      OrganizationSimple.fromJson(json['organization']);
    organizationUrl = json['organization_url'];
    permissions = (json['permissions'] == null) ?
      null :
      OrgMembershipPermissions.fromJson(json['permissions']);
    role = json['role'];
    state = json['state'];
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (organization != null)
      json['organization'] = organization;
    if (organizationUrl != null)
      json['organization_url'] = organizationUrl;
    if (permissions != null)
      json['permissions'] = permissions;
    if (role != null)
      json['role'] = role;
    if (state != null)
      json['state'] = state;
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<OrgMembership> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgMembership>() : json.map((value) => OrgMembership.fromJson(value)).toList();
  }

  static Map<String, OrgMembership> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgMembership>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgMembership.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgMembership-objects as value to a dart map
  static Map<String, List<OrgMembership>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgMembership>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgMembership.listFromJson(value);
       });
     }
     return map;
  }
}

