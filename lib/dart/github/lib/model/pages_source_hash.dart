part of openapi.api;

class PagesSourceHash {
  
  String branch = null;
  
  String path = null;

  PagesSourceHash({
    this.branch,
    this.path,
  });

  @override
  String toString() {
    return 'PagesSourceHash[branch=$branch, path=$path, ]';
  }

  PagesSourceHash.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    branch = json['branch'];
    path = json['path'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (branch != null)
      json['branch'] = branch;
    if (path != null)
      json['path'] = path;
    return json;
  }

  static List<PagesSourceHash> listFromJson(List<dynamic> json) {
    return json == null ? List<PagesSourceHash>() : json.map((value) => PagesSourceHash.fromJson(value)).toList();
  }

  static Map<String, PagesSourceHash> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PagesSourceHash>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PagesSourceHash.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PagesSourceHash-objects as value to a dart map
  static Map<String, List<PagesSourceHash>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PagesSourceHash>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PagesSourceHash.listFromJson(value);
       });
     }
     return map;
  }
}

