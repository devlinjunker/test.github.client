part of openapi.api;

class ScimV2OrganizationsOrgUsersScimUserIdOperations {
  
  String op = null;
  //enum opEnum {  add,  remove,  replace,  };{
  
  String path = null;
  
  OneOf<object,array,string> value = null;

  ScimV2OrganizationsOrgUsersScimUserIdOperations({
    this.op,
    this.path,
    this.value,
  });

  @override
  String toString() {
    return 'ScimV2OrganizationsOrgUsersScimUserIdOperations[op=$op, path=$path, value=$value, ]';
  }

  ScimV2OrganizationsOrgUsersScimUserIdOperations.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    op = json['op'];
    path = json['path'];
    value = (json['value'] == null) ?
      null :
      OneOf&lt;object,array,string&gt;.fromJson(json['value']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (op != null)
      json['op'] = op;
    if (path != null)
      json['path'] = path;
    if (value != null)
      json['value'] = value;
    return json;
  }

  static List<ScimV2OrganizationsOrgUsersScimUserIdOperations> listFromJson(List<dynamic> json) {
    return json == null ? List<ScimV2OrganizationsOrgUsersScimUserIdOperations>() : json.map((value) => ScimV2OrganizationsOrgUsersScimUserIdOperations.fromJson(value)).toList();
  }

  static Map<String, ScimV2OrganizationsOrgUsersScimUserIdOperations> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScimV2OrganizationsOrgUsersScimUserIdOperations>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScimV2OrganizationsOrgUsersScimUserIdOperations.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScimV2OrganizationsOrgUsersScimUserIdOperations-objects as value to a dart map
  static Map<String, List<ScimV2OrganizationsOrgUsersScimUserIdOperations>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScimV2OrganizationsOrgUsersScimUserIdOperations>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScimV2OrganizationsOrgUsersScimUserIdOperations.listFromJson(value);
       });
     }
     return map;
  }
}

