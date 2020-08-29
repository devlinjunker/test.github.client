part of openapi.api;

class AppInstallationsInstallationIdAccessTokensPermissions {
  
  String contents = null;
  
  String defNotARepo = null;
  
  String deployments = null;
  
  String issues = null;
  
  String singleFile = null;

  AppInstallationsInstallationIdAccessTokensPermissions({
    this.contents,
    this.defNotARepo,
    this.deployments,
    this.issues,
    this.singleFile,
  });

  @override
  String toString() {
    return 'AppInstallationsInstallationIdAccessTokensPermissions[contents=$contents, defNotARepo=$defNotARepo, deployments=$deployments, issues=$issues, singleFile=$singleFile, ]';
  }

  AppInstallationsInstallationIdAccessTokensPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    contents = json['contents'];
    defNotARepo = json['def_not_a_repo'];
    deployments = json['deployments'];
    issues = json['issues'];
    singleFile = json['single_file'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (contents != null)
      json['contents'] = contents;
    if (defNotARepo != null)
      json['def_not_a_repo'] = defNotARepo;
    if (deployments != null)
      json['deployments'] = deployments;
    if (issues != null)
      json['issues'] = issues;
    if (singleFile != null)
      json['single_file'] = singleFile;
    return json;
  }

  static List<AppInstallationsInstallationIdAccessTokensPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<AppInstallationsInstallationIdAccessTokensPermissions>() : json.map((value) => AppInstallationsInstallationIdAccessTokensPermissions.fromJson(value)).toList();
  }

  static Map<String, AppInstallationsInstallationIdAccessTokensPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, AppInstallationsInstallationIdAccessTokensPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = AppInstallationsInstallationIdAccessTokensPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of AppInstallationsInstallationIdAccessTokensPermissions-objects as value to a dart map
  static Map<String, List<AppInstallationsInstallationIdAccessTokensPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<AppInstallationsInstallationIdAccessTokensPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = AppInstallationsInstallationIdAccessTokensPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

