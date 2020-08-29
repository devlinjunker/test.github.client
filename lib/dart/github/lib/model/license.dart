part of openapi.api;

class License {
  
  String body = null;
  
  List<String> conditions = [];
  
  String description = null;
  
  bool featured = null;
  
  String htmlUrl = null;
  
  String implementation = null;
  
  String key = null;
  
  List<String> limitations = [];
  
  String name = null;
  
  String nodeId = null;
  
  List<String> permissions = [];
  
  String spdxId = null;
  
  String url = null;

  License({
    this.body,
    this.conditions,
    this.description,
    this.featured,
    this.htmlUrl,
    this.implementation,
    this.key,
    this.limitations,
    this.name,
    this.nodeId,
    this.permissions,
    this.spdxId,
    this.url,
  });

  @override
  String toString() {
    return 'License[body=$body, conditions=$conditions, description=$description, featured=$featured, htmlUrl=$htmlUrl, implementation=$implementation, key=$key, limitations=$limitations, name=$name, nodeId=$nodeId, permissions=$permissions, spdxId=$spdxId, url=$url, ]';
  }

  License.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    conditions = (json['conditions'] == null) ?
      null :
      (json['conditions'] as List).cast<String>();
    description = json['description'];
    featured = json['featured'];
    htmlUrl = json['html_url'];
    implementation = json['implementation'];
    key = json['key'];
    limitations = (json['limitations'] == null) ?
      null :
      (json['limitations'] as List).cast<String>();
    name = json['name'];
    nodeId = json['node_id'];
    permissions = (json['permissions'] == null) ?
      null :
      (json['permissions'] as List).cast<String>();
    spdxId = json['spdx_id'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (conditions != null)
      json['conditions'] = conditions;
    if (description != null)
      json['description'] = description;
    if (featured != null)
      json['featured'] = featured;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (implementation != null)
      json['implementation'] = implementation;
    if (key != null)
      json['key'] = key;
    if (limitations != null)
      json['limitations'] = limitations;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (permissions != null)
      json['permissions'] = permissions;
      json['spdx_id'] = spdxId;
      json['url'] = url;
    return json;
  }

  static List<License> listFromJson(List<dynamic> json) {
    return json == null ? List<License>() : json.map((value) => License.fromJson(value)).toList();
  }

  static Map<String, License> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, License>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = License.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of License-objects as value to a dart map
  static Map<String, List<License>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<License>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = License.listFromJson(value);
       });
     }
     return map;
  }
}

