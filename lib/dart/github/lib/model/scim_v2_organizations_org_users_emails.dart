part of openapi.api;

class ScimV2OrganizationsOrgUsersEmails {
  
  bool primary = null;
  
  String type = null;
  
  String value = null;

  ScimV2OrganizationsOrgUsersEmails({
    this.primary,
    this.type,
    this.value,
  });

  @override
  String toString() {
    return 'ScimV2OrganizationsOrgUsersEmails[primary=$primary, type=$type, value=$value, ]';
  }

  ScimV2OrganizationsOrgUsersEmails.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    primary = json['primary'];
    type = json['type'];
    value = json['value'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (primary != null)
      json['primary'] = primary;
    if (type != null)
      json['type'] = type;
    if (value != null)
      json['value'] = value;
    return json;
  }

  static List<ScimV2OrganizationsOrgUsersEmails> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimV2OrganizationsOrgUsersEmails>() : json.map((value) => ScimV2OrganizationsOrgUsersEmails.fromJson(value)).toList();
  }

  static Map<String, ScimV2OrganizationsOrgUsersEmails> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimV2OrganizationsOrgUsersEmails>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimV2OrganizationsOrgUsersEmails.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimV2OrganizationsOrgUsersEmails-objects as value to a dart map
  static Map<String, List<ScimV2OrganizationsOrgUsersEmails>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimV2OrganizationsOrgUsersEmails>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimV2OrganizationsOrgUsersEmails.listFromJson(value);
       });
     }
     return map;
  }
}

