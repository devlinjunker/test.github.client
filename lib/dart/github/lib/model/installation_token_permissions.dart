part of openapi.api;

class InstallationTokenPermissions {
  
  String contents = null;
  
  String issues = null;
  
  String metadata = null;
  
  String singleFile = null;

  InstallationTokenPermissions({
    this.contents,
    this.issues,
    this.metadata,
    this.singleFile,
  });

  @override
  String toString() {
    return 'InstallationTokenPermissions[contents=$contents, issues=$issues, metadata=$metadata, singleFile=$singleFile, ]';
  }

  InstallationTokenPermissions.fromJson(Map<String, dynamic> json) {
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

  static List<InstallationTokenPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<InstallationTokenPermissions>() : json.map((value) => InstallationTokenPermissions.fromJson(value)).toList();
  }

  static Map<String, InstallationTokenPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InstallationTokenPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InstallationTokenPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InstallationTokenPermissions-objects as value to a dart map
  static Map<String, List<InstallationTokenPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InstallationTokenPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InstallationTokenPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

