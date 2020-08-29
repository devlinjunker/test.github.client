part of openapi.api;

class Organization {
  
  String avatarUrl = null;
  /* Display blog url for the organization */
  String blog = null;
  /* Display company name for the organization */
  String company = null;
  
  DateTime createdAt = null;
  
  String description = null;
  /* Display email for the organization */
  String email = null;
  
  String eventsUrl = null;
  
  int followers = null;
  
  int following = null;
  /* Specifies if organization projects are enabled for this org */
  bool hasOrganizationProjects = null;
  /* Specifies if repository projects are enabled for repositories that belong to this org */
  bool hasRepositoryProjects = null;
  
  String hooksUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  bool isVerified = null;
  
  String issuesUrl = null;
  /* Display location for the organization */
  String location = null;
  /* Unique login name of the organization */
  String login = null;
  
  String membersUrl = null;
  /* Display name for the organization */
  String name = null;
  
  String nodeId = null;
  
  OrganizationPlan plan = null;
  
  int publicGists = null;
  
  String publicMembersUrl = null;
  
  int publicRepos = null;
  
  String reposUrl = null;
  
  String type = null;
  
  DateTime updatedAt = null;
  /* URL for the organization */
  String url = null;

  Organization({
    this.avatarUrl,
    this.blog,
    this.company,
    this.createdAt,
    this.description,
    this.email,
    this.eventsUrl,
    this.followers,
    this.following,
    this.hasOrganizationProjects,
    this.hasRepositoryProjects,
    this.hooksUrl,
    this.htmlUrl,
    this.id,
    this.isVerified,
    this.issuesUrl,
    this.location,
    this.login,
    this.membersUrl,
    this.name,
    this.nodeId,
    this.plan,
    this.publicGists,
    this.publicMembersUrl,
    this.publicRepos,
    this.reposUrl,
    this.type,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Organization[avatarUrl=$avatarUrl, blog=$blog, company=$company, createdAt=$createdAt, description=$description, email=$email, eventsUrl=$eventsUrl, followers=$followers, following=$following, hasOrganizationProjects=$hasOrganizationProjects, hasRepositoryProjects=$hasRepositoryProjects, hooksUrl=$hooksUrl, htmlUrl=$htmlUrl, id=$id, isVerified=$isVerified, issuesUrl=$issuesUrl, location=$location, login=$login, membersUrl=$membersUrl, name=$name, nodeId=$nodeId, plan=$plan, publicGists=$publicGists, publicMembersUrl=$publicMembersUrl, publicRepos=$publicRepos, reposUrl=$reposUrl, type=$type, updatedAt=$updatedAt, url=$url, ]';
  }

  Organization.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    blog = json['blog'];
    company = json['company'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    description = json['description'];
    email = json['email'];
    eventsUrl = json['events_url'];
    followers = json['followers'];
    following = json['following'];
    hasOrganizationProjects = json['has_organization_projects'];
    hasRepositoryProjects = json['has_repository_projects'];
    hooksUrl = json['hooks_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    isVerified = json['is_verified'];
    issuesUrl = json['issues_url'];
    location = json['location'];
    login = json['login'];
    membersUrl = json['members_url'];
    name = json['name'];
    nodeId = json['node_id'];
    plan = (json['plan'] == null) ?
      null :
      OrganizationPlan.fromJson(json['plan']);
    publicGists = json['public_gists'];
    publicMembersUrl = json['public_members_url'];
    publicRepos = json['public_repos'];
    reposUrl = json['repos_url'];
    type = json['type'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (avatarUrl != null)
      json['avatar_url'] = avatarUrl;
    if (blog != null)
      json['blog'] = blog;
    if (company != null)
      json['company'] = company;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['description'] = description;
    if (email != null)
      json['email'] = email;
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (followers != null)
      json['followers'] = followers;
    if (following != null)
      json['following'] = following;
    if (hasOrganizationProjects != null)
      json['has_organization_projects'] = hasOrganizationProjects;
    if (hasRepositoryProjects != null)
      json['has_repository_projects'] = hasRepositoryProjects;
    if (hooksUrl != null)
      json['hooks_url'] = hooksUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (isVerified != null)
      json['is_verified'] = isVerified;
    if (issuesUrl != null)
      json['issues_url'] = issuesUrl;
    if (location != null)
      json['location'] = location;
    if (login != null)
      json['login'] = login;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (plan != null)
      json['plan'] = plan;
    if (publicGists != null)
      json['public_gists'] = publicGists;
    if (publicMembersUrl != null)
      json['public_members_url'] = publicMembersUrl;
    if (publicRepos != null)
      json['public_repos'] = publicRepos;
    if (reposUrl != null)
      json['repos_url'] = reposUrl;
    if (type != null)
      json['type'] = type;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Organization> listFromJson(List<dynamic> json) {
    return json == null ? List<Organization>() : json.map((value) => Organization.fromJson(value)).toList();
  }

  static Map<String, Organization> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Organization>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Organization.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Organization-objects as value to a dart map
  static Map<String, List<Organization>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Organization>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Organization.listFromJson(value);
       });
     }
     return map;
  }
}

