part of openapi.api;

class ProtectedBranchRequiredSignatures {
  
  bool enabled = null;
  
  String url = null;

  ProtectedBranchRequiredSignatures({
    this.enabled,
    this.url,
  });

  @override
  String toString() {
    return 'ProtectedBranchRequiredSignatures[enabled=$enabled, url=$url, ]';
  }

  ProtectedBranchRequiredSignatures.fromJson(Map<String, dynamic> json) {
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

  static List<ProtectedBranchRequiredSignatures> listFromJson(List<dynamic> json) {
    return json == null ? List<ProtectedBranchRequiredSignatures>() : json.map((value) => ProtectedBranchRequiredSignatures.fromJson(value)).toList();
  }

  static Map<String, ProtectedBranchRequiredSignatures> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProtectedBranchRequiredSignatures>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProtectedBranchRequiredSignatures.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProtectedBranchRequiredSignatures-objects as value to a dart map
  static Map<String, List<ProtectedBranchRequiredSignatures>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProtectedBranchRequiredSignatures>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProtectedBranchRequiredSignatures.listFromJson(value);
       });
     }
     return map;
  }
}

