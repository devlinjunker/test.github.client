part of openapi.api;

class Tag {
  
  CommitSearchResultItemCommitTree commit = null;
  
  String name = null;
  
  String nodeId = null;
  
  String tarballUrl = null;
  
  String zipballUrl = null;

  Tag({
    this.commit,
    this.name,
    this.nodeId,
    this.tarballUrl,
    this.zipballUrl,
  });

  @override
  String toString() {
    return 'Tag[commit=$commit, name=$name, nodeId=$nodeId, tarballUrl=$tarballUrl, zipballUrl=$zipballUrl, ]';
  }

  Tag.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    commit = (json['commit'] == null) ?
      null :
      CommitSearchResultItemCommitTree.fromJson(json['commit']);
    name = json['name'];
    nodeId = json['node_id'];
    tarballUrl = json['tarball_url'];
    zipballUrl = json['zipball_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (commit != null)
      json['commit'] = commit;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (tarballUrl != null)
      json['tarball_url'] = tarballUrl;
    if (zipballUrl != null)
      json['zipball_url'] = zipballUrl;
    return json;
  }

  static List<Tag> listFromJson(List<dynamic> json) {
    return json == null ? List<Tag>() : json.map((value) => Tag.fromJson(value)).toList();
  }

  static Map<String, Tag> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Tag>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Tag.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Tag-objects as value to a dart map
  static Map<String, List<Tag>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Tag>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Tag.listFromJson(value);
       });
     }
     return map;
  }
}

