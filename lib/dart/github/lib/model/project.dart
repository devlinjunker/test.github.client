part of openapi.api;

class Project {
  /* Body of the project */
  String body = null;
  
  String cardsUrl = null;
  
  String columnsUrl = null;
  
  DateTime createdAt = null;
  
  SimpleUser creator = null;
  
  String htmlUrl = null;
  
  int id = null;
  /* Name of the project */
  String name = null;
  
  String nodeId = null;
  
  int number = null;
  /* The baseline permission that all organization members have on this project */
  String organizationPermission = null;
  //enum organizationPermissionEnum {  read,  write,  admin,  none,  };{
  
  String ownerUrl = null;
  
  ProjectPermissions permissions = null;
  /* Whether or not this project can be seen by everyone. */
  bool private = null;
  /* State of the project; either 'open' or 'closed' */
  String state = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  Project({
    this.body,
    this.cardsUrl,
    this.columnsUrl,
    this.createdAt,
    this.creator,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.number,
    this.organizationPermission,
    this.ownerUrl,
    this.permissions,
    this.private,
    this.state,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Project[body=$body, cardsUrl=$cardsUrl, columnsUrl=$columnsUrl, createdAt=$createdAt, creator=$creator, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, number=$number, organizationPermission=$organizationPermission, ownerUrl=$ownerUrl, permissions=$permissions, private=$private, state=$state, updatedAt=$updatedAt, url=$url, ]';
  }

  Project.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    cardsUrl = json['cards_url'];
    columnsUrl = json['columns_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    creator = (json['creator'] == null) ?
      null :
      SimpleUser.fromJson(json['creator']);
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    number = json['number'];
    organizationPermission = json['organization_permission'];
    ownerUrl = json['owner_url'];
    permissions = (json['permissions'] == null) ?
      null :
      ProjectPermissions.fromJson(json['permissions']);
    private = json['private'];
    state = json['state'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['body'] = body;
    if (cardsUrl != null)
      json['cards_url'] = cardsUrl;
    if (columnsUrl != null)
      json['columns_url'] = columnsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['creator'] = creator;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (number != null)
      json['number'] = number;
    if (organizationPermission != null)
      json['organization_permission'] = organizationPermission;
    if (ownerUrl != null)
      json['owner_url'] = ownerUrl;
    if (permissions != null)
      json['permissions'] = permissions;
    if (private != null)
      json['private'] = private;
    if (state != null)
      json['state'] = state;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Project> listFromJson(List<dynamic> json) {
    return json == null ? List<Project>() : json.map((value) => Project.fromJson(value)).toList();
  }

  static Map<String, Project> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Project>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Project.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Project-objects as value to a dart map
  static Map<String, List<Project>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Project>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Project.listFromJson(value);
       });
     }
     return map;
  }
}

