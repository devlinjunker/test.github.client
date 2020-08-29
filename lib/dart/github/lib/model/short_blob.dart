part of openapi.api;

class ShortBlob {
  
  String sha = null;
  
  String url = null;

  ShortBlob({
    this.sha,
    this.url,
  });

  @override
  String toString() {
    return 'ShortBlob[sha=$sha, url=$url, ]';
  }

  ShortBlob.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    sha = json['sha'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (sha != null)
      json['sha'] = sha;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ShortBlob> listFromJson(List<dynamic> json) {
    return json == null ? List<ShortBlob>() : json.map((value) => ShortBlob.fromJson(value)).toList();
  }

  static Map<String, ShortBlob> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ShortBlob>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ShortBlob.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ShortBlob-objects as value to a dart map
  static Map<String, List<ShortBlob>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ShortBlob>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ShortBlob.listFromJson(value);
       });
     }
     return map;
  }
}

