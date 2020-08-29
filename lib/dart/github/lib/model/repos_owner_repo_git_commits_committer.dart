part of openapi.api;

class ReposOwnerRepoGitCommitsCommitter {
  /* Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. */
  String date = null;
  /* The email of the author (or committer) of the commit */
  String email = null;
  /* The name of the author (or committer) of the commit */
  String name = null;

  ReposOwnerRepoGitCommitsCommitter({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoGitCommitsCommitter[date=$date, email=$email, name=$name, ]';
  }

  ReposOwnerRepoGitCommitsCommitter.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoGitCommitsCommitter> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoGitCommitsCommitter>() : json.map((value) => ReposOwnerRepoGitCommitsCommitter.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoGitCommitsCommitter> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoGitCommitsCommitter>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoGitCommitsCommitter.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoGitCommitsCommitter-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoGitCommitsCommitter>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoGitCommitsCommitter>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoGitCommitsCommitter.listFromJson(value);
       });
     }
     return map;
  }
}

