part of openapi.api;

class GitCommitAuthor {
  /* Timestamp of the commit */
  DateTime date = null;
  /* Git email address of the user */
  String email = null;
  /* Name of the git user */
  String name = null;

  GitCommitAuthor({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'GitCommitAuthor[date=$date, email=$email, name=$name, ]';
  }

  GitCommitAuthor.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    date = (json['date'] == null) ?
      null :
      DateTime.parse(json['date']);
    email = json['email'];
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (date != null)
      json['date'] = date == null ? null : date.toUtc().toIso8601String();
    if (email != null)
      json['email'] = email;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<GitCommitAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<GitCommitAuthor>() : json.map((value) => GitCommitAuthor.fromJson(value)).toList();
  }

  static Map<String, GitCommitAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitCommitAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitCommitAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitCommitAuthor-objects as value to a dart map
  static Map<String, List<GitCommitAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitCommitAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitCommitAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

