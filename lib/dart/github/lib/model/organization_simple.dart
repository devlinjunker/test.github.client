part of openapi.api;

class OrganizationSimple {
  
  String avatarUrl = null;
  
  String description = null;
  
  String eventsUrl = null;
  
  String hooksUrl = null;
  
  int id = null;
  
  String issuesUrl = null;
  
  String login = null;
  
  String membersUrl = null;
  
  String nodeId = null;
  
  String publicMembersUrl = null;
  
  String reposUrl = null;
  
  String url = null;

  OrganizationSimple({
    this.avatarUrl,
    this.description,
    this.eventsUrl,
    this.hooksUrl,
    this.id,
    this.issuesUrl,
    this.login,
    this.membersUrl,
    this.nodeId,
    this.publicMembersUrl,
    this.reposUrl,
    this.url,
  });

  @override
  String toString() {
    return 'OrganizationSimple[avatarUrl=$avatarUrl, description=$description, eventsUrl=$eventsUrl, hooksUrl=$hooksUrl, id=$id, issuesUrl=$issuesUrl, login=$login, membersUrl=$membersUrl, nodeId=$nodeId, publicMembersUrl=$publicMembersUrl, reposUrl=$reposUrl, url=$url, ]';
  }

  OrganizationSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    description = json['description'];
    eventsUrl = json['events_url'];
    hooksUrl = json['hooks_url'];
    id = json['id'];
    issuesUrl = json['issues_url'];
    login = json['login'];
    membersUrl = json['members_url'];
    nodeId = json['node_id'];
    publicMembersUrl = json['public_members_url'];
    reposUrl = json['repos_url'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (avatarUrl != null)
      json['avatar_url'] = avatarUrl;
      json['description'] = description;
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (hooksUrl != null)
      json['hooks_url'] = hooksUrl;
    if (id != null)
      json['id'] = id;
    if (issuesUrl != null)
      json['issues_url'] = issuesUrl;
    if (login != null)
      json['login'] = login;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (publicMembersUrl != null)
      json['public_members_url'] = publicMembersUrl;
    if (reposUrl != null)
      json['repos_url'] = reposUrl;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<OrganizationSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<OrganizationSimple>() : json.map((value) => OrganizationSimple.fromJson(value)).toList();
  }

  static Map<String, OrganizationSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrganizationSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrganizationSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrganizationSimple-objects as value to a dart map
  static Map<String, List<OrganizationSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrganizationSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrganizationSimple.listFromJson(value);
       });
     }
     return map;
  }
}

