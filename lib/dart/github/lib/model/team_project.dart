part of openapi.api;

class TeamProject {
  
  String body = null;
  
  String columnsUrl = null;
  
  String createdAt = null;
  
  SimpleUser creator = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  
  int number = null;
  
  String organizationPermission = null;
  
  String ownerUrl = null;
  
  TeamProjectPermissions permissions = null;
  
  bool private = null;
  
  String state = null;
  
  String updatedAt = null;
  
  String url = null;

  TeamProject({
    this.body,
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
    return 'TeamProject[body=$body, columnsUrl=$columnsUrl, createdAt=$createdAt, creator=$creator, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, number=$number, organizationPermission=$organizationPermission, ownerUrl=$ownerUrl, permissions=$permissions, private=$private, state=$state, updatedAt=$updatedAt, url=$url, ]';
  }

  TeamProject.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    columnsUrl = json['columns_url'];
    createdAt = json['created_at'];
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
      TeamProjectPermissions.fromJson(json['permissions']);
    private = json['private'];
    state = json['state'];
    updatedAt = json['updated_at'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['body'] = body;
    if (columnsUrl != null)
      json['columns_url'] = columnsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt;
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
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<TeamProject> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamProject>() : json.map((value) => TeamProject.fromJson(value)).toList();
  }

  static Map<String, TeamProject> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamProject>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamProject.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamProject-objects as value to a dart map
  static Map<String, List<TeamProject>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamProject>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamProject.listFromJson(value);
       });
     }
     return map;
  }
}

