part of openapi.api;

class ProjectColumn {
  
  String cardsUrl = null;
  
  DateTime createdAt = null;
  /* The unique identifier of the project column */
  int id = null;
  /* Name of the project column */
  String name = null;
  
  String nodeId = null;
  
  String projectUrl = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  ProjectColumn({
    this.cardsUrl,
    this.createdAt,
    this.id,
    this.name,
    this.nodeId,
    this.projectUrl,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'ProjectColumn[cardsUrl=$cardsUrl, createdAt=$createdAt, id=$id, name=$name, nodeId=$nodeId, projectUrl=$projectUrl, updatedAt=$updatedAt, url=$url, ]';
  }

  ProjectColumn.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    cardsUrl = json['cards_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    projectUrl = json['project_url'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (cardsUrl != null)
      json['cards_url'] = cardsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (projectUrl != null)
      json['project_url'] = projectUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ProjectColumn> listFromJson(List<dynamic> json) {
    return json == null ? List<ProjectColumn>() : json.map((value) => ProjectColumn.fromJson(value)).toList();
  }

  static Map<String, ProjectColumn> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProjectColumn>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProjectColumn.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProjectColumn-objects as value to a dart map
  static Map<String, List<ProjectColumn>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProjectColumn>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProjectColumn.listFromJson(value);
       });
     }
     return map;
  }
}

