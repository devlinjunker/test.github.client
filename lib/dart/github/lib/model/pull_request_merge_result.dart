part of openapi.api;

class PullRequestMergeResult {
  
  bool merged = null;
  
  String message = null;
  
  String sha = null;

  PullRequestMergeResult({
    this.merged,
    this.message,
    this.sha,
  });

  @override
  String toString() {
    return 'PullRequestMergeResult[merged=$merged, message=$message, sha=$sha, ]';
  }

  PullRequestMergeResult.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    merged = json['merged'];
    message = json['message'];
    sha = json['sha'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (merged != null)
      json['merged'] = merged;
    if (message != null)
      json['message'] = message;
    if (sha != null)
      json['sha'] = sha;
    return json;
  }

  static List<PullRequestMergeResult> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestMergeResult>() : json.map((value) => PullRequestMergeResult.fromJson(value)).toList();
  }

  static Map<String, PullRequestMergeResult> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestMergeResult>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestMergeResult.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestMergeResult-objects as value to a dart map
  static Map<String, List<PullRequestMergeResult>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestMergeResult>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestMergeResult.listFromJson(value);
       });
     }
     return map;
  }
}

