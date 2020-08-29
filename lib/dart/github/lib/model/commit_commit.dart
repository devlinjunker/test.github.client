part of openapi.api;

class CommitCommit {
  
  GitUser author = null;
  
  int commentCount = null;
  
  GitUser committer = null;
  
  String message = null;
  
  CommitCommitTree tree = null;
  
  String url = null;
  
  Verification verification = null;

  CommitCommit({
    this.author,
    this.commentCount,
    this.committer,
    this.message,
    this.tree,
    this.url,
    this.verification,
  });

  @override
  String toString() {
    return 'CommitCommit[author=$author, commentCount=$commentCount, committer=$committer, message=$message, tree=$tree, url=$url, verification=$verification, ]';
  }

  CommitCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      GitUser.fromJson(json['author']);
    commentCount = json['comment_count'];
    committer = (json['committer'] == null) ?
      null :
      GitUser.fromJson(json['committer']);
    message = json['message'];
    tree = (json['tree'] == null) ?
      null :
      CommitCommitTree.fromJson(json['tree']);
    url = json['url'];
    verification = (json['verification'] == null) ?
      null :
      Verification.fromJson(json['verification']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['author'] = author;
    if (commentCount != null)
      json['comment_count'] = commentCount;
      json['committer'] = committer;
    if (message != null)
      json['message'] = message;
    if (tree != null)
      json['tree'] = tree;
    if (url != null)
      json['url'] = url;
    if (verification != null)
      json['verification'] = verification;
    return json;
  }

  static List<CommitCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitCommit>() : json.map((value) => CommitCommit.fromJson(value)).toList();
  }

  static Map<String, CommitCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitCommit-objects as value to a dart map
  static Map<String, List<CommitCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitCommit.listFromJson(value);
       });
     }
     return map;
  }
}

