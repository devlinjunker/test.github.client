part of openapi.api;

class InlineObject8 {
  /* A list of scopes to add to this authorization. */
  List<String> addScopes = [];
  /* A unique string to distinguish an authorization from others created for the same client ID and user. */
  String fingerprint = null;
  /* A note to remind you what the OAuth token is for. */
  String note = null;
  /* A URL to remind you what app the OAuth token is for. */
  String noteUrl = null;
  /* A list of scopes to remove from this authorization. */
  List<String> removeScopes = [];
  /* A list of scopes that this authorization is in. */
  List<String> scopes = [];

  InlineObject8({
    this.addScopes,
    this.fingerprint,
    this.note,
    this.noteUrl,
    this.removeScopes,
    this.scopes,
  });

  @override
  String toString() {
    return 'InlineObject8[addScopes=$addScopes, fingerprint=$fingerprint, note=$note, noteUrl=$noteUrl, removeScopes=$removeScopes, scopes=$scopes, ]';
  }

  InlineObject8.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    addScopes = (json['add_scopes'] == null) ?
      null :
      (json['add_scopes'] as List).cast<String>();
    fingerprint = json['fingerprint'];
    note = json['note'];
    noteUrl = json['note_url'];
    removeScopes = (json['remove_scopes'] == null) ?
      null :
      (json['remove_scopes'] as List).cast<String>();
    scopes = (json['scopes'] == null) ?
      null :
      (json['scopes'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (addScopes != null)
      json['add_scopes'] = addScopes;
    if (fingerprint != null)
      json['fingerprint'] = fingerprint;
    if (note != null)
      json['note'] = note;
    if (noteUrl != null)
      json['note_url'] = noteUrl;
    if (removeScopes != null)
      json['remove_scopes'] = removeScopes;
      json['scopes'] = scopes;
    return json;
  }

  static List<InlineObject8> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject8>() : json.map((value) => InlineObject8.fromJson(value)).toList();
  }

  static Map<String, InlineObject8> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject8>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject8.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject8-objects as value to a dart map
  static Map<String, List<InlineObject8>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject8>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject8.listFromJson(value);
       });
     }
     return map;
  }
}

