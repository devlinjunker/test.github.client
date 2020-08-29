part of openapi.api;

class GitTagTagger {
  
  String date = null;
  
  String email = null;
  
  String name = null;

  GitTagTagger({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'GitTagTagger[date=$date, email=$email, name=$name, ]';
  }

  GitTagTagger.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    date = json['date'];
    email = json['email'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (date != null)
      json['date'] = date;
    if (email != null)
      json['email'] = email;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<GitTagTagger> listFromJson(List<dynamic> json) {
    return json == null ? List<GitTagTagger>() : json.map((value) => GitTagTagger.fromJson(value)).toList();
  }

  static Map<String, GitTagTagger> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitTagTagger>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitTagTagger.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitTagTagger-objects as value to a dart map
  static Map<String, List<GitTagTagger>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitTagTagger>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitTagTagger.listFromJson(value);
       });
     }
     return map;
  }
}

