part of openapi.api;

class BranchProtectionAllowDeletions {
  
  bool enabled = null;

  BranchProtectionAllowDeletions({
    this.enabled,
  });

  @override
  String toString() {
    return 'BranchProtectionAllowDeletions[enabled=$enabled, ]';
  }

  BranchProtectionAllowDeletions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    enabled = json['enabled'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (enabled != null)
      json['enabled'] = enabled;
    return json;
  }

  static List<BranchProtectionAllowDeletions> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchProtectionAllowDeletions>() : json.map((value) => BranchProtectionAllowDeletions.fromJson(value)).toList();
  }

  static Map<String, BranchProtectionAllowDeletions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchProtectionAllowDeletions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchProtectionAllowDeletions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchProtectionAllowDeletions-objects as value to a dart map
  static Map<String, List<BranchProtectionAllowDeletions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchProtectionAllowDeletions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchProtectionAllowDeletions.listFromJson(value);
       });
     }
     return map;
  }
}

