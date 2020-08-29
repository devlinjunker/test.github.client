part of openapi.api;

class GitCommitParents {
  
  String htmlUrl = null;
  /* SHA for the commit */
  String sha = null;
  
  String url = null;

  GitCommitParents({
    this.htmlUrl,
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'GitCommitParents[htmlUrl=$htmlUrl, sha=$sha, url=$url, ]';
  }

  GitCommitParents.fromJson(Map<String, dynamic> json) {
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

  static List<GitCommitParents> listFromJson(List<dynamic> json) {
    return json == null ? List<GitCommitParents>() : json.map((value) => GitCommitParents.fromJson(value)).toList();
  }

  static Map<String, GitCommitParents> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitCommitParents>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitCommitParents.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitCommitParents-objects as value to a dart map
  static Map<String, List<GitCommitParents>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitCommitParents>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitCommitParents.listFromJson(value);
       });
     }
     return map;
  }
}

