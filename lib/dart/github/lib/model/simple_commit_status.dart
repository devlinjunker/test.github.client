part of openapi.api;

class SimpleCommitStatus {
  
  String avatarUrl = null;
  
  String context = null;
  
  DateTime createdAt = null;
  
  String description = null;
  
  int id = null;
  
  String nodeId = null;
  
  bool required_ = null;
  
  String state = null;
  
  String targetUrl = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  SimpleCommitStatus({
    this.avatarUrl,
    this.context,
    this.createdAt,
    this.description,
    this.id,
    this.nodeId,
    this.required_,
    this.state,
    this.targetUrl,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'SimpleCommitStatus[avatarUrl=$avatarUrl, context=$context, createdAt=$createdAt, description=$description, id=$id, nodeId=$nodeId, required_=$required_, state=$state, targetUrl=$targetUrl, updatedAt=$updatedAt, url=$url, ]';
  }

  SimpleCommitStatus.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    context = json['context'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    description = json['description'];
    id = json['id'];
    nodeId = json['node_id'];
    required_ = json['required'];
    state = json['state'];
    targetUrl = json['target_url'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['avatar_url'] = avatarUrl;
    if (context != null)
      json['context'] = context;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['description'] = description;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['required'] = required_;
    if (state != null)
      json['state'] = state;
    if (targetUrl != null)
      json['target_url'] = targetUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<SimpleCommitStatus> listFromJson(List<dynamic> json) {
    return json == null ? List<SimpleCommitStatus>() : json.map((value) => SimpleCommitStatus.fromJson(value)).toList();
  }

  static Map<String, SimpleCommitStatus> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, SimpleCommitStatus>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = SimpleCommitStatus.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of SimpleCommitStatus-objects as value to a dart map
  static Map<String, List<SimpleCommitStatus>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<SimpleCommitStatus>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = SimpleCommitStatus.listFromJson(value);
       });
     }
     return map;
  }
}

