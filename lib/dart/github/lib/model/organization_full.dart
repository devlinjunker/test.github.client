part of openapi.api;

class OrganizationFull {
  
  String avatarUrl = null;
  
  String billingEmail = null;
  
  String blog = null;
  
  int collaborators = null;
  
  String company = null;
  
  DateTime createdAt = null;
  
  String defaultRepositoryPermission = null;
  
  String description = null;
  
  int diskUsage = null;
  
  String email = null;
  
  String eventsUrl = null;
  
  int followers = null;
  
  int following = null;
  
  bool hasOrganizationProjects = null;
  
  bool hasRepositoryProjects = null;
  
  String hooksUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  bool isVerified = null;
  
  String issuesUrl = null;
  
  String location = null;
  
  String login = null;
  
  String membersAllowedRepositoryCreationType = null;
  
  bool membersCanCreateInternalRepositories = null;
  
  bool membersCanCreatePrivateRepositories = null;
  
  bool membersCanCreatePublicRepositories = null;
  
  bool membersCanCreateRepositories = null;
  
  String membersUrl = null;
  
  String name = null;
  
  String nodeId = null;
  
  int ownedPrivateRepos = null;
  
  OrganizationFullPlan plan = null;
  
  int privateGists = null;
  
  int publicGists = null;
  
  String publicMembersUrl = null;
  
  int publicRepos = null;
  
  String reposUrl = null;
  
  int totalPrivateRepos = null;
  
  String twitterUsername = null;
  
  bool twoFactorRequirementEnabled = null;
  
  String type = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  OrganizationFull({
    this.avatarUrl,
    this.billingEmail,
    this.blog,
    this.collaborators,
    this.company,
    this.createdAt,
    this.defaultRepositoryPermission,
    this.description,
    this.diskUsage,
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
    this.membersAllowedRepositoryCreationType,
    this.membersCanCreateInternalRepositories,
    this.membersCanCreatePrivateRepositories,
    this.membersCanCreatePublicRepositories,
    this.membersCanCreateRepositories,
    this.membersUrl,
    this.name,
    this.nodeId,
    this.ownedPrivateRepos,
    this.plan,
    this.privateGists,
    this.publicGists,
    this.publicMembersUrl,
    this.publicRepos,
    this.reposUrl,
    this.totalPrivateRepos,
    this.twitterUsername,
    this.twoFactorRequirementEnabled,
    this.type,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'OrganizationFull[avatarUrl=$avatarUrl, billingEmail=$billingEmail, blog=$blog, collaborators=$collaborators, company=$company, createdAt=$createdAt, defaultRepositoryPermission=$defaultRepositoryPermission, description=$description, diskUsage=$diskUsage, email=$email, eventsUrl=$eventsUrl, followers=$followers, following=$following, hasOrganizationProjects=$hasOrganizationProjects, hasRepositoryProjects=$hasRepositoryProjects, hooksUrl=$hooksUrl, htmlUrl=$htmlUrl, id=$id, isVerified=$isVerified, issuesUrl=$issuesUrl, location=$location, login=$login, membersAllowedRepositoryCreationType=$membersAllowedRepositoryCreationType, membersCanCreateInternalRepositories=$membersCanCreateInternalRepositories, membersCanCreatePrivateRepositories=$membersCanCreatePrivateRepositories, membersCanCreatePublicRepositories=$membersCanCreatePublicRepositories, membersCanCreateRepositories=$membersCanCreateRepositories, membersUrl=$membersUrl, name=$name, nodeId=$nodeId, ownedPrivateRepos=$ownedPrivateRepos, plan=$plan, privateGists=$privateGists, publicGists=$publicGists, publicMembersUrl=$publicMembersUrl, publicRepos=$publicRepos, reposUrl=$reposUrl, totalPrivateRepos=$totalPrivateRepos, twitterUsername=$twitterUsername, twoFactorRequirementEnabled=$twoFactorRequirementEnabled, type=$type, updatedAt=$updatedAt, url=$url, ]';
  }

  OrganizationFull.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    billingEmail = json['billing_email'];
    blog = json['blog'];
    collaborators = json['collaborators'];
    company = json['company'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    defaultRepositoryPermission = json['default_repository_permission'];
    description = json['description'];
    diskUsage = json['disk_usage'];
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
    membersAllowedRepositoryCreationType = json['members_allowed_repository_creation_type'];
    membersCanCreateInternalRepositories = json['members_can_create_internal_repositories'];
    membersCanCreatePrivateRepositories = json['members_can_create_private_repositories'];
    membersCanCreatePublicRepositories = json['members_can_create_public_repositories'];
    membersCanCreateRepositories = json['members_can_create_repositories'];
    membersUrl = json['members_url'];
    name = json['name'];
    nodeId = json['node_id'];
    ownedPrivateRepos = json['owned_private_repos'];
    plan = (json['plan'] == null) ?
      null :
      OrganizationFullPlan.fromJson(json['plan']);
    privateGists = json['private_gists'];
    publicGists = json['public_gists'];
    publicMembersUrl = json['public_members_url'];
    publicRepos = json['public_repos'];
    reposUrl = json['repos_url'];
    totalPrivateRepos = json['total_private_repos'];
    twitterUsername = json['twitter_username'];
    twoFactorRequirementEnabled = json['two_factor_requirement_enabled'];
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
      json['billing_email'] = billingEmail;
    if (blog != null)
      json['blog'] = blog;
      json['collaborators'] = collaborators;
    if (company != null)
      json['company'] = company;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['default_repository_permission'] = defaultRepositoryPermission;
      json['description'] = description;
      json['disk_usage'] = diskUsage;
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
    if (membersAllowedRepositoryCreationType != null)
      json['members_allowed_repository_creation_type'] = membersAllowedRepositoryCreationType;
    if (membersCanCreateInternalRepositories != null)
      json['members_can_create_internal_repositories'] = membersCanCreateInternalRepositories;
    if (membersCanCreatePrivateRepositories != null)
      json['members_can_create_private_repositories'] = membersCanCreatePrivateRepositories;
    if (membersCanCreatePublicRepositories != null)
      json['members_can_create_public_repositories'] = membersCanCreatePublicRepositories;
      json['members_can_create_repositories'] = membersCanCreateRepositories;
    if (membersUrl != null)
      json['members_url'] = membersUrl;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (ownedPrivateRepos != null)
      json['owned_private_repos'] = ownedPrivateRepos;
    if (plan != null)
      json['plan'] = plan;
      json['private_gists'] = privateGists;
    if (publicGists != null)
      json['public_gists'] = publicGists;
    if (publicMembersUrl != null)
      json['public_members_url'] = publicMembersUrl;
    if (publicRepos != null)
      json['public_repos'] = publicRepos;
    if (reposUrl != null)
      json['repos_url'] = reposUrl;
    if (totalPrivateRepos != null)
      json['total_private_repos'] = totalPrivateRepos;
      json['twitter_username'] = twitterUsername;
      json['two_factor_requirement_enabled'] = twoFactorRequirementEnabled;
    if (type != null)
      json['type'] = type;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<OrganizationFull> listFromJson(List<dynamic> json) {
    return json == null ? List<OrganizationFull>() : json.map((value) => OrganizationFull.fromJson(value)).toList();
  }

  static Map<String, OrganizationFull> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrganizationFull>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrganizationFull.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrganizationFull-objects as value to a dart map
  static Map<String, List<OrganizationFull>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrganizationFull>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrganizationFull.listFromJson(value);
       });
     }
     return map;
  }
}

