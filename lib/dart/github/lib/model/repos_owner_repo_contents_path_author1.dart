part of openapi.api;

class ReposOwnerRepoContentsPathAuthor1 {
  /* The email of the author (or committer) of the commit */
  String email = null;
  /* The name of the author (or committer) of the commit */
  String name = null;

  ReposOwnerRepoContentsPathAuthor1({
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoContentsPathAuthor1[email=$email, name=$name, ]';
  }

  ReposOwnerRepoContentsPathAuthor1.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    email = json['email'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (email != null)
      json['email'] = email;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<ReposOwnerRepoContentsPathAuthor1> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoContentsPathAuthor1>() : json.map((value) => ReposOwnerRepoContentsPathAuthor1.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoContentsPathAuthor1> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoContentsPathAuthor1>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoContentsPathAuthor1.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoContentsPathAuthor1-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoContentsPathAuthor1>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoContentsPathAuthor1>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoContentsPathAuthor1.listFromJson(value);
       });
     }
     return map;
  }
}

