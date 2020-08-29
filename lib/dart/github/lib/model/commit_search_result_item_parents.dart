part of openapi.api;

class CommitSearchResultItemParents {
  
  String htmlUrl = null;
  
  String sha = null;
  
  String url = null;

  CommitSearchResultItemParents({
    this.htmlUrl,
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'CommitSearchResultItemParents[htmlUrl=$htmlUrl, sha=$sha, url=$url, ]';
  }

  CommitSearchResultItemParents.fromJson(Map<String, dynamic> json) {
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

  static List<CommitSearchResultItemParents> listFromJson(List<dynamic> json) {
    return json == null ? List<CommitSearchResultItemParents>() : json.map((value) => CommitSearchResultItemParents.fromJson(value)).toList();
  }

  static Map<String, CommitSearchResultItemParents> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommitSearchResultItemParents>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommitSearchResultItemParents.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommitSearchResultItemParents-objects as value to a dart map
  static Map<String, List<CommitSearchResultItemParents>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommitSearchResultItemParents>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommitSearchResultItemParents.listFromJson(value);
       });
     }
     return map;
  }
}

