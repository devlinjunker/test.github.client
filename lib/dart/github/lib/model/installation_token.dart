part of openapi.api;

class InstallationToken {
  
  String expiresAt = null;
  
  InstallationTokenPermissions permissions = null;
  
  List<Repository> repositories = [];
  
  String repositorySelection = null;
  //enum repositorySelectionEnum {  all,  selected,  };{
  
  String singleFile = null;
  
  String token = null;

  InstallationToken({
    this.expiresAt,
    this.permissions,
    this.repositories,
    this.repositorySelection,
    this.singleFile,
    this.token,
  });

  @override
  String toString() {
    return 'InstallationToken[expiresAt=$expiresAt, permissions=$permissions, repositories=$repositories, repositorySelection=$repositorySelection, singleFile=$singleFile, token=$token, ]';
  }

  InstallationToken.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    expiresAt = json['expires_at'];
    permissions = (json['permissions'] == null) ?
      null :
      InstallationTokenPermissions.fromJson(json['permissions']);
    repositories = (json['repositories'] == null) ?
      null :
      Repository.listFromJson(json['repositories']);
    repositorySelection = json['repository_selection'];
    singleFile = json['single_file'];
    token = json['token'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (expiresAt != null)
      json['expires_at'] = expiresAt;
    if (permissions != null)
      json['permissions'] = permissions;
    if (repositories != null)
      json['repositories'] = repositories;
    if (repositorySelection != null)
      json['repository_selection'] = repositorySelection;
    if (singleFile != null)
      json['single_file'] = singleFile;
    if (token != null)
      json['token'] = token;
    return json;
  }

  static List<InstallationToken> listFromJson(List<dynamic> json) {
    return json == null ? List<InstallationToken>() : json.map((value) => InstallationToken.fromJson(value)).toList();
  }

  static Map<String, InstallationToken> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InstallationToken>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InstallationToken.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InstallationToken-objects as value to a dart map
  static Map<String, List<InstallationToken>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InstallationToken>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InstallationToken.listFromJson(value);
       });
     }
     return map;
  }
}

