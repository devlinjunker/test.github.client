part of openapi.api;

class ContentSymlink {
  
  ContentFileLinks links = null;
  
  String downloadUrl = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String target = null;
  
  String type = null;
  
  String url = null;

  ContentSymlink({
    this.links,
    this.downloadUrl,
    this.gitUrl,
    this.htmlUrl,
    this.name,
    this.path,
    this.sha,
    this.size,
    this.target,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'ContentSymlink[links=$links, downloadUrl=$downloadUrl, gitUrl=$gitUrl, htmlUrl=$htmlUrl, name=$name, path=$path, sha=$sha, size=$size, target=$target, type=$type, url=$url, ]';
  }

  ContentSymlink.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      ContentFileLinks.fromJson(json['_links']);
    downloadUrl = json['download_url'];
    gitUrl = json['git_url'];
    htmlUrl = json['html_url'];
    name = json['name'];
    path = json['path'];
    sha = json['sha'];
    size = json['size'];
    target = json['target'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (links != null)
      json['_links'] = links;
      json['download_url'] = downloadUrl;
      json['git_url'] = gitUrl;
      json['html_url'] = htmlUrl;
    if (name != null)
      json['name'] = name;
    if (path != null)
      json['path'] = path;
    if (sha != null)
      json['sha'] = sha;
    if (size != null)
      json['size'] = size;
    if (target != null)
      json['target'] = target;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ContentSymlink> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentSymlink>() : json.map((value) => ContentSymlink.fromJson(value)).toList();
  }

  static Map<String, ContentSymlink> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentSymlink>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentSymlink.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentSymlink-objects as value to a dart map
  static Map<String, List<ContentSymlink>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentSymlink>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentSymlink.listFromJson(value);
       });
     }
     return map;
  }
}

