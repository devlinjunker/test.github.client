part of openapi.api;

class CommitSearchResultItemCommitAuthor {
  
  DateTime date = null;
  
  String email = null;
  
  String name = null;

  CommitSearchResultItemCommitAuthor({
    this.date,
    this.email,
    this.name,
  });

  @override
  String toString() {
    return 'CommitSearchResultItemCommitAuthor[date=$date, email=$email, name=$name, ]';
  }

  CommitSearchResultItemCommitAuthor.fromJson(Map<String, dynamic> json) {
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

  static List<CommitSearchResultItemCommitAuthor> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitSearchResultItemCommitAuthor>() : json.map((value) => CommitSearchResultItemCommitAuthor.fromJson(value)).toList();
  }

  static Map<String, CommitSearchResultItemCommitAuthor> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitSearchResultItemCommitAuthor>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitSearchResultItemCommitAuthor.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitSearchResultItemCommitAuthor-objects as value to a dart map
  static Map<String, List<CommitSearchResultItemCommitAuthor>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitSearchResultItemCommitAuthor>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitSearchResultItemCommitAuthor.listFromJson(value);
       });
     }
     return map;
  }
}

