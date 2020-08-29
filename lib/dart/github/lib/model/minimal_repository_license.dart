part of openapi.api;

class MinimalRepositoryLicense {
  
  String key = null;
  
  String name = null;
  
  String nodeId = null;
  
  String spdxId = null;
  
  String url = null;

  MinimalRepositoryLicense({
    this.key,
    this.name,
    this.nodeId,
    this.spdxId,
    this.url,
  });

  @override
  String toString() {
    return 'MinimalRepositoryLicense[key=$key, name=$name, nodeId=$nodeId, spdxId=$spdxId, url=$url, ]';
  }

  MinimalRepositoryLicense.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    key = json['key'];
    name = json['name'];
    nodeId = json['node_id'];
    spdxId = json['spdx_id'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (key != null)
      json['key'] = key;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (spdxId != null)
      json['spdx_id'] = spdxId;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<MinimalRepositoryLicense> listFromJson(List<dynamic> json) {
    return json == null ? List<MinimalRepositoryLicense>() : json.map((value) => MinimalRepositoryLicense.fromJson(value)).toList();
  }

  static Map<String, MinimalRepositoryLicense> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, MinimalRepositoryLicense>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = MinimalRepositoryLicense.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of MinimalRepositoryLicense-objects as value to a dart map
  static Map<String, List<MinimalRepositoryLicense>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<MinimalRepositoryLicense>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = MinimalRepositoryLicense.listFromJson(value);
       });
     }
     return map;
  }
}

