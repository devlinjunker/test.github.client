part of openapi.api;

class ProtectedBranchEnforceAdmins {
  
  bool enabled = null;
  
  String url = null;

  ProtectedBranchEnforceAdmins({
    this.enabled,
    this.url,
  });

  @override
  String toString() {
    return 'ProtectedBranchEnforceAdmins[enabled=$enabled, url=$url, ]';
  }

  ProtectedBranchEnforceAdmins.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    enabled = json['enabled'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (enabled != null)
      json['enabled'] = enabled;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ProtectedBranchEnforceAdmins> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchEnforceAdmins>() : json.map((value) => ProtectedBranchEnforceAdmins.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchEnforceAdmins> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchEnforceAdmins>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchEnforceAdmins.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchEnforceAdmins-objects as value to a dart map
  static Map<String, List<ProtectedBranchEnforceAdmins>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchEnforceAdmins>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchEnforceAdmins.listFromJson(value);
       });
     }
     return map;
  }
}

