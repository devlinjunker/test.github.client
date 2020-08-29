part of openapi.api;

class GitTagObject {
  
  String sha = null;
  
  String type = null;
  
  String url = null;

  GitTagObject({
    this.sha,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'GitTagObject[sha=$sha, type=$type, url=$url, ]';
  }

  GitTagObject.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    sha = json['sha'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (sha != null)
      json['sha'] = sha;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<GitTagObject> listFromJson(List<dynamic> json) {
    return json == null ? List<GitTagObject>() : json.map((value) => GitTagObject.fromJson(value)).toList();
  }

  static Map<String, GitTagObject> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitTagObject>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitTagObject.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitTagObject-objects as value to a dart map
  static Map<String, List<GitTagObject>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitTagObject>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitTagObject.listFromJson(value);
       });
     }
     return map;
  }
}

