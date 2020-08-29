part of openapi.api;

class IssuePullRequest {
  
  String diffUrl = null;
  
  String htmlUrl = null;
  
  DateTime mergedAt = null;
  
  String patchUrl = null;
  
  String url = null;

  IssuePullRequest({
    this.diffUrl,
    this.htmlUrl,
    this.mergedAt,
    this.patchUrl,
    this.url,
  });

  @override
  String toString() {
    return 'IssuePullRequest[diffUrl=$diffUrl, htmlUrl=$htmlUrl, mergedAt=$mergedAt, patchUrl=$patchUrl, url=$url, ]';
  }

  IssuePullRequest.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    diffUrl = json['diff_url'];
    htmlUrl = json['html_url'];
    mergedAt = (json['merged_at'] == null) ?
      null :
      DateTime.parse(json['merged_at']);
    patchUrl = json['patch_url'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['diff_url'] = diffUrl;
      json['html_url'] = htmlUrl;
      json['merged_at'] = mergedAt == null ? null : mergedAt.toUtc().toIso8601String();
      json['patch_url'] = patchUrl;
      json['url'] = url;
    return json;
  }

  static List<IssuePullRequest> listFromJson(List<dynamic> json) {
    return json == null ? List<IssuePullRequest>() : json.map((value) => IssuePullRequest.fromJson(value)).toList();
  }

  static Map<String, IssuePullRequest> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssuePullRequest>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssuePullRequest.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssuePullRequest-objects as value to a dart map
  static Map<String, List<IssuePullRequest>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssuePullRequest>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssuePullRequest.listFromJson(value);
       });
     }
     return map;
  }
}

