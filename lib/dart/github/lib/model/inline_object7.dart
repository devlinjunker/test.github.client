part of openapi.api;

class InlineObject7 {
  /* The OAuth app client secret for which to create the token. */
  String clientSecret = null;
  /* A note to remind you what the OAuth token is for. */
  String note = null;
  /* A URL to remind you what app the OAuth token is for. */
  String noteUrl = null;
  /* A list of scopes that this authorization is in. */
  List<String> scopes = [];

  InlineObject7({
    this.clientSecret,
    this.note,
    this.noteUrl,
    this.scopes,
  });

  @override
  String toString() {
    return 'InlineObject7[clientSecret=$clientSecret, note=$note, noteUrl=$noteUrl, scopes=$scopes, ]';
  }

  InlineObject7.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clientSecret = json['client_secret'];
    note = json['note'];
    noteUrl = json['note_url'];
    scopes = (json['scopes'] == null) ?
      null :
      (json['scopes'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (clientSecret != null)
      json['client_secret'] = clientSecret;
    if (note != null)
      json['note'] = note;
    if (noteUrl != null)
      json['note_url'] = noteUrl;
      json['scopes'] = scopes;
    return json;
  }

  static List<InlineObject7> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject7>() : json.map((value) => InlineObject7.fromJson(value)).toList();
  }

  static Map<String, InlineObject7> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject7>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject7.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject7-objects as value to a dart map
  static Map<String, List<InlineObject7>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject7>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject7.listFromJson(value);
       });
     }
     return map;
  }
}

