part of openapi.api;

class ContentTree {
  
  ContentFileLinks links = null;
  
  String downloadUrl = null;
  
  List<ContentTreeEntries> entries = [];
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String type = null;
  
  String url = null;

  ContentTree({
    this.links,
    this.downloadUrl,
    this.entries,
    this.gitUrl,
    this.htmlUrl,
    this.name,
    this.path,
    this.sha,
    this.size,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'ContentTree[links=$links, downloadUrl=$downloadUrl, entries=$entries, gitUrl=$gitUrl, htmlUrl=$htmlUrl, name=$name, path=$path, sha=$sha, size=$size, type=$type, url=$url, ]';
  }

  ContentTree.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      ContentFileLinks.fromJson(json['_links']);
    downloadUrl = json['download_url'];
    entries = (json['entries'] == null) ?
      null :
      ContentTreeEntries.listFromJson(json['entries']);
    gitUrl = json['git_url'];
    htmlUrl = json['html_url'];
    name = json['name'];
    path = json['path'];
    sha = json['sha'];
    size = json['size'];
    type = json['type'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (links != null)
      json['_links'] = links;
      json['download_url'] = downloadUrl;
    if (entries != null)
      json['entries'] = entries;
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
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ContentTree> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentTree>() : json.map((value) => ContentTree.fromJson(value)).toList();
  }

  static Map<String, ContentTree> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentTree>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentTree.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentTree-objects as value to a dart map
  static Map<String, List<ContentTree>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentTree>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentTree.listFromJson(value);
       });
     }
     return map;
  }
}

