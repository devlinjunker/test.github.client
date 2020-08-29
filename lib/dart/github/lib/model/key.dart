part of openapi.api;

class Key {
  
  DateTime createdAt = null;
  
  int id = null;
  
  String key = null;
  
  String keyId = null;
  
  bool readOnly = null;
  
  String title = null;
  
  String url = null;
  
  bool verified = null;

  Key({
    this.createdAt,
    this.id,
    this.key,
    this.keyId,
    this.readOnly,
    this.title,
    this.url,
    this.verified,
  });

  @override
  String toString() {
    return 'Key[createdAt=$createdAt, id=$id, key=$key, keyId=$keyId, readOnly=$readOnly, title=$title, url=$url, verified=$verified, ]';
  }

  Key.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    id = json['id'];
    key = json['key'];
    keyId = json['key_id'];
    readOnly = json['read_only'];
    title = json['title'];
    url = json['url'];
    verified = json['verified'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (key != null)
      json['key'] = key;
    if (keyId != null)
      json['key_id'] = keyId;
    if (readOnly != null)
      json['read_only'] = readOnly;
    if (title != null)
      json['title'] = title;
    if (url != null)
      json['url'] = url;
    if (verified != null)
      json['verified'] = verified;
    return json;
  }

  static List<Key> listFromJson(List<dynamic> json) {
    return json == null ? List<Key>() : json.map((value) => Key.fromJson(value)).toList();
  }

  static Map<String, Key> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Key>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Key.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Key-objects as value to a dart map
  static Map<String, List<Key>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Key>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Key.listFromJson(value);
       });
     }
     return map;
  }
}

