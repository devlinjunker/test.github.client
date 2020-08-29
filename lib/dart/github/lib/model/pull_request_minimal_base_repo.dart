part of openapi.api;

class PullRequestMinimalBaseRepo {
  
  int id = null;
  
  String name = null;
  
  String url = null;

  PullRequestMinimalBaseRepo({
    this.id,
    this.name,
    this.url,
  });

  @override
  String toString() {
    return 'PullRequestMinimalBaseRepo[id=$id, name=$name, url=$url, ]';
  }

  PullRequestMinimalBaseRepo.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PullRequestMinimalBaseRepo> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestMinimalBaseRepo>() : json.map((value) => PullRequestMinimalBaseRepo.fromJson(value)).toList();
  }

  static Map<String, PullRequestMinimalBaseRepo> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestMinimalBaseRepo>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestMinimalBaseRepo.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestMinimalBaseRepo-objects as value to a dart map
  static Map<String, List<PullRequestMinimalBaseRepo>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestMinimalBaseRepo>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestMinimalBaseRepo.listFromJson(value);
       });
     }
     return map;
  }
}

