part of openapi.api;

class CommitCommitTree {
  
  String sha = null;
  
  String url = null;

  CommitCommitTree({
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'CommitCommitTree[sha=$sha, url=$url, ]';
  }

  CommitCommitTree.fromJson(Map<String, dynamic> json) {
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

  static List<CommitCommitTree> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitCommitTree>() : json.map((value) => CommitCommitTree.fromJson(value)).toList();
  }

  static Map<String, CommitCommitTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitCommitTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitCommitTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitCommitTree-objects as value to a dart map
  static Map<String, List<CommitCommitTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitCommitTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitCommitTree.listFromJson(value);
       });
     }
     return map;
  }
}

