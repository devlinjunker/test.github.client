part of openapi.api;

class Blob {
  
  String content = null;
  
  String encoding = null;
  
  String highlightedContent = null;
  
  String nodeId = null;
  
  String sha = null;
  
  int size = null;
  
  String url = null;

  Blob({
    this.content,
    this.encoding,
    this.highlightedContent,
    this.nodeId,
    this.sha,
    this.size,
    this.url,
  });

  @override
  String toString() {
    return 'Blob[content=$content, encoding=$encoding, highlightedContent=$highlightedContent, nodeId=$nodeId, sha=$sha, size=$size, url=$url, ]';
  }

  Blob.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
    encoding = json['encoding'];
    highlightedContent = json['highlighted_content'];
    nodeId = json['node_id'];
    sha = json['sha'];
    size = json['size'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    if (encoding != null)
      json['encoding'] = encoding;
    if (highlightedContent != null)
      json['highlighted_content'] = highlightedContent;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (sha != null)
      json['sha'] = sha;
      json['size'] = size;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Blob> listFromJson(List<dynamic> json) {
    return json == null ? List<Blob>() : json.map((value) => Blob.fromJson(value)).toList();
  }

  static Map<String, Blob> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Blob>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Blob.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Blob-objects as value to a dart map
  static Map<String, List<Blob>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Blob>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Blob.listFromJson(value);
       });
     }
     return map;
  }
}

