part of openapi.api;

class GistComment {
  
  String authorAssociation = null;
  /* The comment text. */
  String body = null;
  
  DateTime createdAt = null;
  
  int id = null;
  
  String nodeId = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  GistComment({
    this.authorAssociation,
    this.body,
    this.createdAt,
    this.id,
    this.nodeId,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'GistComment[authorAssociation=$authorAssociation, body=$body, createdAt=$createdAt, id=$id, nodeId=$nodeId, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  GistComment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    authorAssociation = json['author_association'];
    body = json['body'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    id = json['id'];
    nodeId = json['node_id'];
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
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<GistComment> listFromJson(List<dynamic> json) {
    return json == null ? List<GistComment>() : json.map((value) => GistComment.fromJson(value)).toList();
  }

  static Map<String, GistComment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistComment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistComment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistComment-objects as value to a dart map
  static Map<String, List<GistComment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistComment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistComment.listFromJson(value);
       });
     }
     return map;
  }
}

