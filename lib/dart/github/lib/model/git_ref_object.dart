part of openapi.api;

class GitRefObject {
  /* SHA for the reference */
  String sha = null;
  
  String type = null;
  
  String url = null;

  GitRefObject({
    this.sha,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'GitRefObject[sha=$sha, type=$type, url=$url, ]';
  }

  GitRefObject.fromJson(Map<String, dynamic> json) {
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

  static List<GitRefObject> listFromJson(List<dynamic> json) {
    return json == null ? List<GitRefObject>() : json.map((value) => GitRefObject.fromJson(value)).toList();
  }

  static Map<String, GitRefObject> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitRefObject>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitRefObject.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitRefObject-objects as value to a dart map
  static Map<String, List<GitRefObject>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitRefObject>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitRefObject.listFromJson(value);
       });
     }
     return map;
  }
}

