part of openapi.api;

class Status {
  
  String avatarUrl = null;
  
  String context = null;
  
  String createdAt = null;
  
  SimpleUser creator = null;
  
  String description = null;
  
  int id = null;
  
  String nodeId = null;
  
  String state = null;
  
  String targetUrl = null;
  
  String updatedAt = null;
  
  String url = null;

  Status({
    this.avatarUrl,
    this.context,
    this.createdAt,
    this.creator,
    this.description,
    this.id,
    this.nodeId,
    this.state,
    this.targetUrl,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Status[avatarUrl=$avatarUrl, context=$context, createdAt=$createdAt, creator=$creator, description=$description, id=$id, nodeId=$nodeId, state=$state, targetUrl=$targetUrl, updatedAt=$updatedAt, url=$url, ]';
  }

  Status.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    context = json['context'];
    createdAt = json['created_at'];
    creator = (json['creator'] == null) ?
      null :
      SimpleUser.fromJson(json['creator']);
    description = json['description'];
    id = json['id'];
    nodeId = json['node_id'];
    state = json['state'];
    targetUrl = json['target_url'];
    updatedAt = json['updated_at'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['avatar_url'] = avatarUrl;
    if (context != null)
      json['context'] = context;
    if (createdAt != null)
      json['created_at'] = createdAt;
      json['creator'] = creator;
    if (description != null)
      json['description'] = description;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (state != null)
      json['state'] = state;
    if (targetUrl != null)
      json['target_url'] = targetUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Status> listFromJson(List<dynamic> json) {
    return json == null ? List<Status>() : json.map((value) => Status.fromJson(value)).toList();
  }

  static Map<String, Status> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Status>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Status.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Status-objects as value to a dart map
  static Map<String, List<Status>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Status>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Status.listFromJson(value);
       });
     }
     return map;
  }
}

