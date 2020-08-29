part of openapi.api;

class GistFullAllOfHistory {
  
  CommitStats changeStatus = null;
  
  String committedAt = null;
  
  String url = null;
  
  GistFullAllOfUser user = null;
  
  String version = null;

  GistFullAllOfHistory({
    this.changeStatus,
    this.committedAt,
    this.url,
    this.user,
    this.version,
  });

  @override
  String toString() {
    return 'GistFullAllOfHistory[changeStatus=$changeStatus, committedAt=$committedAt, url=$url, user=$user, version=$version, ]';
  }

  GistFullAllOfHistory.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    changeStatus = (json['change_status'] == null) ?
      null :
      CommitStats.fromJson(json['change_status']);
    committedAt = json['committed_at'];
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      GistFullAllOfUser.fromJson(json['user']);
    version = json['version'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (changeStatus != null)
      json['change_status'] = changeStatus;
    if (committedAt != null)
      json['committed_at'] = committedAt;
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    if (version != null)
      json['version'] = version;
    return json;
  }

  static List<GistFullAllOfHistory> listFromJson(List<dynamic> json) {
    return json == null ? List<GistFullAllOfHistory>() : json.map((value) => GistFullAllOfHistory.fromJson(value)).toList();
  }

  static Map<String, GistFullAllOfHistory> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistFullAllOfHistory>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistFullAllOfHistory.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistFullAllOfHistory-objects as value to a dart map
  static Map<String, List<GistFullAllOfHistory>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistFullAllOfHistory>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistFullAllOfHistory.listFromJson(value);
       });
     }
     return map;
  }
}

