part of openapi.api;

class ProjectCard {
  /* Whether or not the card is archived */
  bool archived = null;
  
  String columnUrl = null;
  
  String contentUrl = null;
  
  DateTime createdAt = null;
  
  SimpleUser creator = null;
  /* The project card's ID */
  int id = null;
  
  String nodeId = null;
  
  String note = null;
  
  String projectUrl = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  ProjectCard({
    this.archived,
    this.columnUrl,
    this.contentUrl,
    this.createdAt,
    this.creator,
    this.id,
    this.nodeId,
    this.note,
    this.projectUrl,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'ProjectCard[archived=$archived, columnUrl=$columnUrl, contentUrl=$contentUrl, createdAt=$createdAt, creator=$creator, id=$id, nodeId=$nodeId, note=$note, projectUrl=$projectUrl, updatedAt=$updatedAt, url=$url, ]';
  }

  ProjectCard.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    archived = json['archived'];
    columnUrl = json['column_url'];
    contentUrl = json['content_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    creator = (json['creator'] == null) ?
      null :
      SimpleUser.fromJson(json['creator']);
    id = json['id'];
    nodeId = json['node_id'];
    note = json['note'];
    projectUrl = json['project_url'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (archived != null)
      json['archived'] = archived;
    if (columnUrl != null)
      json['column_url'] = columnUrl;
    if (contentUrl != null)
      json['content_url'] = contentUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['creator'] = creator;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['note'] = note;
    if (projectUrl != null)
      json['project_url'] = projectUrl;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ProjectCard> listFromJson(List<dynamic> json) {
    return json == null ? List<ProjectCard>() : json.map((value) => ProjectCard.fromJson(value)).toList();
  }

  static Map<String, ProjectCard> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ProjectCard>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ProjectCard.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProjectCard-objects as value to a dart map
  static Map<String, List<ProjectCard>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ProjectCard>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ProjectCard.listFromJson(value);
       });
     }
     return map;
  }
}

