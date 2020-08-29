part of openapi.api;

class InstallationPermissions {
  
  String checks = null;
  
  String contents = null;
  
  String deployments = null;
  
  String issues = null;
  
  String metadata = null;
  
  String organizationAdministration = null;
  
  String pullRequests = null;
  
  String statuses = null;

  InstallationPermissions({
    this.checks,
    this.contents,
    this.deployments,
    this.issues,
    this.metadata,
    this.organizationAdministration,
    this.pullRequests,
    this.statuses,
  });

  @override
  String toString() {
    return 'InstallationPermissions[checks=$checks, contents=$contents, deployments=$deployments, issues=$issues, metadata=$metadata, organizationAdministration=$organizationAdministration, pullRequests=$pullRequests, statuses=$statuses, ]';
  }

  InstallationPermissions.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    checks = json['checks'];
    contents = json['contents'];
    deployments = json['deployments'];
    issues = json['issues'];
    metadata = json['metadata'];
    organizationAdministration = json['organization_administration'];
    pullRequests = json['pull_requests'];
    statuses = json['statuses'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (checks != null)
      json['checks'] = checks;
    if (contents != null)
      json['contents'] = contents;
    if (deployments != null)
      json['deployments'] = deployments;
    if (issues != null)
      json['issues'] = issues;
    if (metadata != null)
      json['metadata'] = metadata;
    if (organizationAdministration != null)
      json['organization_administration'] = organizationAdministration;
    if (pullRequests != null)
      json['pull_requests'] = pullRequests;
    if (statuses != null)
      json['statuses'] = statuses;
    return json;
  }

  static List<InstallationPermissions> listFromJson(List<dynamic> json) {
    return json == null ? List<InstallationPermissions>() : json.map((value) => InstallationPermissions.fromJson(value)).toList();
  }

  static Map<String, InstallationPermissions> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InstallationPermissions>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InstallationPermissions.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InstallationPermissions-objects as value to a dart map
  static Map<String, List<InstallationPermissions>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InstallationPermissions>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InstallationPermissions.listFromJson(value);
       });
     }
     return map;
  }
}

