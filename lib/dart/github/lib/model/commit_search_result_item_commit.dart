part of openapi.api;

class CommitSearchResultItemCommit {
  
  CommitSearchResultItemCommitAuthor author = null;
  
  int commentCount = null;
  
  GitUser committer = null;
  
  String message = null;
  
  CommitSearchResultItemCommitTree tree = null;
  
  String url = null;
  
  Verification verification = null;

  CommitSearchResultItemCommit({
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
    return 'CommitSearchResultItemCommit[author=$author, commentCount=$commentCount, committer=$committer, message=$message, tree=$tree, url=$url, verification=$verification, ]';
  }

  CommitSearchResultItemCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      CommitSearchResultItemCommitAuthor.fromJson(json['author']);
    commentCount = json['comment_count'];
    committer = (json['committer'] == null) ?
      null :
      GitUser.fromJson(json['committer']);
    message = json['message'];
    tree = (json['tree'] == null) ?
      null :
      CommitSearchResultItemCommitTree.fromJson(json['tree']);
    url = json['url'];
    verification = (json['verification'] == null) ?
      null :
      Verification.fromJson(json['verification']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (author != null)
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

  static List<CommitSearchResultItemCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitSearchResultItemCommit>() : json.map((value) => CommitSearchResultItemCommit.fromJson(value)).toList();
  }

  static Map<String, CommitSearchResultItemCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitSearchResultItemCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitSearchResultItemCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitSearchResultItemCommit-objects as value to a dart map
  static Map<String, List<CommitSearchResultItemCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitSearchResultItemCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitSearchResultItemCommit.listFromJson(value);
       });
     }
     return map;
  }
}

