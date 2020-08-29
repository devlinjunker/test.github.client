part of openapi.api;

class GpgKey {
  
  bool canCertify = null;
  
  bool canEncryptComms = null;
  
  bool canEncryptStorage = null;
  
  bool canSign = null;
  
  DateTime createdAt = null;
  
  List<GpgKeyEmails> emails = [];
  
  DateTime expiresAt = null;
  
  int id = null;
  
  String keyId = null;
  
  int primaryKeyId = null;
  
  String publicKey = null;
  
  String rawKey = null;
  
  List<GpgKeySubkeys> subkeys = [];

  GpgKey({
    this.canCertify,
    this.canEncryptComms,
    this.canEncryptStorage,
    this.canSign,
    this.createdAt,
    this.emails,
    this.expiresAt,
    this.id,
    this.keyId,
    this.primaryKeyId,
    this.publicKey,
    this.rawKey,
    this.subkeys,
  });

  @override
  String toString() {
    return 'GpgKey[canCertify=$canCertify, canEncryptComms=$canEncryptComms, canEncryptStorage=$canEncryptStorage, canSign=$canSign, createdAt=$createdAt, emails=$emails, expiresAt=$expiresAt, id=$id, keyId=$keyId, primaryKeyId=$primaryKeyId, publicKey=$publicKey, rawKey=$rawKey, subkeys=$subkeys, ]';
  }

  GpgKey.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    canCertify = json['can_certify'];
    canEncryptComms = json['can_encrypt_comms'];
    canEncryptStorage = json['can_encrypt_storage'];
    canSign = json['can_sign'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    emails = (json['emails'] == null) ?
      null :
      GpgKeyEmails.listFromJson(json['emails']);
    expiresAt = (json['expires_at'] == null) ?
      null :
      DateTime.parse(json['expires_at']);
    id = json['id'];
    keyId = json['key_id'];
    primaryKeyId = json['primary_key_id'];
    publicKey = json['public_key'];
    rawKey = json['raw_key'];
    subkeys = (json['subkeys'] == null) ?
      null :
      GpgKeySubkeys.listFromJson(json['subkeys']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (canCertify != null)
      json['can_certify'] = canCertify;
    if (canEncryptComms != null)
      json['can_encrypt_comms'] = canEncryptComms;
    if (canEncryptStorage != null)
      json['can_encrypt_storage'] = canEncryptStorage;
    if (canSign != null)
      json['can_sign'] = canSign;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (emails != null)
      json['emails'] = emails;
      json['expires_at'] = expiresAt == null ? null : expiresAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (keyId != null)
      json['key_id'] = keyId;
      json['primary_key_id'] = primaryKeyId;
    if (publicKey != null)
      json['public_key'] = publicKey;
      json['raw_key'] = rawKey;
    if (subkeys != null)
      json['subkeys'] = subkeys;
    return json;
  }

  static List<GpgKey> listFromJson(List<dynamic> json) {
    return json == null ? List<GpgKey>() : json.map((value) => GpgKey.fromJson(value)).toList();
  }

  static Map<String, GpgKey> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GpgKey>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GpgKey.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GpgKey-objects as value to a dart map
  static Map<String, List<GpgKey>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GpgKey>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GpgKey.listFromJson(value);
       });
     }
     return map;
  }
}

