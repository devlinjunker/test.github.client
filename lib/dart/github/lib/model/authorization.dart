part of openapi.api;

class Authorization {
  
  ApplicationGrantApp app = null;
  
  DateTime createdAt = null;
  
  String fingerprint = null;
  
  String hashedToken = null;
  
  int id = null;
  
  ScopedInstallation installation = null;
  
  String note = null;
  
  String noteUrl = null;
  /* A list of scopes that this authorization is in. */
  List<String> scopes = [];
  
  String token = null;
  
  String tokenLastEight = null;
  
  DateTime updatedAt = null;
  
  String url = null;
  
  SimpleUser user = null;

  Authorization({
    this.app,
    this.createdAt,
    this.fingerprint,
    this.hashedToken,
    this.id,
    this.installation,
    this.note,
    this.noteUrl,
    this.scopes,
    this.token,
    this.tokenLastEight,
    this.updatedAt,
    this.url,
    this.user,
  });

  @override
  String toString() {
    return 'Authorization[app=$app, createdAt=$createdAt, fingerprint=$fingerprint, hashedToken=$hashedToken, id=$id, installation=$installation, note=$note, noteUrl=$noteUrl, scopes=$scopes, token=$token, tokenLastEight=$tokenLastEight, updatedAt=$updatedAt, url=$url, user=$user, ]';
  }

  Authorization.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    app = (json['app'] == null) ?
      null :
      ApplicationGrantApp.fromJson(json['app']);
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    fingerprint = json['fingerprint'];
    hashedToken = json['hashed_token'];
    id = json['id'];
    installation = (json['installation'] == null) ?
      null :
      ScopedInstallation.fromJson(json['installation']);
    note = json['note'];
    noteUrl = json['note_url'];
    scopes = (json['scopes'] == null) ?
      null :
      (json['scopes'] as List).cast<String>();
    token = json['token'];
    tokenLastEight = json['token_last_eight'];
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
      json['fingerprint'] = fingerprint;
      json['hashed_token'] = hashedToken;
    if (id != null)
      json['id'] = id;
      json['installation'] = installation;
      json['note'] = note;
      json['note_url'] = noteUrl;
      json['scopes'] = scopes;
    if (token != null)
      json['token'] = token;
      json['token_last_eight'] = tokenLastEight;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
      json['user'] = user;
    return json;
  }

  static List<Authorization> listFromJson(List<dynamic> json) {
    return json == null ? List<Authorization>() : json.map((value) => Authorization.fromJson(value)).toList();
  }

  static Map<String, Authorization> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Authorization>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Authorization.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Authorization-objects as value to a dart map
  static Map<String, List<Authorization>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Authorization>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Authorization.listFromJson(value);
       });
     }
     return map;
  }
}

