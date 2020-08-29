part of openapi.api;

class GitRef {
  
  String nodeId = null;
  
  GitRefObject object = null;
  
  String ref = null;
  
  String url = null;

  GitRef({
    this.nodeId,
    this.object,
    this.ref,
    this.url,
  });

  @override
  String toString() {
    return 'GitRef[nodeId=$nodeId, object=$object, ref=$ref, url=$url, ]';
  }

  GitRef.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    nodeId = json['node_id'];
    object = (json['object'] == null) ?
      null :
      GitRefObject.fromJson(json['object']);
    ref = json['ref'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (object != null)
      json['object'] = object;
    if (ref != null)
      json['ref'] = ref;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<GitRef> listFromJson(List<dynamic> json) {
    return json == null ? List<GitRef>() : json.map((value) => GitRef.fromJson(value)).toList();
  }

  static Map<String, GitRef> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitRef>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitRef.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitRef-objects as value to a dart map
  static Map<String, List<GitRef>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitRef>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitRef.listFromJson(value);
       });
     }
     return map;
  }
}

