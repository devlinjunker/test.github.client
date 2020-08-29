part of openapi.api;

class ProtectedBranchAdminEnforced {
  
  bool enabled = null;
  
  String url = null;

  ProtectedBranchAdminEnforced({
    this.enabled,
    this.url,
  });

  @override
  String toString() {
    return 'ProtectedBranchAdminEnforced[enabled=$enabled, url=$url, ]';
  }

  ProtectedBranchAdminEnforced.fromJson(Map<String, dynamic> json) {
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

  static List<ProtectedBranchAdminEnforced> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchAdminEnforced>() : json.map((value) => ProtectedBranchAdminEnforced.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchAdminEnforced> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchAdminEnforced>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchAdminEnforced.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchAdminEnforced-objects as value to a dart map
  static Map<String, List<ProtectedBranchAdminEnforced>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchAdminEnforced>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchAdminEnforced.listFromJson(value);
       });
     }
     return map;
  }
}

