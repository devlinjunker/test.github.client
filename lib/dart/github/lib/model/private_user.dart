part of openapi.api;

class PrivateUser {
  
  String avatarUrl = null;
  
  String bio = null;
  
  String blog = null;
  
  bool businessPlus = null;
  
  int collaborators = null;
  
  String company = null;
  
  DateTime createdAt = null;
  
  int diskUsage = null;
  
  String email = null;
  
  String eventsUrl = null;
  
  int followers = null;
  
  String followersUrl = null;
  
  int following = null;
  
  String followingUrl = null;
  
  String gistsUrl = null;
  
  String gravatarId = null;
  
  bool hireable = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String ldapDn = null;
  
  String location = null;
  
  String login = null;
  
  String name = null;
  
  String nodeId = null;
  
  String organizationsUrl = null;
  
  int ownedPrivateRepos = null;
  
  PrivateUserPlan plan = null;
  
  int privateGists = null;
  
  int publicGists = null;
  
  int publicRepos = null;
  
  String receivedEventsUrl = null;
  
  String reposUrl = null;
  
  bool siteAdmin = null;
  
  String starredUrl = null;
  
  String subscriptionsUrl = null;
  
  DateTime suspendedAt = null;
  
  int totalPrivateRepos = null;
  
  String twitterUsername = null;
  
  bool twoFactorAuthentication = null;
  
  String type = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  PrivateUser({
    this.avatarUrl,
    this.bio,
    this.blog,
    this.businessPlus,
    this.collaborators,
    this.company,
    this.createdAt,
    this.diskUsage,
    this.email,
    this.eventsUrl,
    this.followers,
    this.followersUrl,
    this.following,
    this.followingUrl,
    this.gistsUrl,
    this.gravatarId,
    this.hireable,
    this.htmlUrl,
    this.id,
    this.ldapDn,
    this.location,
    this.login,
    this.name,
    this.nodeId,
    this.organizationsUrl,
    this.ownedPrivateRepos,
    this.plan,
    this.privateGists,
    this.publicGists,
    this.publicRepos,
    this.receivedEventsUrl,
    this.reposUrl,
    this.siteAdmin,
    this.starredUrl,
    this.subscriptionsUrl,
    this.suspendedAt,
    this.totalPrivateRepos,
    this.twitterUsername,
    this.twoFactorAuthentication,
    this.type,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'PrivateUser[avatarUrl=$avatarUrl, bio=$bio, blog=$blog, businessPlus=$businessPlus, collaborators=$collaborators, company=$company, createdAt=$createdAt, diskUsage=$diskUsage, email=$email, eventsUrl=$eventsUrl, followers=$followers, followersUrl=$followersUrl, following=$following, followingUrl=$followingUrl, gistsUrl=$gistsUrl, gravatarId=$gravatarId, hireable=$hireable, htmlUrl=$htmlUrl, id=$id, ldapDn=$ldapDn, location=$location, login=$login, name=$name, nodeId=$nodeId, organizationsUrl=$organizationsUrl, ownedPrivateRepos=$ownedPrivateRepos, plan=$plan, privateGists=$privateGists, publicGists=$publicGists, publicRepos=$publicRepos, receivedEventsUrl=$receivedEventsUrl, reposUrl=$reposUrl, siteAdmin=$siteAdmin, starredUrl=$starredUrl, subscriptionsUrl=$subscriptionsUrl, suspendedAt=$suspendedAt, totalPrivateRepos=$totalPrivateRepos, twitterUsername=$twitterUsername, twoFactorAuthentication=$twoFactorAuthentication, type=$type, updatedAt=$updatedAt, url=$url, ]';
  }

  PrivateUser.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    bio = json['bio'];
    blog = json['blog'];
    businessPlus = json['business_plus'];
    collaborators = json['collaborators'];
    company = json['company'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    diskUsage = json['disk_usage'];
    email = json['email'];
    eventsUrl = json['events_url'];
    followers = json['followers'];
    followersUrl = json['followers_url'];
    following = json['following'];
    followingUrl = json['following_url'];
    gistsUrl = json['gists_url'];
    gravatarId = json['gravatar_id'];
    hireable = json['hireable'];
    htmlUrl = json['html_url'];
    id = json['id'];
    ldapDn = json['ldap_dn'];
    location = json['location'];
    login = json['login'];
    name = json['name'];
    nodeId = json['node_id'];
    organizationsUrl = json['organizations_url'];
    ownedPrivateRepos = json['owned_private_repos'];
    plan = (json['plan'] == null) ?
      null :
      PrivateUserPlan.fromJson(json['plan']);
    privateGists = json['private_gists'];
    publicGists = json['public_gists'];
    publicRepos = json['public_repos'];
    receivedEventsUrl = json['received_events_url'];
    reposUrl = json['repos_url'];
    siteAdmin = json['site_admin'];
    starredUrl = json['starred_url'];
    subscriptionsUrl = json['subscriptions_url'];
    suspendedAt = (json['suspended_at'] == null) ?
      null :
      DateTime.parse(json['suspended_at']);
    totalPrivateRepos = json['total_private_repos'];
    twitterUsername = json['twitter_username'];
    twoFactorAuthentication = json['two_factor_authentication'];
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
      json['bio'] = bio;
      json['blog'] = blog;
    if (businessPlus != null)
      json['business_plus'] = businessPlus;
    if (collaborators != null)
      json['collaborators'] = collaborators;
      json['company'] = company;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (diskUsage != null)
      json['disk_usage'] = diskUsage;
      json['email'] = email;
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (followers != null)
      json['followers'] = followers;
    if (followersUrl != null)
      json['followers_url'] = followersUrl;
    if (following != null)
      json['following'] = following;
    if (followingUrl != null)
      json['following_url'] = followingUrl;
    if (gistsUrl != null)
      json['gists_url'] = gistsUrl;
      json['gravatar_id'] = gravatarId;
      json['hireable'] = hireable;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (ldapDn != null)
      json['ldap_dn'] = ldapDn;
      json['location'] = location;
    if (login != null)
      json['login'] = login;
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (organizationsUrl != null)
      json['organizations_url'] = organizationsUrl;
    if (ownedPrivateRepos != null)
      json['owned_private_repos'] = ownedPrivateRepos;
    if (plan != null)
      json['plan'] = plan;
    if (privateGists != null)
      json['private_gists'] = privateGists;
    if (publicGists != null)
      json['public_gists'] = publicGists;
    if (publicRepos != null)
      json['public_repos'] = publicRepos;
    if (receivedEventsUrl != null)
      json['received_events_url'] = receivedEventsUrl;
    if (reposUrl != null)
      json['repos_url'] = reposUrl;
    if (siteAdmin != null)
      json['site_admin'] = siteAdmin;
    if (starredUrl != null)
      json['starred_url'] = starredUrl;
    if (subscriptionsUrl != null)
      json['subscriptions_url'] = subscriptionsUrl;
      json['suspended_at'] = suspendedAt == null ? null : suspendedAt.toUtc().toIso8601String();
    if (totalPrivateRepos != null)
      json['total_private_repos'] = totalPrivateRepos;
      json['twitter_username'] = twitterUsername;
    if (twoFactorAuthentication != null)
      json['two_factor_authentication'] = twoFactorAuthentication;
    if (type != null)
      json['type'] = type;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PrivateUser> listFromJson(List<dynamic> json) {
    return json == null ? List<PrivateUser>() : json.map((value) => PrivateUser.fromJson(value)).toList();
  }

  static Map<String, PrivateUser> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PrivateUser>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PrivateUser.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PrivateUser-objects as value to a dart map
  static Map<String, List<PrivateUser>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PrivateUser>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PrivateUser.listFromJson(value);
       });
     }
     return map;
  }
}

