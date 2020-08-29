part of openapi.api;

class ReposOwnerRepoContentsPathAuthor {
  
  String date = null;
  /* The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted. */
  String email = null;
  /* The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted. */
  String name = null;

  ReposOwnerRepoContentsPathAuthor({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoContentsPathAuthor[date=$date, email=$email, name=$name, ]';
  }

  ReposOwnerRepoContentsPathAuthor.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoContentsPathAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoContentsPathAuthor>() : json.map((value) => ReposOwnerRepoContentsPathAuthor.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoContentsPathAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoContentsPathAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoContentsPathAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoContentsPathAuthor-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoContentsPathAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoContentsPathAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoContentsPathAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

