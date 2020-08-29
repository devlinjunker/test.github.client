part of openapi.api;

class Workflow {
  
  String badgeUrl = null;
  
  DateTime createdAt = null;
  
  DateTime deletedAt = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  
  String path = null;
  
  String state = null;
  //enum stateEnum {  active,  deleted,  };{
  
  DateTime updatedAt = null;
  
  String url = null;

  Workflow({
    this.badgeUrl,
    this.createdAt,
    this.deletedAt,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.path,
    this.state,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Workflow[badgeUrl=$badgeUrl, createdAt=$createdAt, deletedAt=$deletedAt, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, path=$path, state=$state, updatedAt=$updatedAt, url=$url, ]';
  }

  Workflow.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    badgeUrl = json['badge_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    deletedAt = (json['deleted_at'] == null) ?
      null :
      DateTime.parse(json['deleted_at']);
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    path = json['path'];
    state = json['state'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (badgeUrl != null)
      json['badge_url'] = badgeUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (deletedAt != null)
      json['deleted_at'] = deletedAt == null ? null : deletedAt.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (path != null)
      json['path'] = path;
    if (state != null)
      json['state'] = state;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Workflow> listFromJson(List<dynamic> json) {
    return json == null ? List<Workflow>() : json.map((value) => Workflow.fromJson(value)).toList();
  }

  static Map<String, Workflow> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Workflow>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Workflow.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Workflow-objects as value to a dart map
  static Map<String, List<Workflow>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Workflow>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Workflow.listFromJson(value);
       });
     }
     return map;
  }
}

