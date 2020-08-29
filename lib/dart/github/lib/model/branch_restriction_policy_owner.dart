part of openapi.api;

class BranchRestrictionPolicyOwner {
  
  String avatarUrl = null;
  
  String description = null;
  
  String eventsUrl = null;
  
  String followersUrl = null;
  
  String followingUrl = null;
  
  String gistsUrl = null;
  
  String gravatarId = null;
  
  String hooksUrl = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String issuesUrl = null;
  
  String login = null;
  
  String membersUrl = null;
  
  String nodeId = null;
  
  String organizationsUrl = null;
  
  String publicMembersUrl = null;
  
  String receivedEventsUrl = null;
  
  String reposUrl = null;
  
  String starredUrl = null;
  
  String subscriptionsUrl = null;
  
  String type = null;
  
  String url = null;

  BranchRestrictionPolicyOwner({
    this.avatarUrl,
    this.description,
    this.eventsUrl,
    this.followersUrl,
    this.followingUrl,
    this.gistsUrl,
    this.gravatarId,
    this.hooksUrl,
    this.htmlUrl,
    this.id,
    this.issuesUrl,
    this.login,
    this.membersUrl,
    this.nodeId,
    this.organizationsUrl,
    this.publicMembersUrl,
    this.receivedEventsUrl,
    this.reposUrl,
    this.starredUrl,
    this.subscriptionsUrl,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'BranchRestrictionPolicyOwner[avatarUrl=$avatarUrl, description=$description, eventsUrl=$eventsUrl, followersUrl=$followersUrl, followingUrl=$followingUrl, gistsUrl=$gistsUrl, gravatarId=$gravatarId, hooksUrl=$hooksUrl, htmlUrl=$htmlUrl, id=$id, issuesUrl=$issuesUrl, login=$login, membersUrl=$membersUrl, nodeId=$nodeId, organizationsUrl=$organizationsUrl, publicMembersUrl=$publicMembersUrl, receivedEventsUrl=$receivedEventsUrl, reposUrl=$reposUrl, starredUrl=$starredUrl, subscriptionsUrl=$subscriptionsUrl, type=$type, url=$url, ]';
  }

  BranchRestrictionPolicyOwner.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    description = json['description'];
    eventsUrl = json['events_url'];
    followersUrl = json['followers_url'];
    followingUrl = json['following_url'];
    gistsUrl = json['gists_url'];
    gravatarId = json['gravatar_id'];
    hooksUrl = json['hooks_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    issuesUrl = json['issues_url'];
    login = json['login'];
    membersUrl = json['members_url'];
    nodeId = json['node_id'];
    organizationsUrl = json['organizations_url'];
    publicMembersUrl = json['public_members_url'];
    receivedEventsUrl = json['received_events_url'];
    reposUrl = json['repos_url'];
    starredUrl = json['starred_url'];
    subscriptionsUrl = json['subscriptions_url'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (avatarUrl != null)
      json['avatar_url'] = avatarUrl;
    if (description != null)
      json['description'] = description;
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
    if (hooksUrl != null)
      json['hooks_url'] = hooksUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
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
    if (organizationsUrl != null)
      json['organizations_url'] = organizationsUrl;
    if (publicMembersUrl != null)
      json['public_members_url'] = publicMembersUrl;
    if (receivedEventsUrl != null)
      json['received_events_url'] = receivedEventsUrl;
    if (reposUrl != null)
      json['repos_url'] = reposUrl;
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

  static List<BranchRestrictionPolicyOwner> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchRestrictionPolicyOwner>() : json.map((value) => BranchRestrictionPolicyOwner.fromJson(value)).toList();
  }

  static Map<String, BranchRestrictionPolicyOwner> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchRestrictionPolicyOwner>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchRestrictionPolicyOwner.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchRestrictionPolicyOwner-objects as value to a dart map
  static Map<String, List<BranchRestrictionPolicyOwner>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchRestrictionPolicyOwner>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchRestrictionPolicyOwner.listFromJson(value);
       });
     }
     return map;
  }
}

