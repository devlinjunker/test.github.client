part of openapi.api;

class BranchRestrictionPolicyUsers {
  
  String avatarUrl = null;
  
  String eventsUrl = null;
  
  String followersUrl = null;
  
  String followingUrl = null;
  
  String gistsUrl = null;
  
  String gravatarId = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String login = null;
  
  String nodeId = null;
  
  String organizationsUrl = null;
  
  String receivedEventsUrl = null;
  
  String reposUrl = null;
  
  bool siteAdmin = null;
  
  String starredUrl = null;
  
  String subscriptionsUrl = null;
  
  String type = null;
  
  String url = null;

  BranchRestrictionPolicyUsers({
    this.avatarUrl,
    this.eventsUrl,
    this.followersUrl,
    this.followingUrl,
    this.gistsUrl,
    this.gravatarId,
    this.htmlUrl,
    this.id,
    this.login,
    this.nodeId,
    this.organizationsUrl,
    this.receivedEventsUrl,
    this.reposUrl,
    this.siteAdmin,
    this.starredUrl,
    this.subscriptionsUrl,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'BranchRestrictionPolicyUsers[avatarUrl=$avatarUrl, eventsUrl=$eventsUrl, followersUrl=$followersUrl, followingUrl=$followingUrl, gistsUrl=$gistsUrl, gravatarId=$gravatarId, htmlUrl=$htmlUrl, id=$id, login=$login, nodeId=$nodeId, organizationsUrl=$organizationsUrl, receivedEventsUrl=$receivedEventsUrl, reposUrl=$reposUrl, siteAdmin=$siteAdmin, starredUrl=$starredUrl, subscriptionsUrl=$subscriptionsUrl, type=$type, url=$url, ]';
  }

  BranchRestrictionPolicyUsers.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    eventsUrl = json['events_url'];
    followersUrl = json['followers_url'];
    followingUrl = json['following_url'];
    gistsUrl = json['gists_url'];
    gravatarId = json['gravatar_id'];
    htmlUrl = json['html_url'];
    id = json['id'];
    login = json['login'];
    nodeId = json['node_id'];
    organizationsUrl = json['organizations_url'];
    receivedEventsUrl = json['received_events_url'];
    reposUrl = json['repos_url'];
    siteAdmin = json['site_admin'];
    starredUrl = json['starred_url'];
    subscriptionsUrl = json['subscriptions_url'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (avatarUrl != null)
      json['avatar_url'] = avatarUrl;
    if (eventsUrl != null)
      json['events_url'] = eventsUrl;
    if (followersUrl != null)
      json['followers_url'] = followersUrl;
    if (followingUrl != null)
      json['following_url'] = followingUrl;
    if (gistsUrl != null)
      json['gists_url'] = gistsUrl;
    if (gravatarId != null)
      json['gravatar_id'] = gravatarId;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (login != null)
      json['login'] = login;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (organizationsUrl != null)
      json['organizations_url'] = organizationsUrl;
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
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<BranchRestrictionPolicyUsers> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchRestrictionPolicyUsers>() : json.map((value) => BranchRestrictionPolicyUsers.fromJson(value)).toList();
  }

  static Map<String, BranchRestrictionPolicyUsers> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchRestrictionPolicyUsers>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchRestrictionPolicyUsers.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchRestrictionPolicyUsers-objects as value to a dart map
  static Map<String, List<BranchRestrictionPolicyUsers>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchRestrictionPolicyUsers>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchRestrictionPolicyUsers.listFromJson(value);
       });
     }
     return map;
  }
}

