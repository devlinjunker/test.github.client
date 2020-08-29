part of openapi.api;

class RepositoryInvitation {
  
  DateTime createdAt = null;
  
  String htmlUrl = null;
  /* Unique identifier of the repository invitation. */
  int id = null;
  
  SimpleUser invitee = null;
  
  SimpleUser inviter = null;
  
  String nodeId = null;
  /* The permission associated with the invitation. */
  String permissions = null;
  //enum permissionsEnum {  read,  write,  admin,  };{
  
  MinimalRepository repository = null;
  /* URL for the repository invitation */
  String url = null;

  RepositoryInvitation({
    this.createdAt,
    this.htmlUrl,
    this.id,
    this.invitee,
    this.inviter,
    this.nodeId,
    this.permissions,
    this.repository,
    this.url,
  });

  @override
  String toString() {
    return 'RepositoryInvitation[createdAt=$createdAt, htmlUrl=$htmlUrl, id=$id, invitee=$invitee, inviter=$inviter, nodeId=$nodeId, permissions=$permissions, repository=$repository, url=$url, ]';
  }

  RepositoryInvitation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    htmlUrl = json['html_url'];
    id = json['id'];
    invitee = (json['invitee'] == null) ?
      null :
      SimpleUser.fromJson(json['invitee']);
    inviter = (json['inviter'] == null) ?
      null :
      SimpleUser.fromJson(json['inviter']);
    nodeId = json['node_id'];
    permissions = json['permissions'];
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
      json['invitee'] = invitee;
      json['inviter'] = inviter;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (permissions != null)
      json['permissions'] = permissions;
    if (repository != null)
      json['repository'] = repository;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<RepositoryInvitation> listFromJson(List<dynamic> json) {
    return json == null ? List<RepositoryInvitation>() : json.map((value) => RepositoryInvitation.fromJson(value)).toList();
  }

  static Map<String, RepositoryInvitation> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RepositoryInvitation>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RepositoryInvitation.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RepositoryInvitation-objects as value to a dart map
  static Map<String, List<RepositoryInvitation>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RepositoryInvitation>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RepositoryInvitation.listFromJson(value);
       });
     }
     return map;
  }
}

