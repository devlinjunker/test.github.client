part of openapi.api;

class BaseGist {
  
  int comments = null;
  
  String commentsUrl = null;
  
  String commitsUrl = null;
  
  DateTime createdAt = null;
  
  String description = null;
  
  Map<String, BaseGistFiles> files = {};
  
  List<AnyType> forks = [];
  
  String forksUrl = null;
  
  String gitPullUrl = null;
  
  String gitPushUrl = null;
  
  List<AnyType> history = [];
  
  String htmlUrl = null;
  
  String id = null;
  
  String nodeId = null;
  
  SimpleUser owner = null;
  
  bool public = null;
  
  bool truncated = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  BaseGist({
    this.comments,
    this.commentsUrl,
    this.commitsUrl,
    this.createdAt,
    this.description,
    this.files,
    this.forks,
    this.forksUrl,
    this.gitPullUrl,
    this.gitPushUrl,
    this.history,
    this.htmlUrl,
    this.id,
    this.nodeId,
    this.owner,
    this.public,
    this.truncated,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'BaseGist[comments=$comments, commentsUrl=$commentsUrl, commitsUrl=$commitsUrl, createdAt=$createdAt, description=$description, files=$files, forks=$forks, forksUrl=$forksUrl, gitPullUrl=$gitPullUrl, gitPushUrl=$gitPushUrl, history=$history, htmlUrl=$htmlUrl, id=$id, nodeId=$nodeId, owner=$owner, public=$public, truncated=$truncated, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  BaseGist.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    comments = json['comments'];
    commentsUrl = json['comments_url'];
    commitsUrl = json['commits_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    description = json['description'];
    files = (json['files'] == null) ?
      null :
      BaseGistFiles.mapFromJson(json['files']);
    forks = (json['forks'] == null) ?
      null :
      AnyType.listFromJson(json['forks']);
    forksUrl = json['forks_url'];
    gitPullUrl = json['git_pull_url'];
    gitPushUrl = json['git_push_url'];
    history = (json['history'] == null) ?
      null :
      AnyType.listFromJson(json['history']);
    htmlUrl = json['html_url'];
    id = json['id'];
    nodeId = json['node_id'];
    owner = (json['owner'] == null) ?
      null :
      SimpleUser.fromJson(json['owner']);
    public = json['public'];
    truncated = json['truncated'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (comments != null)
      json['comments'] = comments;
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (commitsUrl != null)
      json['commits_url'] = commitsUrl;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['description'] = description;
    if (files != null)
      json['files'] = files;
    if (forks != null)
      json['forks'] = forks;
    if (forksUrl != null)
      json['forks_url'] = forksUrl;
    if (gitPullUrl != null)
      json['git_pull_url'] = gitPullUrl;
    if (gitPushUrl != null)
      json['git_push_url'] = gitPushUrl;
    if (history != null)
      json['history'] = history;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['owner'] = owner;
    if (public != null)
      json['public'] = public;
    if (truncated != null)
      json['truncated'] = truncated;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<BaseGist> listFromJson(List<dynamic> json) {
    return json == null ? List<BaseGist>() : json.map((value) => BaseGist.fromJson(value)).toList();
  }

  static Map<String, BaseGist> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BaseGist>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BaseGist.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BaseGist-objects as value to a dart map
  static Map<String, List<BaseGist>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BaseGist>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BaseGist.listFromJson(value);
       });
     }
     return map;
  }
}

