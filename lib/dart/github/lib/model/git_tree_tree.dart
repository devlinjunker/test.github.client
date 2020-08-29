part of openapi.api;

class GitTreeTree {
  
  String mode = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String type = null;
  
  String url = null;

  GitTreeTree({
    this.mode,
    this.path,
    this.sha,
    this.size,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'GitTreeTree[mode=$mode, path=$path, sha=$sha, size=$size, type=$type, url=$url, ]';
  }

  GitTreeTree.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    mode = json['mode'];
    path = json['path'];
    sha = json['sha'];
    size = json['size'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (mode != null)
      json['mode'] = mode;
    if (path != null)
      json['path'] = path;
    if (sha != null)
      json['sha'] = sha;
    if (size != null)
      json['size'] = size;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<GitTreeTree> listFromJson(List<dynamic> json) {
    return json == null ? List<GitTreeTree>() : json.map((value) => GitTreeTree.fromJson(value)).toList();
  }

  static Map<String, GitTreeTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitTreeTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitTreeTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitTreeTree-objects as value to a dart map
  static Map<String, List<GitTreeTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitTreeTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitTreeTree.listFromJson(value);
       });
     }
     return map;
  }
}

