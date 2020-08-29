part of openapi.api;

class CommunityHealthFile {
  
  String htmlUrl = null;
  
  String url = null;

  CommunityHealthFile({
    this.htmlUrl,
    this.url,
  });

  @override
  String toString() {
    return 'CommunityHealthFile[htmlUrl=$htmlUrl, url=$url, ]';
  }

  CommunityHealthFile.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    htmlUrl = json['html_url'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CommunityHealthFile> listFromJson(List<dynamic> json) {
    return json == null ? List<CommunityHealthFile>() : json.map((value) => CommunityHealthFile.fromJson(value)).toList();
  }

  static Map<String, CommunityHealthFile> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommunityHealthFile>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommunityHealthFile.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommunityHealthFile-objects as value to a dart map
  static Map<String, List<CommunityHealthFile>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommunityHealthFile>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommunityHealthFile.listFromJson(value);
       });
     }
     return map;
  }
}

