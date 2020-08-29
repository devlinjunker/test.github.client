part of openapi.api;

class DeployKey {
  
  String createdAt = null;
  
  int id = null;
  
  String key = null;
  
  bool readOnly = null;
  
  String title = null;
  
  String url = null;
  
  bool verified = null;

  DeployKey({
    this.createdAt,
    this.id,
    this.key,
    this.readOnly,
    this.title,
    this.url,
    this.verified,
  });

  @override
  String toString() {
    return 'DeployKey[createdAt=$createdAt, id=$id, key=$key, readOnly=$readOnly, title=$title, url=$url, verified=$verified, ]';
  }

  DeployKey.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    createdAt = json['created_at'];
    id = json['id'];
    key = json['key'];
    readOnly = json['read_only'];
    title = json['title'];
    url = json['url'];
    verified = json['verified'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (createdAt != null)
      json['created_at'] = createdAt;
    if (id != null)
      json['id'] = id;
    if (key != null)
      json['key'] = key;
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

  static List<DeployKey> listFromJson(List<dynamic> json) {
    return json == null ? List<DeployKey>() : json.map((value) => DeployKey.fromJson(value)).toList();
  }

  static Map<String, DeployKey> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, DeployKey>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = DeployKey.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of DeployKey-objects as value to a dart map
  static Map<String, List<DeployKey>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<DeployKey>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = DeployKey.listFromJson(value);
       });
     }
     return map;
  }
}

