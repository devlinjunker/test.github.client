part of openapi.api;

class Migration {
  
  String archiveUrl = null;
  
  DateTime createdAt = null;
  
  List<AnyType> exclude = [];
  
  bool excludeAttachments = null;
  
  String guid = null;
  
  int id = null;
  
  bool lockRepositories = null;
  
  String nodeId = null;
  
  SimpleUser owner = null;
  
  List<Repository> repositories = [];
  
  String state = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  Migration({
    this.archiveUrl,
    this.createdAt,
    this.exclude,
    this.excludeAttachments,
    this.guid,
    this.id,
    this.lockRepositories,
    this.nodeId,
    this.owner,
    this.repositories,
    this.state,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Migration[archiveUrl=$archiveUrl, createdAt=$createdAt, exclude=$exclude, excludeAttachments=$excludeAttachments, guid=$guid, id=$id, lockRepositories=$lockRepositories, nodeId=$nodeId, owner=$owner, repositories=$repositories, state=$state, updatedAt=$updatedAt, url=$url, ]';
  }

  Migration.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    archiveUrl = json['archive_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    exclude = (json['exclude'] == null) ?
      null :
      AnyType.listFromJson(json['exclude']);
    excludeAttachments = json['exclude_attachments'];
    guid = json['guid'];
    id = json['id'];
    lockRepositories = json['lock_repositories'];
    nodeId = json['node_id'];
    owner = (json['owner'] == null) ?
      null :
      SimpleUser.fromJson(json['owner']);
    repositories = (json['repositories'] == null) ?
      null :
      Repository.listFromJson(json['repositories']);
    state = json['state'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (archiveUrl != null)
      json['archive_url'] = archiveUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (exclude != null)
      json['exclude'] = exclude;
    if (excludeAttachments != null)
      json['exclude_attachments'] = excludeAttachments;
    if (guid != null)
      json['guid'] = guid;
    if (id != null)
      json['id'] = id;
    if (lockRepositories != null)
      json['lock_repositories'] = lockRepositories;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['owner'] = owner;
    if (repositories != null)
      json['repositories'] = repositories;
    if (state != null)
      json['state'] = state;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Migration> listFromJson(List<dynamic> json) {
    return json == null ? List<Migration>() : json.map((value) => Migration.fromJson(value)).toList();
  }

  static Map<String, Migration> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Migration>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Migration.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Migration-objects as value to a dart map
  static Map<String, List<Migration>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Migration>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Migration.listFromJson(value);
       });
     }
     return map;
  }
}

