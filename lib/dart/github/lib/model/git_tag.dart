part of openapi.api;

class GitTag {
  /* Message describing the purpose of the tag */
  String message = null;
  
  String nodeId = null;
  
  GitTagObject object = null;
  
  String sha = null;
  /* Name of the tag */
  String tag = null;
  
  GitTagTagger tagger = null;
  /* URL for the tag */
  String url = null;
  
  Verification verification = null;

  GitTag({
    this.message,
    this.nodeId,
    this.object,
    this.sha,
    this.tag,
    this.tagger,
    this.url,
    this.verification,
  });

  @override
  String toString() {
    return 'GitTag[message=$message, nodeId=$nodeId, object=$object, sha=$sha, tag=$tag, tagger=$tagger, url=$url, verification=$verification, ]';
  }

  GitTag.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    message = json['message'];
    nodeId = json['node_id'];
    object = (json['object'] == null) ?
      null :
      GitTagObject.fromJson(json['object']);
    sha = json['sha'];
    tag = json['tag'];
    tagger = (json['tagger'] == null) ?
      null :
      GitTagTagger.fromJson(json['tagger']);
    url = json['url'];
    verification = (json['verification'] == null) ?
      null :
      Verification.fromJson(json['verification']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (message != null)
      json['message'] = message;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (object != null)
      json['object'] = object;
    if (sha != null)
      json['sha'] = sha;
    if (tag != null)
      json['tag'] = tag;
    if (tagger != null)
      json['tagger'] = tagger;
    if (url != null)
      json['url'] = url;
    if (verification != null)
      json['verification'] = verification;
    return json;
  }

  static List<GitTag> listFromJson(List<dynamic> json) {
    return json == null ? List<GitTag>() : json.map((value) => GitTag.fromJson(value)).toList();
  }

  static Map<String, GitTag> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitTag>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitTag.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitTag-objects as value to a dart map
  static Map<String, List<GitTag>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitTag>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitTag.listFromJson(value);
       });
     }
     return map;
  }
}

