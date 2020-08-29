part of openapi.api;

class UserSearchResultItem {
  
  String avatarUrl = null;
  
  String bio = null;
  
  String blog = null;
  
  String company = null;
  
  DateTime createdAt = null;
  
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
  
  String location = null;
  
  String login = null;
  
  String name = null;
  
  String nodeId = null;
  
  String organizationsUrl = null;
  
  int publicGists = null;
  
  int publicRepos = null;
  
  String receivedEventsUrl = null;
  
  String reposUrl = null;
  
  int score = null;
  
  bool siteAdmin = null;
  
  String starredUrl = null;
  
  String subscriptionsUrl = null;
  
  DateTime suspendedAt = null;
  
  List<Object> textMatches = [];
  
  String type = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  UserSearchResultItem({
    this.avatarUrl,
    this.bio,
    this.blog,
    this.company,
    this.createdAt,
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
    this.location,
    this.login,
    this.name,
    this.nodeId,
    this.organizationsUrl,
    this.publicGists,
    this.publicRepos,
    this.receivedEventsUrl,
    this.reposUrl,
    this.score,
    this.siteAdmin,
    this.starredUrl,
    this.subscriptionsUrl,
    this.suspendedAt,
    this.textMatches,
    this.type,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'UserSearchResultItem[avatarUrl=$avatarUrl, bio=$bio, blog=$blog, company=$company, createdAt=$createdAt, email=$email, eventsUrl=$eventsUrl, followers=$followers, followersUrl=$followersUrl, following=$following, followingUrl=$followingUrl, gistsUrl=$gistsUrl, gravatarId=$gravatarId, hireable=$hireable, htmlUrl=$htmlUrl, id=$id, location=$location, login=$login, name=$name, nodeId=$nodeId, organizationsUrl=$organizationsUrl, publicGists=$publicGists, publicRepos=$publicRepos, receivedEventsUrl=$receivedEventsUrl, reposUrl=$reposUrl, score=$score, siteAdmin=$siteAdmin, starredUrl=$starredUrl, subscriptionsUrl=$subscriptionsUrl, suspendedAt=$suspendedAt, textMatches=$textMatches, type=$type, updatedAt=$updatedAt, url=$url, ]';
  }

  UserSearchResultItem.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    bio = json['bio'];
    blog = json['blog'];
    company = json['company'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
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
    location = json['location'];
    login = json['login'];
    name = json['name'];
    nodeId = json['node_id'];
    organizationsUrl = json['organizations_url'];
    publicGists = json['public_gists'];
    publicRepos = json['public_repos'];
    receivedEventsUrl = json['received_events_url'];
    reposUrl = json['repos_url'];
    score = json['score'];
    siteAdmin = json['site_admin'];
    starredUrl = json['starred_url'];
    subscriptionsUrl = json['subscriptions_url'];
    suspendedAt = (json['suspended_at'] == null) ?
      null :
      DateTime.parse(json['suspended_at']);
    textMatches = (json['text_matches'] == null) ?
      null :
      Object.listFromJson(json['text_matches']);
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
      json['company'] = company;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
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
      json['location'] = location;
    if (login != null)
      json['login'] = login;
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (organizationsUrl != null)
      json['organizations_url'] = organizationsUrl;
    if (publicGists != null)
      json['public_gists'] = publicGists;
    if (publicRepos != null)
      json['public_repos'] = publicRepos;
    if (receivedEventsUrl != null)
      json['received_events_url'] = receivedEventsUrl;
    if (reposUrl != null)
      json['repos_url'] = reposUrl;
    if (score != null)
      json['score'] = score;
    if (siteAdmin != null)
      json['site_admin'] = siteAdmin;
    if (starredUrl != null)
      json['starred_url'] = starredUrl;
    if (subscriptionsUrl != null)
      json['subscriptions_url'] = subscriptionsUrl;
      json['suspended_at'] = suspendedAt == null ? null : suspendedAt.toUtc().toIso8601String();
    if (textMatches != null)
      json['text_matches'] = textMatches;
    if (type != null)
      json['type'] = type;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<UserSearchResultItem> listFromJson(List<dynamic> json) {
    return json == null ? List<UserSearchResultItem>() : json.map((value) => UserSearchResultItem.fromJson(value)).toList();
  }

  static Map<String, UserSearchResultItem> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, UserSearchResultItem>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = UserSearchResultItem.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of UserSearchResultItem-objects as value to a dart map
  static Map<String, List<UserSearchResultItem>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<UserSearchResultItem>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = UserSearchResultItem.listFromJson(value);
       });
     }
     return map;
  }
}

