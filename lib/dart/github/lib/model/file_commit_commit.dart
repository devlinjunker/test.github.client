part of openapi.api;

class FileCommitCommit {
  
  FileCommitCommitAuthor author = null;
  
  FileCommitCommitAuthor committer = null;
  
  String htmlUrl = null;
  
  String message = null;
  
  String nodeId = null;
  
  List<CommitSearchResultItemParents> parents = [];
  
  String sha = null;
  
  BranchShortCommit tree = null;
  
  String url = null;
  
  FileCommitCommitVerification verification = null;

  FileCommitCommit({
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
    return 'FileCommitCommit[author=$author, committer=$committer, htmlUrl=$htmlUrl, message=$message, nodeId=$nodeId, parents=$parents, sha=$sha, tree=$tree, url=$url, verification=$verification, ]';
  }

  FileCommitCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      FileCommitCommitAuthor.fromJson(json['author']);
    committer = (json['committer'] == null) ?
      null :
      FileCommitCommitAuthor.fromJson(json['committer']);
    htmlUrl = json['html_url'];
    message = json['message'];
    nodeId = json['node_id'];
    parents = (json['parents'] == null) ?
      null :
      CommitSearchResultItemParents.listFromJson(json['parents']);
    sha = json['sha'];
    tree = (json['tree'] == null) ?
      null :
      BranchShortCommit.fromJson(json['tree']);
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

  static List<FileCommitCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<FileCommitCommit>() : json.map((value) => FileCommitCommit.fromJson(value)).toList();
  }

  static Map<String, FileCommitCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FileCommitCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FileCommitCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileCommitCommit-objects as value to a dart map
  static Map<String, List<FileCommitCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FileCommitCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FileCommitCommit.listFromJson(value);
       });
     }
     return map;
  }
}

