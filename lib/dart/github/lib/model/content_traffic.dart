part of openapi.api;

class ContentTraffic {
  
  int count = null;
  
  String path = null;
  
  String title = null;
  
  int uniques = null;

  ContentTraffic({
    this.count,
    this.path,
    this.title,
    this.uniques,
  });

  @override
  String toString() {
    return 'ContentTraffic[count=$count, path=$path, title=$title, uniques=$uniques, ]';
  }

  ContentTraffic.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    count = json['count'];
    path = json['path'];
    title = json['title'];
    uniques = json['uniques'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (count != null)
      json['count'] = count;
    if (path != null)
      json['path'] = path;
    if (title != null)
      json['title'] = title;
    if (uniques != null)
      json['uniques'] = uniques;
    return json;
  }

  static List<ContentTraffic> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentTraffic>() : json.map((value) => ContentTraffic.fromJson(value)).toList();
  }

  static Map<String, ContentTraffic> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentTraffic>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentTraffic.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentTraffic-objects as value to a dart map
  static Map<String, List<ContentTraffic>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentTraffic>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentTraffic.listFromJson(value);
       });
     }
     return map;
  }
}

