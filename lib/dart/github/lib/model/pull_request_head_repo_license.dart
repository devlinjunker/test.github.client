part of openapi.api;

class PullRequestHeadRepoLicense {
  
  String key = null;
  
  String name = null;
  
  String nodeId = null;
  
  String spdxId = null;
  
  String url = null;

  PullRequestHeadRepoLicense({
    this.key,
    this.name,
    this.nodeId,
    this.spdxId,
    this.url,
  });

  @override
  String toString() {
    return 'PullRequestHeadRepoLicense[key=$key, name=$name, nodeId=$nodeId, spdxId=$spdxId, url=$url, ]';
  }

  PullRequestHeadRepoLicense.fromJson(Map<String, dynamic> json) {
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
      json['spdx_id'] = spdxId;
      json['url'] = url;
    return json;
  }

  static List<PullRequestHeadRepoLicense> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestHeadRepoLicense>() : json.map((value) => PullRequestHeadRepoLicense.fromJson(value)).toList();
  }

  static Map<String, PullRequestHeadRepoLicense> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestHeadRepoLicense>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestHeadRepoLicense.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestHeadRepoLicense-objects as value to a dart map
  static Map<String, List<PullRequestHeadRepoLicense>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestHeadRepoLicense>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestHeadRepoLicense.listFromJson(value);
       });
     }
     return map;
  }
}

