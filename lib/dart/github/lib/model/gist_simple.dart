part of openapi.api;

class GistSimple {
  
  int comments = null;
  
  String commentsUrl = null;
  
  String commitsUrl = null;
  
  String createdAt = null;
  
  String description = null;
  
  Map<String, GistSimpleFiles> files = {};
  
  String forksUrl = null;
  
  String gitPullUrl = null;
  
  String gitPushUrl = null;
  
  String htmlUrl = null;
  
  String id = null;
  
  String nodeId = null;
  
  SimpleUser owner = null;
  
  bool public = null;
  
  bool truncated = null;
  
  String updatedAt = null;
  
  String url = null;
  
  String user = null;

  GistSimple({
    this.comments,
    this.commentsUrl,
    this.commitsUrl,
    this.createdAt,
    this.description,
    this.files,
    this.forksUrl,
    this.gitPullUrl,
    this.gitPushUrl,
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
    return 'GistSimple[comments=$comments, commentsUrl=$commentsUrl, commitsUrl=$commitsUrl, createdAt=$createdAt, description=$description, files=$files, forksUrl=$forksUrl, gitPullUrl=$gitPullUrl, gitPushUrl=$gitPushUrl, htmlUrl=$htmlUrl, id=$id, nodeId=$nodeId, owner=$owner, public=$public, truncated=$truncated, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  GistSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    comments = json['comments'];
    commentsUrl = json['comments_url'];
    commitsUrl = json['commits_url'];
    createdAt = json['created_at'];
    description = json['description'];
    files = (json['files'] == null) ?
      null :
      GistSimpleFiles.mapFromJson(json['files']);
    forksUrl = json['forks_url'];
    gitPullUrl = json['git_pull_url'];
    gitPushUrl = json['git_push_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    nodeId = json['node_id'];
    owner = (json['owner'] == null) ?
      null :
      SimpleUser.fromJson(json['owner']);
    public = json['public'];
    truncated = json['truncated'];
    updatedAt = json['updated_at'];
    url = json['url'];
    user = json['user'];
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
    if (files != null)
      json['files'] = files;
    if (forksUrl != null)
      json['forks_url'] = forksUrl;
    if (gitPullUrl != null)
      json['git_pull_url'] = gitPullUrl;
    if (gitPushUrl != null)
      json['git_push_url'] = gitPushUrl;
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
      json['updated_at'] = updatedAt;
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<GistSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<GistSimple>() : json.map((value) => GistSimple.fromJson(value)).toList();
  }

  static Map<String, GistSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistSimple-objects as value to a dart map
  static Map<String, List<GistSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistSimple.listFromJson(value);
       });
     }
     return map;
  }
}

