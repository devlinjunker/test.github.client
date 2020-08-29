part of openapi.api;

class IssueEventProjectCard {
  
  String columnName = null;
  
  int id = null;
  
  String previousColumnName = null;
  
  int projectId = null;
  
  String projectUrl = null;
  
  String url = null;

  IssueEventProjectCard({
    this.columnName,
    this.id,
    this.previousColumnName,
    this.projectId,
    this.projectUrl,
    this.url,
  });

  @override
  String toString() {
    return 'IssueEventProjectCard[columnName=$columnName, id=$id, previousColumnName=$previousColumnName, projectId=$projectId, projectUrl=$projectUrl, url=$url, ]';
  }

  IssueEventProjectCard.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    columnName = json['column_name'];
    id = json['id'];
    previousColumnName = json['previous_column_name'];
    projectId = json['project_id'];
    projectUrl = json['project_url'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (columnName != null)
      json['column_name'] = columnName;
    if (id != null)
      json['id'] = id;
    if (previousColumnName != null)
      json['previous_column_name'] = previousColumnName;
    if (projectId != null)
      json['project_id'] = projectId;
    if (projectUrl != null)
      json['project_url'] = projectUrl;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<IssueEventProjectCard> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueEventProjectCard>() : json.map((value) => IssueEventProjectCard.fromJson(value)).toList();
  }

  static Map<String, IssueEventProjectCard> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueEventProjectCard>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueEventProjectCard.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueEventProjectCard-objects as value to a dart map
  static Map<String, List<IssueEventProjectCard>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueEventProjectCard>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueEventProjectCard.listFromJson(value);
       });
     }
     return map;
  }
}

