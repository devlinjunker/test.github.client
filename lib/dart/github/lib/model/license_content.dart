part of openapi.api;

class LicenseContent {
  
  ContentFileLinks links = null;
  
  String content = null;
  
  String downloadUrl = null;
  
  String encoding = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  LicenseSimple license = null;
  
  String name = null;
  
  String path = null;
  
  String sha = null;
  
  int size = null;
  
  String type = null;
  
  String url = null;

  LicenseContent({
    this.links,
    this.content,
    this.downloadUrl,
    this.encoding,
    this.gitUrl,
    this.htmlUrl,
    this.license,
    this.name,
    this.path,
    this.sha,
    this.size,
    this.type,
    this.url,
  });

  @override
  String toString() {
    return 'LicenseContent[links=$links, content=$content, downloadUrl=$downloadUrl, encoding=$encoding, gitUrl=$gitUrl, htmlUrl=$htmlUrl, license=$license, name=$name, path=$path, sha=$sha, size=$size, type=$type, url=$url, ]';
  }

  LicenseContent.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    links = (json['_links'] == null) ?
      null :
      ContentFileLinks.fromJson(json['_links']);
    content = json['content'];
    downloadUrl = json['download_url'];
    encoding = json['encoding'];
    gitUrl = json['git_url'];
    htmlUrl = json['html_url'];
    license = (json['license'] == null) ?
      null :
      LicenseSimple.fromJson(json['license']);
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
    if (encoding != null)
      json['encoding'] = encoding;
      json['git_url'] = gitUrl;
      json['html_url'] = htmlUrl;
      json['license'] = license;
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

  static List<LicenseContent> listFromJson(List<dynamic> json) {
    return json == null ? List<LicenseContent>() : json.map((value) => LicenseContent.fromJson(value)).toList();
  }

  static Map<String, LicenseContent> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, LicenseContent>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = LicenseContent.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of LicenseContent-objects as value to a dart map
  static Map<String, List<LicenseContent>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<LicenseContent>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = LicenseContent.listFromJson(value);
       });
     }
     return map;
  }
}

