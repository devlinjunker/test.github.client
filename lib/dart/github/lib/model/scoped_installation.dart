part of openapi.api;

class ScopedInstallation {
  
  SimpleUser account = null;
  
  Object permissions = null;
  
  String repositoriesUrl = null;
  /* Describe whether all repositories have been selected or there's a selection involved */
  String repositorySelection = null;
  //enum repositorySelectionEnum {  all,  selected,  };{
  
  String singleFileName = null;

  ScopedInstallation({
    this.account,
    this.permissions,
    this.repositoriesUrl,
    this.repositorySelection,
    this.singleFileName,
  });

  @override
  String toString() {
    return 'ScopedInstallation[account=$account, permissions=$permissions, repositoriesUrl=$repositoriesUrl, repositorySelection=$repositorySelection, singleFileName=$singleFileName, ]';
  }

  ScopedInstallation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    account = (json['account'] == null) ?
      null :
      SimpleUser.fromJson(json['account']);
    permissions = json['permissions'];
    repositoriesUrl = json['repositories_url'];
    repositorySelection = json['repository_selection'];
    singleFileName = json['single_file_name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['account'] = account;
    if (permissions != null)
      json['permissions'] = permissions;
    if (repositoriesUrl != null)
      json['repositories_url'] = repositoriesUrl;
    if (repositorySelection != null)
      json['repository_selection'] = repositorySelection;
      json['single_file_name'] = singleFileName;
    return json;
  }

  static List<ScopedInstallation> listFromJson(List<dynamic> json) {
    return json == null ? List<ScopedInstallation>() : json.map((value) => ScopedInstallation.fromJson(value)).toList();
  }

  static Map<String, ScopedInstallation> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ScopedInstallation>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ScopedInstallation.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ScopedInstallation-objects as value to a dart map
  static Map<String, List<ScopedInstallation>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ScopedInstallation>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ScopedInstallation.listFromJson(value);
       });
     }
     return map;
  }
}

