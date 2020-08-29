part of openapi.api;

class ReposOwnerRepoGitCommitsAuthor {
  /* Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String date = null;
  /* The email of the author (or committer) of the commit */
  String email = null;
  /* The name of the author (or committer) of the commit */
  String name = null;

  ReposOwnerRepoGitCommitsAuthor({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoGitCommitsAuthor[date=$date, email=$email, name=$name, ]';
  }

  ReposOwnerRepoGitCommitsAuthor.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoGitCommitsAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoGitCommitsAuthor>() : json.map((value) => ReposOwnerRepoGitCommitsAuthor.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoGitCommitsAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoGitCommitsAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoGitCommitsAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoGitCommitsAuthor-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoGitCommitsAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoGitCommitsAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoGitCommitsAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

