part of openapi.api;

class GitUser {
  
  String date = null;
  
  String email = null;
  
  String name = null;

  GitUser({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'GitUser[date=$date, email=$email, name=$name, ]';
  }

  GitUser.fromJson(Map<String, dynamic> json) {
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

  static List<GitUser> listFromJson(List<dynamic> json) {
    return json == null ? List<GitUser>() : json.map((value) => GitUser.fromJson(value)).toList();
  }

  static Map<String, GitUser> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitUser>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitUser.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitUser-objects as value to a dart map
  static Map<String, List<GitUser>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitUser>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitUser.listFromJson(value);
       });
     }
     return map;
  }
}

