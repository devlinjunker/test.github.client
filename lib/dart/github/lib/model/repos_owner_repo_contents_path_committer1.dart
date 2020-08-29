part of openapi.api;

class ReposOwnerRepoContentsPathCommitter1 {
  /* The email of the author (or committer) of the commit */
  String email = null;
  /* The name of the author (or committer) of the commit */
  String name = null;

  ReposOwnerRepoContentsPathCommitter1({
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'ReposOwnerRepoContentsPathCommitter1[email=$email, name=$name, ]';
  }

  ReposOwnerRepoContentsPathCommitter1.fromJson(Map<String, dynamic> json) {
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

  static List<ReposOwnerRepoContentsPathCommitter1> listFromJson(List<dynamic> json) {
    return json == null ? List<ReposOwnerRepoContentsPathCommitter1>() : json.map((value) => ReposOwnerRepoContentsPathCommitter1.fromJson(value)).toList();
  }

  static Map<String, ReposOwnerRepoContentsPathCommitter1> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReposOwnerRepoContentsPathCommitter1>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReposOwnerRepoContentsPathCommitter1.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReposOwnerRepoContentsPathCommitter1-objects as value to a dart map
  static Map<String, List<ReposOwnerRepoContentsPathCommitter1>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReposOwnerRepoContentsPathCommitter1>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReposOwnerRepoContentsPathCommitter1.listFromJson(value);
       });
     }
     return map;
  }
}

