part of openapi.api;

class InlineObject5 {
  /* The OAuth app client key for which to create the token. */
  String clientId = null;
  /* The OAuth app client secret for which to create the token. */
  String clientSecret = null;
  /* A unique string to distinguish an authorization from others created for the same client ID and user. */
  String fingerprint = null;
  /* A note to remind you what the OAuth token is for. */
  String note = null;
  /* A URL to remind you what app the OAuth token is for. */
  String noteUrl = null;
  /* A list of scopes that this authorization is in. */
  List<String> scopes = [];

  InlineObject5({
    this.clientId,
    this.clientSecret,
    this.fingerprint,
    this.note,
    this.noteUrl,
    this.scopes,
  });

  @override
  String toString() {
    return 'InlineObject5[clientId=$clientId, clientSecret=$clientSecret, fingerprint=$fingerprint, note=$note, noteUrl=$noteUrl, scopes=$scopes, ]';
  }

  InlineObject5.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clientId = json['client_id'];
    clientSecret = json['client_secret'];
    fingerprint = json['fingerprint'];
    note = json['note'];
    noteUrl = json['note_url'];
    scopes = (json['scopes'] == null) ?
      null :
      (json['scopes'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (clientId != null)
      json['client_id'] = clientId;
    if (clientSecret != null)
      json['client_secret'] = clientSecret;
    if (fingerprint != null)
      json['fingerprint'] = fingerprint;
    if (note != null)
      json['note'] = note;
    if (noteUrl != null)
      json['note_url'] = noteUrl;
      json['scopes'] = scopes;
    return json;
  }

  static List<InlineObject5> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject5>() : json.map((value) => InlineObject5.fromJson(value)).toList();
  }

  static Map<String, InlineObject5> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject5>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject5.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject5-objects as value to a dart map
  static Map<String, List<InlineObject5>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject5>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject5.listFromJson(value);
       });
     }
     return map;
  }
}

