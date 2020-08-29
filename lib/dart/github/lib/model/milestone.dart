part of openapi.api;

class Milestone {
  
  DateTime closedAt = null;
  
  int closedIssues = null;
  
  DateTime createdAt = null;
  
  SimpleUser creator = null;
  
  String description = null;
  
  DateTime dueOn = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String labelsUrl = null;
  
  String nodeId = null;
  /* The number of the milestone. */
  int number = null;
  
  int openIssues = null;
  /* The state of the milestone. */
  String state = "open";
  //enum stateEnum {  open,  closed,  };{
  /* The title of the milestone. */
  String title = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  Milestone({
    this.closedAt,
    this.closedIssues,
    this.createdAt,
    this.creator,
    this.description,
    this.dueOn,
    this.htmlUrl,
    this.id,
    this.labelsUrl,
    this.nodeId,
    this.number,
    this.openIssues,
    this.state,
    this.title,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Milestone[closedAt=$closedAt, closedIssues=$closedIssues, createdAt=$createdAt, creator=$creator, description=$description, dueOn=$dueOn, htmlUrl=$htmlUrl, id=$id, labelsUrl=$labelsUrl, nodeId=$nodeId, number=$number, openIssues=$openIssues, state=$state, title=$title, updatedAt=$updatedAt, url=$url, ]';
  }

  Milestone.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    closedAt = (json['closed_at'] == null) ?
      null :
      DateTime.parse(json['closed_at']);
    closedIssues = json['closed_issues'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    creator = (json['creator'] == null) ?
      null :
      SimpleUser.fromJson(json['creator']);
    description = json['description'];
    dueOn = (json['due_on'] == null) ?
      null :
      DateTime.parse(json['due_on']);
    htmlUrl = json['html_url'];
    id = json['id'];
    labelsUrl = json['labels_url'];
    nodeId = json['node_id'];
    number = json['number'];
    openIssues = json['open_issues'];
    state = json['state'];
    title = json['title'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['closed_at'] = closedAt == null ? null : closedAt.toUtc().toIso8601String();
    if (closedIssues != null)
      json['closed_issues'] = closedIssues;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['creator'] = creator;
      json['description'] = description;
      json['due_on'] = dueOn == null ? null : dueOn.toUtc().toIso8601String();
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (labelsUrl != null)
      json['labels_url'] = labelsUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
    if (openIssues != null)
      json['open_issues'] = openIssues;
    if (state != null)
      json['state'] = state;
    if (title != null)
      json['title'] = title;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Milestone> listFromJson(List<dynamic> json) {
    return json == null ? List<Milestone>() : json.map((value) => Milestone.fromJson(value)).toList();
  }

  static Map<String, Milestone> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Milestone>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Milestone.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Milestone-objects as value to a dart map
  static Map<String, List<Milestone>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Milestone>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Milestone.listFromJson(value);
       });
     }
     return map;
  }
}

