part of openapi.api;

class BranchShortCommit {
  
  String sha = null;
  
  String url = null;

  BranchShortCommit({
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'BranchShortCommit[sha=$sha, url=$url, ]';
  }

  BranchShortCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    sha = json['sha'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (sha != null)
      json['sha'] = sha;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<BranchShortCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<BranchShortCommit>() : json.map((value) => BranchShortCommit.fromJson(value)).toList();
  }

  static Map<String, BranchShortCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BranchShortCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BranchShortCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BranchShortCommit-objects as value to a dart map
  static Map<String, List<BranchShortCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BranchShortCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BranchShortCommit.listFromJson(value);
       });
     }
     return map;
  }
}

