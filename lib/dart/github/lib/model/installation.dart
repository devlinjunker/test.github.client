part of openapi.api;

class Installation {
  
  String accessTokensUrl = null;
  
  AnyOf<simpleUser,enterprise> account = null;
  
  int appId = null;
  
  String appSlug = null;
  
  String contactEmail = null;
  
  DateTime createdAt = null;
  
  List<String> events = [];
  
  String htmlUrl = null;
  /* The ID of the installation. */
  int id = null;
  
  InstallationPermissions permissions = null;
  
  String repositoriesUrl = null;
  /* Describe whether all repositories have been selected or there's a selection involved */
  String repositorySelection = null;
  //enum repositorySelectionEnum {  all,  selected,  };{
  
  String singleFileName = null;
  
  DateTime suspendedAt = null;
  
  SimpleUser suspendedBy = null;
  /* The ID of the user or organization this token is being scoped to. */
  int targetId = null;
  
  String targetType = null;
  
  DateTime updatedAt = null;

  Installation({
    this.accessTokensUrl,
    this.account,
    this.appId,
    this.appSlug,
    this.contactEmail,
    this.createdAt,
    this.events,
    this.htmlUrl,
    this.id,
    this.permissions,
    this.repositoriesUrl,
    this.repositorySelection,
    this.singleFileName,
    this.suspendedAt,
    this.suspendedBy,
    this.targetId,
    this.targetType,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'Installation[accessTokensUrl=$accessTokensUrl, account=$account, appId=$appId, appSlug=$appSlug, contactEmail=$contactEmail, createdAt=$createdAt, events=$events, htmlUrl=$htmlUrl, id=$id, permissions=$permissions, repositoriesUrl=$repositoriesUrl, repositorySelection=$repositorySelection, singleFileName=$singleFileName, suspendedAt=$suspendedAt, suspendedBy=$suspendedBy, targetId=$targetId, targetType=$targetType, updatedAt=$updatedAt, ]';
  }

  Installation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    accessTokensUrl = json['access_tokens_url'];
    account = (json['account'] == null) ?
      null :
      AnyOf&lt;simpleUser,enterprise&gt;.fromJson(json['account']);
    appId = json['app_id'];
    appSlug = json['app_slug'];
    contactEmail = json['contact_email'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    htmlUrl = json['html_url'];
    id = json['id'];
    permissions = (json['permissions'] == null) ?
      null :
      InstallationPermissions.fromJson(json['permissions']);
    repositoriesUrl = json['repositories_url'];
    repositorySelection = json['repository_selection'];
    singleFileName = json['single_file_name'];
    suspendedAt = (json['suspended_at'] == null) ?
      null :
      DateTime.parse(json['suspended_at']);
    suspendedBy = (json['suspended_by'] == null) ?
      null :
      SimpleUser.fromJson(json['suspended_by']);
    targetId = json['target_id'];
    targetType = json['target_type'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (accessTokensUrl != null)
      json['access_tokens_url'] = accessTokensUrl;
      json['account'] = account;
    if (appId != null)
      json['app_id'] = appId;
    if (appSlug != null)
      json['app_slug'] = appSlug;
      json['contact_email'] = contactEmail;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (events != null)
      json['events'] = events;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (permissions != null)
      json['permissions'] = permissions;
    if (repositoriesUrl != null)
      json['repositories_url'] = repositoriesUrl;
    if (repositorySelection != null)
      json['repository_selection'] = repositorySelection;
      json['single_file_name'] = singleFileName;
      json['suspended_at'] = suspendedAt == null ? null : suspendedAt.toUtc().toIso8601String();
      json['suspended_by'] = suspendedBy;
    if (targetId != null)
      json['target_id'] = targetId;
    if (targetType != null)
      json['target_type'] = targetType;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    return json;
  }

  static List<Installation> listFromJson(List<dynamic> json) {
    return json == null ? List<Installation>() : json.map((value) => Installation.fromJson(value)).toList();
  }

  static Map<String, Installation> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Installation>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Installation.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Installation-objects as value to a dart map
  static Map<String, List<Installation>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Installation>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Installation.listFromJson(value);
       });
     }
     return map;
  }
}

