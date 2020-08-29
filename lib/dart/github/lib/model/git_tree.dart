part of openapi.api;

class GitTree {
  
  String sha = null;
  /* Objects specifying a tree structure */
  List<GitTreeTree> tree = [];
  
  bool truncated = null;
  
  String url = null;

  GitTree({
    this.sha,
    this.tree,
    this.truncated,
    this.url,
  });

  @override
  String toString() {
    return 'GitTree[sha=$sha, tree=$tree, truncated=$truncated, url=$url, ]';
  }

  GitTree.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    sha = json['sha'];
    tree = (json['tree'] == null) ?
      null :
      GitTreeTree.listFromJson(json['tree']);
    truncated = json['truncated'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (sha != null)
      json['sha'] = sha;
    if (tree != null)
      json['tree'] = tree;
    if (truncated != null)
      json['truncated'] = truncated;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<GitTree> listFromJson(List<dynamic> json) {
    return json == null ? List<GitTree>() : json.map((value) => GitTree.fromJson(value)).toList();
  }

  static Map<String, GitTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitTree-objects as value to a dart map
  static Map<String, List<GitTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitTree.listFromJson(value);
       });
     }
     return map;
  }
}

