part of openapi.api;

class PageBuild {
  
  String commit = null;
  
  DateTime createdAt = null;
  
  int duration = null;
  
  PageBuildError error = null;
  
  SimpleUser pusher = null;
  
  String status = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  PageBuild({
    this.commit,
    this.createdAt,
    this.duration,
    this.error,
    this.pusher,
    this.status,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'PageBuild[commit=$commit, createdAt=$createdAt, duration=$duration, error=$error, pusher=$pusher, status=$status, updatedAt=$updatedAt, url=$url, ]';
  }

  PageBuild.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commit = json['commit'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    duration = json['duration'];
    error = (json['error'] == null) ?
      null :
      PageBuildError.fromJson(json['error']);
    pusher = (json['pusher'] == null) ?
      null :
      SimpleUser.fromJson(json['pusher']);
    status = json['status'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commit != null)
      json['commit'] = commit;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (duration != null)
      json['duration'] = duration;
    if (error != null)
      json['error'] = error;
      json['pusher'] = pusher;
    if (status != null)
      json['status'] = status;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PageBuild> listFromJson(List<dynamic> json) {
    return json == null ? List<PageBuild>() : json.map((value) => PageBuild.fromJson(value)).toList();
  }

  static Map<String, PageBuild> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PageBuild>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PageBuild.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PageBuild-objects as value to a dart map
  static Map<String, List<PageBuild>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PageBuild>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PageBuild.listFromJson(value);
       });
     }
     return map;
  }
}

