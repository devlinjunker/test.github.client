part of openapi.api;

class TeamSimple {
  /* Description of the team */
  String description = null;
  
  String htmlUrl = null;
  /* Unique identifier of the team */
  int id = null;
  /* Distinguished Name (DN) that team maps to within LDAP environment */
  String ldapDn = null;
  
  String membersUrl = null;
  /* Name of the team */
  String name = null;
  
  String nodeId = null;
  /* Permission that the team will have for its repositories */
  String permission = null;
  /* The level of privacy this team should have */
  String privacy = null;
  
  String repositoriesUrl = null;
  
  String slug = null;
  /* URL for the team */
  String url = null;

  TeamSimple({
    this.description,
    this.htmlUrl,
    this.id,
    this.ldapDn,
    this.membersUrl,
    this.name,
    this.nodeId,
    this.permission,
    this.privacy,
    this.repositoriesUrl,
    this.slug,
    this.url,
  });

  @override
  String toString() {
    return 'TeamSimple[description=$description, htmlUrl=$htmlUrl, id=$id, ldapDn=$ldapDn, membersUrl=$membersUrl, name=$name, nodeId=$nodeId, permission=$permission, privacy=$privacy, repositoriesUrl=$repositoriesUrl, slug=$slug, url=$url, ]';
  }

  TeamSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    htmlUrl = json['html_url'];
    id = json['id'];
    ldapDn = json['ldap_dn'];
    membersUrl = json['members_url'];
    name = json['name'];
    nodeId = json['node_id'];
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
    if (ldapDn != null)
      json['ldap_dn'] = ldapDn;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
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

  static List<TeamSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamSimple>() : json.map((value) => TeamSimple.fromJson(value)).toList();
  }

  static Map<String, TeamSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamSimple-objects as value to a dart map
  static Map<String, List<TeamSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamSimple.listFromJson(value);
       });
     }
     return map;
  }
}

