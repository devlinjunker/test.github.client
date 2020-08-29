part of openapi.api;

class ContentFile {
  
  ContentFileLinks links = null;
  
  String content = null;
  
  String downloadUrl = null;
  
  String encoding = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String submoduleGitUrl = null;
  
  String target = null;
  
  String type = null;
  
  String url = null;

  ContentFile({
    this.links,
    this.content,
    this.downloadUrl,
    this.encoding,
    this.gitUrl,
    this.htmlUrl,
    this.name,
    this.path,
    this.sha,
    this.size,
    this.submoduleGitUrl,
    this.target,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'ContentFile[links=$links, content=$content, downloadUrl=$downloadUrl, encoding=$encoding, gitUrl=$gitUrl, htmlUrl=$htmlUrl, name=$name, path=$path, sha=$sha, size=$size, submoduleGitUrl=$submoduleGitUrl, target=$target, type=$type, url=$url, ]';
  }

  ContentFile.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      ContentFileLinks.fromJson(json['_links']);
    content = json['content'];
    downloadUrl = json['download_url'];
    encoding = json['encoding'];
    gitUrl = json['git_url'];
    htmlUrl = json['html_url'];
    name = json['name'];
    path = json['path'];
    sha = json['sha'];
    size = json['size'];
    submoduleGitUrl = json['submodule_git_url'];
    target = json['target'];
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
    if (encoding != null)
      json['encoding'] = encoding;
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
    if (target != null)
      json['target'] = target;
    if (type != null)
      json['type'] = type;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ContentFile> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentFile>() : json.map((value) => ContentFile.fromJson(value)).toList();
  }

  static Map<String, ContentFile> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentFile>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentFile.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentFile-objects as value to a dart map
  static Map<String, List<ContentFile>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentFile>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentFile.listFromJson(value);
       });
     }
     return map;
  }
}

