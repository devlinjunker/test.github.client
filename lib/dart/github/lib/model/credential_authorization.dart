part of openapi.api;

class CredentialAuthorization {
  /* Date when the credential was last accessed. May be null if it was never accessed */
  DateTime credentialAccessedAt = null;
  /* Date when the credential was authorized for use. */
  DateTime credentialAuthorizedAt = null;
  /* Unique identifier for the credential. */
  int credentialId = null;
  /* Human-readable description of the credential type. */
  String credentialType = null;
  /* Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key. */
  String fingerprint = null;
  /* User login that owns the underlying credential. */
  String login = null;
  /* List of oauth scopes the token has been granted. */
  List<String> scopes = [];
  /* Last eight characters of the credential. Only included in responses with credential_type of personal access token. */
  String tokenLastEight = null;

  CredentialAuthorization({
    this.credentialAccessedAt,
    this.credentialAuthorizedAt,
    this.credentialId,
    this.credentialType,
    this.fingerprint,
    this.login,
    this.scopes,
    this.tokenLastEight,
  });

  @override
  String toString() {
    return 'CredentialAuthorization[credentialAccessedAt=$credentialAccessedAt, credentialAuthorizedAt=$credentialAuthorizedAt, credentialId=$credentialId, credentialType=$credentialType, fingerprint=$fingerprint, login=$login, scopes=$scopes, tokenLastEight=$tokenLastEight, ]';
  }

  CredentialAuthorization.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    credentialAccessedAt = (json['credential_accessed_at'] == null) ?
      null :
      DateTime.parse(json['credential_accessed_at']);
    credentialAuthorizedAt = (json['credential_authorized_at'] == null) ?
      null :
      DateTime.parse(json['credential_authorized_at']);
    credentialId = json['credential_id'];
    credentialType = json['credential_type'];
    fingerprint = json['fingerprint'];
    login = json['login'];
    scopes = (json['scopes'] == null) ?
      null :
      (json['scopes'] as List).cast<String>();
    tokenLastEight = json['token_last_eight'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['credential_accessed_at'] = credentialAccessedAt == null ? null : credentialAccessedAt.toUtc().toIso8601String();
    if (credentialAuthorizedAt != null)
      json['credential_authorized_at'] = credentialAuthorizedAt == null ? null : credentialAuthorizedAt.toUtc().toIso8601String();
    if (credentialId != null)
      json['credential_id'] = credentialId;
    if (credentialType != null)
      json['credential_type'] = credentialType;
    if (fingerprint != null)
      json['fingerprint'] = fingerprint;
    if (login != null)
      json['login'] = login;
    if (scopes != null)
      json['scopes'] = scopes;
    if (tokenLastEight != null)
      json['token_last_eight'] = tokenLastEight;
    return json;
  }

  static List<CredentialAuthorization> listFromJson(List<dynamic> json) {
    return json == null ? List<CredentialAuthorization>() : json.map((value) => CredentialAuthorization.fromJson(value)).toList();
  }

  static Map<String, CredentialAuthorization> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CredentialAuthorization>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CredentialAuthorization.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CredentialAuthorization-objects as value to a dart map
  static Map<String, List<CredentialAuthorization>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CredentialAuthorization>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CredentialAuthorization.listFromJson(value);
       });
     }
     return map;
  }
}

