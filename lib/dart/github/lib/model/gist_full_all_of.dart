part of openapi.api;

class GistFullAllOf {
  
  int comments = null;
  
  String commentsUrl = null;
  
  String commitsUrl = null;
  
  String createdAt = null;
  
  String description = null;
  
  GistSimple forkOf = null;
  
  List<GistFullAllOfForks> forks = [];
  
  String forksUrl = null;
  
  String gitPullUrl = null;
  
  String gitPushUrl = null;
  
  List<GistFullAllOfHistory> history = [];
  
  String htmlUrl = null;
  
  String id = null;
  
  String nodeId = null;
  
  String updatedAt = null;
  
  String url = null;

  GistFullAllOf({
    this.comments,
    this.commentsUrl,
    this.commitsUrl,
    this.createdAt,
    this.description,
    this.forkOf,
    this.forks,
    this.forksUrl,
    this.gitPullUrl,
    this.gitPushUrl,
    this.history,
    this.htmlUrl,
    this.id,
    this.nodeId,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'GistFullAllOf[comments=$comments, commentsUrl=$commentsUrl, commitsUrl=$commitsUrl, createdAt=$createdAt, description=$description, forkOf=$forkOf, forks=$forks, forksUrl=$forksUrl, gitPullUrl=$gitPullUrl, gitPushUrl=$gitPushUrl, history=$history, htmlUrl=$htmlUrl, id=$id, nodeId=$nodeId, updatedAt=$updatedAt, url=$url, ]';
  }

  GistFullAllOf.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    comments = json['comments'];
    commentsUrl = json['comments_url'];
    commitsUrl = json['commits_url'];
    createdAt = json['created_at'];
    description = json['description'];
    forkOf = (json['fork_of'] == null) ?
      null :
      GistSimple.fromJson(json['fork_of']);
    forks = (json['forks'] == null) ?
      null :
      GistFullAllOfForks.listFromJson(json['forks']);
    forksUrl = json['forks_url'];
    gitPullUrl = json['git_pull_url'];
    gitPushUrl = json['git_push_url'];
    history = (json['history'] == null) ?
      null :
      GistFullAllOfHistory.listFromJson(json['history']);
    htmlUrl = json['html_url'];
    id = json['id'];
    nodeId = json['node_id'];
    updatedAt = json['updated_at'];
    url = json['url'];
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
      json['created_at'] = createdAt;
      json['description'] = description;
      json['fork_of'] = forkOf;
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
    if (updatedAt != null)
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<GistFullAllOf> listFromJson(List<dynamic> json) {
    return json == null ? List<GistFullAllOf>() : json.map((value) => GistFullAllOf.fromJson(value)).toList();
  }

  static Map<String, GistFullAllOf> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistFullAllOf>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistFullAllOf.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistFullAllOf-objects as value to a dart map
  static Map<String, List<GistFullAllOf>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistFullAllOf>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistFullAllOf.listFromJson(value);
       });
     }
     return map;
  }
}

