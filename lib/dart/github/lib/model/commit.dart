part of openapi.api;

class Commit {
  
  SimpleUser author = null;
  
  String commentsUrl = null;
  
  CommitCommit commit = null;
  
  SimpleUser committer = null;
  
  List<CommitFiles> files = [];
  
  String htmlUrl = null;
  
  String nodeId = null;
  
  List<CommitParents> parents = [];
  
  String sha = null;
  
  CommitStats stats = null;
  
  String url = null;

  Commit({
    this.author,
    this.commentsUrl,
    this.commit,
    this.committer,
    this.files,
    this.htmlUrl,
    this.nodeId,
    this.parents,
    this.sha,
    this.stats,
    this.url,
  });

  @override
  String toString() {
    return 'Commit[author=$author, commentsUrl=$commentsUrl, commit=$commit, committer=$committer, files=$files, htmlUrl=$htmlUrl, nodeId=$nodeId, parents=$parents, sha=$sha, stats=$stats, url=$url, ]';
  }

  Commit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      SimpleUser.fromJson(json['author']);
    commentsUrl = json['comments_url'];
    commit = (json['commit'] == null) ?
      null :
      CommitCommit.fromJson(json['commit']);
    committer = (json['committer'] == null) ?
      null :
      SimpleUser.fromJson(json['committer']);
    files = (json['files'] == null) ?
      null :
      CommitFiles.listFromJson(json['files']);
    htmlUrl = json['html_url'];
    nodeId = json['node_id'];
    parents = (json['parents'] == null) ?
      null :
      CommitParents.listFromJson(json['parents']);
    sha = json['sha'];
    stats = (json['stats'] == null) ?
      null :
      CommitStats.fromJson(json['stats']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['author'] = author;
    if (commentsUrl != null)
      json['comments_url'] = commentsUrl;
    if (commit != null)
      json['commit'] = commit;
      json['committer'] = committer;
    if (files != null)
      json['files'] = files;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (parents != null)
      json['parents'] = parents;
      json['sha'] = sha;
    if (stats != null)
      json['stats'] = stats;
      json['url'] = url;
    return json;
  }

  static List<Commit> listFromJson(List<dynamic> json) {
    return json == null ? List<Commit>() : json.map((value) => Commit.fromJson(value)).toList();
  }

  static Map<String, Commit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Commit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Commit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Commit-objects as value to a dart map
  static Map<String, List<Commit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Commit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Commit.listFromJson(value);
       });
     }
     return map;
  }
}

