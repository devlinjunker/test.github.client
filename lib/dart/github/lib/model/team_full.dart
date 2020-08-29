part of openapi.api;

class TeamFull {
  
  DateTime createdAt = null;
  
  String description = null;
  
  String htmlUrl = null;
  /* Unique identifier of the team */
  int id = null;
  /* Distinguished Name (DN) that team maps to within LDAP environment */
  String ldapDn = null;
  
  int membersCount = null;
  
  String membersUrl = null;
  /* Name of the team */
  String name = null;
  
  String nodeId = null;
  
  Organization organization = null;
  
  TeamSimple parent = null;
  /* Permission that the team will have for its repositories */
  String permission = null;
  /* The level of privacy this team should have */
  String privacy = null;
  //enum privacyEnum {  closed,  secret,  };{
  
  int reposCount = null;
  
  String repositoriesUrl = null;
  
  String slug = null;
  
  DateTime updatedAt = null;
  /* URL for the team */
  String url = null;

  TeamFull({
    this.createdAt,
    this.description,
    this.htmlUrl,
    this.id,
    this.ldapDn,
    this.membersCount,
    this.membersUrl,
    this.name,
    this.nodeId,
    this.organization,
    this.parent,
    this.permission,
    this.privacy,
    this.reposCount,
    this.repositoriesUrl,
    this.slug,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'TeamFull[createdAt=$createdAt, description=$description, htmlUrl=$htmlUrl, id=$id, ldapDn=$ldapDn, membersCount=$membersCount, membersUrl=$membersUrl, name=$name, nodeId=$nodeId, organization=$organization, parent=$parent, permission=$permission, privacy=$privacy, reposCount=$reposCount, repositoriesUrl=$repositoriesUrl, slug=$slug, updatedAt=$updatedAt, url=$url, ]';
  }

  TeamFull.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    description = json['description'];
    htmlUrl = json['html_url'];
    id = json['id'];
    ldapDn = json['ldap_dn'];
    membersCount = json['members_count'];
    membersUrl = json['members_url'];
    name = json['name'];
    nodeId = json['node_id'];
    organization = (json['organization'] == null) ?
      null :
      Organization.fromJson(json['organization']);
    parent = (json['parent'] == null) ?
      null :
      TeamSimple.fromJson(json['parent']);
    permission = json['permission'];
    privacy = json['privacy'];
    reposCount = json['repos_count'];
    repositoriesUrl = json['repositories_url'];
    slug = json['slug'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['description'] = description;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (ldapDn != null)
      json['ldap_dn'] = ldapDn;
    if (membersCount != null)
      json['members_count'] = membersCount;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (organization != null)
      json['organization'] = organization;
      json['parent'] = parent;
    if (permission != null)
      json['permission'] = permission;
    if (privacy != null)
      json['privacy'] = privacy;
    if (reposCount != null)
      json['repos_count'] = reposCount;
    if (repositoriesUrl != null)
      json['repositories_url'] = repositoriesUrl;
    if (slug != null)
      json['slug'] = slug;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<TeamFull> listFromJson(List<dynamic> json) {
    return json == null ? List<TeamFull>() : json.map((value) => TeamFull.fromJson(value)).toList();
  }

  static Map<String, TeamFull> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TeamFull>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TeamFull.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TeamFull-objects as value to a dart map
  static Map<String, List<TeamFull>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TeamFull>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TeamFull.listFromJson(value);
       });
     }
     return map;
  }
}

