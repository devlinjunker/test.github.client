part of openapi.api;

class CommitSearchResultItem {
  
  SimpleUser author = null;
  
  String commentsUrl = null;
  
  CommitSearchResultItemCommit commit = null;
  
  GitUser committer = null;
  
  String htmlUrl = null;
  
  String nodeId = null;
  
  List<CommitSearchResultItemParents> parents = [];
  
  MinimalRepository repository = null;
  
  int score = null;
  
  String sha = null;
  
  List<Object> textMatches = [];
  
  String url = null;

  CommitSearchResultItem({
    this.author,
    this.commentsUrl,
    this.commit,
    this.committer,
    this.htmlUrl,
    this.nodeId,
    this.parents,
    this.repository,
    this.score,
    this.sha,
    this.textMatches,
    this.url,
  });

  @override
  String toString() {
    return 'CommitSearchResultItem[author=$author, commentsUrl=$commentsUrl, commit=$commit, committer=$committer, htmlUrl=$htmlUrl, nodeId=$nodeId, parents=$parents, repository=$repository, score=$score, sha=$sha, textMatches=$textMatches, url=$url, ]';
  }

  CommitSearchResultItem.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    author = (json['author'] == null) ?
      null :
      SimpleUser.fromJson(json['author']);
    commentsUrl = json['comments_url'];
    commit = (json['commit'] == null) ?
      null :
      CommitSearchResultItemCommit.fromJson(json['commit']);
    committer = (json['committer'] == null) ?
      null :
      GitUser.fromJson(json['committer']);
    htmlUrl = json['html_url'];
    nodeId = json['node_id'];
    parents = (json['parents'] == null) ?
      null :
      CommitSearchResultItemParents.listFromJson(json['parents']);
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    score = json['score'];
    sha = json['sha'];
    textMatches = (json['text_matches'] == null) ?
      null :
      Object.listFromJson(json['text_matches']);
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
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (parents != null)
      json['parents'] = parents;
    if (repository != null)
      json['repository'] = repository;
    if (score != null)
      json['score'] = score;
    if (sha != null)
      json['sha'] = sha;
    if (textMatches != null)
      json['text_matches'] = textMatches;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CommitSearchResultItem> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitSearchResultItem>() : json.map((value) => CommitSearchResultItem.fromJson(value)).toList();
  }

  static Map<String, CommitSearchResultItem> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitSearchResultItem>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitSearchResultItem.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitSearchResultItem-objects as value to a dart map
  static Map<String, List<CommitSearchResultItem>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitSearchResultItem>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitSearchResultItem.listFromJson(value);
       });
     }
     return map;
  }
}

