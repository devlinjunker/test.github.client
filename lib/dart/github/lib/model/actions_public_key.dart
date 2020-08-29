part of openapi.api;

class ActionsPublicKey {
  
  String createdAt = null;
  
  int id = null;
  /* The Base64 encoded public key. */
  String key = null;
  /* The identifier for the key. */
  String keyId = null;
  
  String title = null;
  
  String url = null;

  ActionsPublicKey({
    this.createdAt,
    this.id,
    this.key,
    this.keyId,
    this.title,
    this.url,
  });

  @override
  String toString() {
    return 'ActionsPublicKey[createdAt=$createdAt, id=$id, key=$key, keyId=$keyId, title=$title, url=$url, ]';
  }

  ActionsPublicKey.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = json['created_at'];
    id = json['id'];
    key = json['key'];
    keyId = json['key_id'];
    title = json['title'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt;
    if (id != null)
      json['id'] = id;
    if (key != null)
      json['key'] = key;
    if (keyId != null)
      json['key_id'] = keyId;
    if (title != null)
      json['title'] = title;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ActionsPublicKey> listFromJson(List<dynamic> json) {
    return json == null ? List<ActionsPublicKey>() : json.map((value) => ActionsPublicKey.fromJson(value)).toList();
  }

  static Map<String, ActionsPublicKey> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ActionsPublicKey>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ActionsPublicKey.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ActionsPublicKey-objects as value to a dart map
  static Map<String, List<ActionsPublicKey>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ActionsPublicKey>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ActionsPublicKey.listFromJson(value);
       });
     }
     return map;
  }
}

