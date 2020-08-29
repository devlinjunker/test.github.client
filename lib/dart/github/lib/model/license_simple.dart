part of openapi.api;

class LicenseSimple {
  
  String htmlUrl = null;
  
  String key = null;
  
  String name = null;
  
  String nodeId = null;
  
  String spdxId = null;
  
  String url = null;

  LicenseSimple({
    this.htmlUrl,
    this.key,
    this.name,
    this.nodeId,
    this.spdxId,
    this.url,
  });

  @override
  String toString() {
    return 'LicenseSimple[htmlUrl=$htmlUrl, key=$key, name=$name, nodeId=$nodeId, spdxId=$spdxId, url=$url, ]';
  }

  LicenseSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    htmlUrl = json['html_url'];
    key = json['key'];
    name = json['name'];
    nodeId = json['node_id'];
    spdxId = json['spdx_id'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (key != null)
      json['key'] = key;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['spdx_id'] = spdxId;
      json['url'] = url;
    return json;
  }

  static List<LicenseSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<LicenseSimple>() : json.map((value) => LicenseSimple.fromJson(value)).toList();
  }

  static Map<String, LicenseSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, LicenseSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = LicenseSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of LicenseSimple-objects as value to a dart map
  static Map<String, List<LicenseSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<LicenseSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = LicenseSimple.listFromJson(value);
       });
     }
     return map;
  }
}

