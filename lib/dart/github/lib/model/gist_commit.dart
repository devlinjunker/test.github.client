part of openapi.api;

class GistCommit {
  
  CommitStats changeStatus = null;
  
  DateTime committedAt = null;
  
  String url = null;
  
  SimpleUser user = null;
  
  String version = null;

  GistCommit({
    this.changeStatus,
    this.committedAt,
    this.url,
    this.user,
    this.version,
  });

  @override
  String toString() {
    return 'GistCommit[changeStatus=$changeStatus, committedAt=$committedAt, url=$url, user=$user, version=$version, ]';
  }

  GistCommit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    changeStatus = (json['change_status'] == null) ?
      null :
      CommitStats.fromJson(json['change_status']);
    committedAt = (json['committed_at'] == null) ?
      null :
      DateTime.parse(json['committed_at']);
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
    version = json['version'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (changeStatus != null)
      json['change_status'] = changeStatus;
    if (committedAt != null)
      json['committed_at'] = committedAt == null ? null : committedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    if (version != null)
      json['version'] = version;
    return json;
  }

  static List<GistCommit> listFromJson(List<dynamic> json) {
    return json == null ? List<GistCommit>() : json.map((value) => GistCommit.fromJson(value)).toList();
  }

  static Map<String, GistCommit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistCommit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistCommit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistCommit-objects as value to a dart map
  static Map<String, List<GistCommit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistCommit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistCommit.listFromJson(value);
       });
     }
     return map;
  }
}

