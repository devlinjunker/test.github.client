part of openapi.api;

class ContentTreeEntries {
  
  ContentFileLinks links = null;
  
  String content = null;
  
  String downloadUrl = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String type = null;
  
  String url = null;

  ContentTreeEntries({
    this.links,
    this.content,
    this.downloadUrl,
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
    return 'ContentTreeEntries[links=$links, content=$content, downloadUrl=$downloadUrl, gitUrl=$gitUrl, htmlUrl=$htmlUrl, name=$name, path=$path, sha=$sha, size=$size, type=$type, url=$url, ]';
  }

  ContentTreeEntries.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      ContentFileLinks.fromJson(json['_links']);
    content = json['content'];
    downloadUrl = json['download_url'];
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
    if (content != null)
      json['content'] = content;
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
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ContentTreeEntries> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentTreeEntries>() : json.map((value) => ContentTreeEntries.fromJson(value)).toList();
  }

  static Map<String, ContentTreeEntries> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentTreeEntries>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentTreeEntries.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentTreeEntries-objects as value to a dart map
  static Map<String, List<ContentTreeEntries>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentTreeEntries>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentTreeEntries.listFromJson(value);
       });
     }
     return map;
  }
}

