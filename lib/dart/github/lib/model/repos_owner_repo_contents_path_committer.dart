part of openapi.api;

class ReposOwnerRepoContentsPathCommitter {
  
  String date = null;
  /* The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted. */
  String email = null;
  /* The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted. */
  String name = null;

  ReposOwnerRepoContentsPathCommitter({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoContentsPathCommitter[date=$date, email=$email, name=$name, ]';
  }

  ReposOwnerRepoContentsPathCommitter.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoContentsPathCommitter> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoContentsPathCommitter>() : json.map((value) => ReposOwnerRepoContentsPathCommitter.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoContentsPathCommitter> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoContentsPathCommitter>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoContentsPathCommitter.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoContentsPathCommitter-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoContentsPathCommitter>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoContentsPathCommitter>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoContentsPathCommitter.listFromJson(value);
       });
     }
     return map;
  }
}

