part of openapi.api;

class ReposOwnerRepoGitTagsTagger {
  /* When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String date = null;
  /* The email of the author of the tag */
  String email = null;
  /* The name of the author of the tag */
  String name = null;

  ReposOwnerRepoGitTagsTagger({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoGitTagsTagger[date=$date, email=$email, name=$name, ]';
  }

  ReposOwnerRepoGitTagsTagger.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoGitTagsTagger> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoGitTagsTagger>() : json.map((value) => ReposOwnerRepoGitTagsTagger.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoGitTagsTagger> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoGitTagsTagger>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoGitTagsTagger.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoGitTagsTagger-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoGitTagsTagger>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoGitTagsTagger>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoGitTagsTagger.listFromJson(value);
       });
     }
     return map;
  }
}

