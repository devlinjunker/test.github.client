part of openapi.api;

class ApplicationGrant {
  
  ApplicationGrantApp app = null;
  
  DateTime createdAt = null;
  
  int id = null;
  
  List<String> scopes = [];
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  ApplicationGrant({
    this.app,
    this.createdAt,
    this.id,
    this.scopes,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'ApplicationGrant[app=$app, createdAt=$createdAt, id=$id, scopes=$scopes, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  ApplicationGrant.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    app = (json['app'] == null) ?
      null :
      ApplicationGrantApp.fromJson(json['app']);
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    id = json['id'];
    scopes = (json['scopes'] == null) ?
      null :
      (json['scopes'] as List).cast<String>();
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (app != null)
      json['app'] = app;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (scopes != null)
      json['scopes'] = scopes;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<ApplicationGrant> listFromJson(List<dynamic> json) {
    return json == null ? List<ApplicationGrant>() : json.map((value) => ApplicationGrant.fromJson(value)).toList();
  }

  static Map<String, ApplicationGrant> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ApplicationGrant>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ApplicationGrant.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ApplicationGrant-objects as value to a dart map
  static Map<String, List<ApplicationGrant>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ApplicationGrant>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ApplicationGrant.listFromJson(value);
       });
     }
     return map;
  }
}

