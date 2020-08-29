part of openapi.api;

class ProtectedBranchAllowDeletions {
  
  bool enabled = null;

  ProtectedBranchAllowDeletions({
    this.enabled,
  });

  @override
  String toString() {
    return 'ProtectedBranchAllowDeletions[enabled=$enabled, ]';
  }

  ProtectedBranchAllowDeletions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    enabled = json['enabled'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (enabled != null)
      json['enabled'] = enabled;
    return json;
  }

  static List<ProtectedBranchAllowDeletions> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchAllowDeletions>() : json.map((value) => ProtectedBranchAllowDeletions.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchAllowDeletions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchAllowDeletions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchAllowDeletions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchAllowDeletions-objects as value to a dart map
  static Map<String, List<ProtectedBranchAllowDeletions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchAllowDeletions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchAllowDeletions.listFromJson(value);
       });
     }
     return map;
  }
}

