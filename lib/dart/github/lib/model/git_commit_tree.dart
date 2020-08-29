part of openapi.api;

class GitCommitTree {
  /* SHA for the commit */
  String sha = null;
  
  String url = null;

  GitCommitTree({
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'GitCommitTree[sha=$sha, url=$url, ]';
  }

  GitCommitTree.fromJson(Map<String, dynamic> json) {
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

  static List<GitCommitTree> listFromJson(List<dynamic> json) {
    return json == null ? List<GitCommitTree>() : json.map((value) => GitCommitTree.fromJson(value)).toList();
  }

  static Map<String, GitCommitTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitCommitTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitCommitTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitCommitTree-objects as value to a dart map
  static Map<String, List<GitCommitTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitCommitTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitCommitTree.listFromJson(value);
       });
     }
     return map;
  }
}

