part of openapi.api;

class ScimV2OrganizationsOrgUsersName {
  
  String familyName = null;
  
  String formatted = null;
  
  String givenName = null;

  ScimV2OrganizationsOrgUsersName({
    this.familyName,
    this.formatted,
    this.givenName,
  });

  @override
  String toString() {
    return 'ScimV2OrganizationsOrgUsersName[familyName=$familyName, formatted=$formatted, givenName=$givenName, ]';
  }

  ScimV2OrganizationsOrgUsersName.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    familyName = json['familyName'];
    formatted = json['formatted'];
    givenName = json['givenName'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (familyName != null)
      json['familyName'] = familyName;
    if (formatted != null)
      json['formatted'] = formatted;
    if (givenName != null)
      json['givenName'] = givenName;
    return json;
  }

  static List<ScimV2OrganizationsOrgUsersName> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimV2OrganizationsOrgUsersName>() : json.map((value) => ScimV2OrganizationsOrgUsersName.fromJson(value)).toList();
  }

  static Map<String, ScimV2OrganizationsOrgUsersName> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimV2OrganizationsOrgUsersName>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimV2OrganizationsOrgUsersName.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimV2OrganizationsOrgUsersName-objects as value to a dart map
  static Map<String, List<ScimV2OrganizationsOrgUsersName>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimV2OrganizationsOrgUsersName>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimV2OrganizationsOrgUsersName.listFromJson(value);
       });
     }
     return map;
  }
}

