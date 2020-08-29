part of openapi.api;

class AuthenticationToken {
  /* The time this token expires */
  DateTime expiresAt = null;
  
  Object permissions = null;
  /* The repositories this token has access to */
  List<Repository> repositories = [];
  /* Describe whether all repositories have been selected or there's a selection involved */
  String repositorySelection = null;
  //enum repositorySelectionEnum {  all,  selected,  };{
  
  String singleFile = null;
  /* The token used for authentication */
  String token = null;

  AuthenticationToken({
    this.expiresAt,
    this.permissions,
    this.repositories,
    this.repositorySelection,
    this.singleFile,
    this.token,
  });

  @override
  String toString() {
    return 'AuthenticationToken[expiresAt=$expiresAt, permissions=$permissions, repositories=$repositories, repositorySelection=$repositorySelection, singleFile=$singleFile, token=$token, ]';
  }

  AuthenticationToken.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    expiresAt = (json['expires_at'] == null) ?
      null :
      DateTime.parse(json['expires_at']);
    permissions = json['permissions'];
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
      json['expires_at'] = expiresAt == null ? null : expiresAt.toUtc().toIso8601String();
    if (permissions != null)
      json['permissions'] = permissions;
    if (repositories != null)
      json['repositories'] = repositories;
    if (repositorySelection != null)
      json['repository_selection'] = repositorySelection;
      json['single_file'] = singleFile;
    if (token != null)
      json['token'] = token;
    return json;
  }

  static List<AuthenticationToken> listFromJson(List<dynamic> json) {
    return json == null ? List<AuthenticationToken>() : json.map((value) => AuthenticationToken.fromJson(value)).toList();
  }

  static Map<String, AuthenticationToken> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, AuthenticationToken>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = AuthenticationToken.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of AuthenticationToken-objects as value to a dart map
  static Map<String, List<AuthenticationToken>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<AuthenticationToken>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = AuthenticationToken.listFromJson(value);
       });
     }
     return map;
  }
}

