part of openapi.api;

class CommitSearchResultItemCommitTree {
  
  String sha = null;
  
  String url = null;

  CommitSearchResultItemCommitTree({
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'CommitSearchResultItemCommitTree[sha=$sha, url=$url, ]';
  }

  CommitSearchResultItemCommitTree.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    sha = json['sha'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (sha != null)
      json['sha'] = sha;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CommitSearchResultItemCommitTree> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitSearchResultItemCommitTree>() : json.map((value) => CommitSearchResultItemCommitTree.fromJson(value)).toList();
  }

  static Map<String, CommitSearchResultItemCommitTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitSearchResultItemCommitTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitSearchResultItemCommitTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitSearchResultItemCommitTree-objects as value to a dart map
  static Map<String, List<CommitSearchResultItemCommitTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitSearchResultItemCommitTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitSearchResultItemCommitTree.listFromJson(value);
       });
     }
     return map;
  }
}

