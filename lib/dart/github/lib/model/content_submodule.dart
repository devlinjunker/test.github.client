part of openapi.api;

class ContentSubmodule {
  
  ContentFileLinks links = null;
  
  String downloadUrl = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String submoduleGitUrl = null;
  
  String type = null;
  
  String url = null;

  ContentSubmodule({
    this.links,
    this.downloadUrl,
    this.gitUrl,
    this.htmlUrl,
    this.name,
    this.path,
    this.sha,
    this.size,
    this.submoduleGitUrl,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'ContentSubmodule[links=$links, downloadUrl=$downloadUrl, gitUrl=$gitUrl, htmlUrl=$htmlUrl, name=$name, path=$path, sha=$sha, size=$size, submoduleGitUrl=$submoduleGitUrl, type=$type, url=$url, ]';
  }

  ContentSubmodule.fromJson(Map<String, dynamic> json) {
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
    submoduleGitUrl = json['submodule_git_url'];
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
    if (submoduleGitUrl != null)
      json['submodule_git_url'] = submoduleGitUrl;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ContentSubmodule> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentSubmodule>() : json.map((value) => ContentSubmodule.fromJson(value)).toList();
  }

  static Map<String, ContentSubmodule> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentSubmodule>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentSubmodule.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentSubmodule-objects as value to a dart map
  static Map<String, List<ContentSubmodule>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentSubmodule>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentSubmodule.listFromJson(value);
       });
     }
     return map;
  }
}

