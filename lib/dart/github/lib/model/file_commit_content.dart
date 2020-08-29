part of openapi.api;

class FileCommitContent {
  
  FileCommitContentLinks links = null;
  
  String downloadUrl = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String type = null;
  
  String url = null;

  FileCommitContent({
    this.links,
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
    return 'FileCommitContent[links=$links, downloadUrl=$downloadUrl, gitUrl=$gitUrl, htmlUrl=$htmlUrl, name=$name, path=$path, sha=$sha, size=$size, type=$type, url=$url, ]';
  }

  FileCommitContent.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      FileCommitContentLinks.fromJson(json['_links']);
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
    if (downloadUrl != null)
      json['download_url'] = downloadUrl;
    if (gitUrl != null)
      json['git_url'] = gitUrl;
    if (htmlUrl != null)
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

  static List<FileCommitContent> listFromJson(List<dynamic> json) {
    return json == null ? List<FileCommitContent>() : json.map((value) => FileCommitContent.fromJson(value)).toList();
  }

  static Map<String, FileCommitContent> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, FileCommitContent>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = FileCommitContent.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of FileCommitContent-objects as value to a dart map
  static Map<String, List<FileCommitContent>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<FileCommitContent>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = FileCommitContent.listFromJson(value);
       });
     }
     return map;
  }
}

