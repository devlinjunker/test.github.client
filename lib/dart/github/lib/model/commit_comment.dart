part of openapi.api;

class CommitComment {
  
  String authorAssociation = null;
  
  String body = null;
  
  String commitId = null;
  
  DateTime createdAt = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  int line = null;
  
  String nodeId = null;
  
  String path = null;
  
  int position = null;
  
  ReactionRollup reactions = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  CommitComment({
    this.authorAssociation,
    this.body,
    this.commitId,
    this.createdAt,
    this.htmlUrl,
    this.id,
    this.line,
    this.nodeId,
    this.path,
    this.position,
    this.reactions,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'CommitComment[authorAssociation=$authorAssociation, body=$body, commitId=$commitId, createdAt=$createdAt, htmlUrl=$htmlUrl, id=$id, line=$line, nodeId=$nodeId, path=$path, position=$position, reactions=$reactions, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  CommitComment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    authorAssociation = json['author_association'];
    body = json['body'];
    commitId = json['commit_id'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    htmlUrl = json['html_url'];
    id = json['id'];
    line = json['line'];
    nodeId = json['node_id'];
    path = json['path'];
    position = json['position'];
    reactions = (json['reactions'] == null) ?
      null :
      ReactionRollup.fromJson(json['reactions']);
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (authorAssociation != null)
      json['author_association'] = authorAssociation;
    if (body != null)
      json['body'] = body;
    if (commitId != null)
      json['commit_id'] = commitId;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
      json['line'] = line;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['path'] = path;
      json['position'] = position;
    if (reactions != null)
      json['reactions'] = reactions;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<CommitComment> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitComment>() : json.map((value) => CommitComment.fromJson(value)).toList();
  }

  static Map<String, CommitComment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitComment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitComment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitComment-objects as value to a dart map
  static Map<String, List<CommitComment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitComment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitComment.listFromJson(value);
       });
     }
     return map;
  }
}

