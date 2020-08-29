part of openapi.api;

class BranchRestrictionPolicyPermissions {
  
  String contents = null;
  
  String issues = null;
  
  String metadata = null;
  
  String singleFile = null;

  BranchRestrictionPolicyPermissions({
    this.contents,
    this.issues,
    this.metadata,
    this.singleFile,
  });

  @override
  String toString() {
    return 'BranchRestrictionPolicyPermissions[contents=$contents, issues=$issues, metadata=$metadata, singleFile=$singleFile, ]';
  }

  BranchRestrictionPolicyPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contents = json['contents'];
    issues = json['issues'];
    metadata = json['metadata'];
    singleFile = json['single_file'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contents != null)
      json['contents'] = contents;
    if (issues != null)
      json['issues'] = issues;
    if (metadata != null)
      json['metadata'] = metadata;
    if (singleFile != null)
      json['single_file'] = singleFile;
    return json;
  }

  static List<BranchRestrictionPolicyPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchRestrictionPolicyPermissions>() : json.map((value) => BranchRestrictionPolicyPermissions.fromJson(value)).toList();
  }

  static Map<String, BranchRestrictionPolicyPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchRestrictionPolicyPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchRestrictionPolicyPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchRestrictionPolicyPermissions-objects as value to a dart map
  static Map<String, List<BranchRestrictionPolicyPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchRestrictionPolicyPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchRestrictionPolicyPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

