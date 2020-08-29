part of openapi.api;

class Team {
  
  String description = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String membersUrl = null;
  
  String name = null;
  
  String nodeId = null;
  
  TeamSimple parent = null;
  
  String permission = null;
  
  String privacy = null;
  
  String repositoriesUrl = null;
  
  String slug = null;
  
  String url = null;

  Team({
    this.description,
    this.htmlUrl,
    this.id,
    this.membersUrl,
    this.name,
    this.nodeId,
    this.parent,
    this.permission,
    this.privacy,
    this.repositoriesUrl,
    this.slug,
    this.url,
  });

  @override
  String toString() {
    return 'Team[description=$description, htmlUrl=$htmlUrl, id=$id, membersUrl=$membersUrl, name=$name, nodeId=$nodeId, parent=$parent, permission=$permission, privacy=$privacy, repositoriesUrl=$repositoriesUrl, slug=$slug, url=$url, ]';
  }

  Team.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    htmlUrl = json['html_url'];
    id = json['id'];
    membersUrl = json['members_url'];
    name = json['name'];
    nodeId = json['node_id'];
    parent = (json['parent'] == null) ?
      null :
      TeamSimple.fromJson(json['parent']);
    permission = json['permission'];
    privacy = json['privacy'];
    repositoriesUrl = json['repositories_url'];
    slug = json['slug'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['description'] = description;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['parent'] = parent;
    if (permission != null)
      json['permission'] = permission;
    if (privacy != null)
      json['privacy'] = privacy;
    if (repositoriesUrl != null)
      json['repositories_url'] = repositoriesUrl;
    if (slug != null)
      json['slug'] = slug;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Team> listFromJson(List<dynamic> json) {
    return json == null ? List<Team>() : json.map((value) => Team.fromJson(value)).toList();
  }

  static Map<String, Team> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Team>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Team.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Team-objects as value to a dart map
  static Map<String, List<Team>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Team>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Team.listFromJson(value);
       });
     }
     return map;
  }
}

