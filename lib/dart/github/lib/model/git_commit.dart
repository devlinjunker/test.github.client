part of openapi.api;

class GitCommit {
  
  GitCommitAuthor author = null;
  
  GitCommitAuthor committer = null;
  
  String htmlUrl = null;
  /* Message describing the purpose of the commit */
  String message = null;
  
  String nodeId = null;
  
  List<GitCommitParents> parents = [];
  /* SHA for the commit */
  String sha = null;
  
  GitCommitTree tree = null;
  
  String url = null;
  
  FileCommitCommitVerification verification = null;

  GitCommit({
    this.author,
    this.committer,
    this.htmlUrl,
    this.message,
    this.nodeId,
    this.parents,
    this.sha,
    this.tree,
    this.url,
    this.verification,
  });

  @override
  String toString() {
    return 'GitCommit[author=$author, committer=$committer, htmlUrl=$htmlUrl, message=$message, nodeId=$nodeId, parents=$parents, sha=$sha, tree=$tree, url=$url, verification=$verification, ]';
  }

  GitCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      GitCommitAuthor.fromJson(json['author']);
    committer = (json['committer'] == null) ?
      null :
      GitCommitAuthor.fromJson(json['committer']);
    htmlUrl = json['html_url'];
    message = json['message'];
    nodeId = json['node_id'];
    parents = (json['parents'] == null) ?
      null :
      GitCommitParents.listFromJson(json['parents']);
    sha = json['sha'];
    tree = (json['tree'] == null) ?
      null :
      GitCommitTree.fromJson(json['tree']);
    url = json['url'];
    verification = (json['verification'] == null) ?
      null :
      FileCommitCommitVerification.fromJson(json['verification']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (author != null)
      json['author'] = author;
    if (committer != null)
      json['committer'] = committer;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (message != null)
      json['message'] = message;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (parents != null)
      json['parents'] = parents;
    if (sha != null)
      json['sha'] = sha;
    if (tree != null)
      json['tree'] = tree;
    if (url != null)
      json['url'] = url;
    if (verification != null)
      json['verification'] = verification;
    return json;
  }

  static List<GitCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<GitCommit>() : json.map((value) => GitCommit.fromJson(value)).toList();
  }

  static Map<String, GitCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitCommit-objects as value to a dart map
  static Map<String, List<GitCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitCommit.listFromJson(value);
       });
     }
     return map;
  }
}

