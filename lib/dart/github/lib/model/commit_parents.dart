part of openapi.api;

class CommitParents {
  
  String htmlUrl = null;
  
  String sha = null;
  
  String url = null;

  CommitParents({
    this.htmlUrl,
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'CommitParents[htmlUrl=$htmlUrl, sha=$sha, url=$url, ]';
  }

  CommitParents.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    htmlUrl = json['html_url'];
    sha = json['sha'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (sha != null)
      json['sha'] = sha;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CommitParents> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitParents>() : json.map((value) => CommitParents.fromJson(value)).toList();
  }

  static Map<String, CommitParents> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitParents>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitParents.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitParents-objects as value to a dart map
  static Map<String, List<CommitParents>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitParents>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitParents.listFromJson(value);
       });
     }
     return map;
  }
}

