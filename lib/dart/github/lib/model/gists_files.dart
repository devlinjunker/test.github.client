part of openapi.api;

class GistsFiles {
  /* Content of the file */
  String content = null;

  GistsFiles({
    this.content,
  });

  @override
  String toString() {
    return 'GistsFiles[content=$content, ]';
  }

  GistsFiles.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    return json;
  }

  static List<GistsFiles> listFromJson(List<dynamic> json) {
    return json == null ? List<GistsFiles>() : json.map((value) => GistsFiles.fromJson(value)).toList();
  }

  static Map<String, GistsFiles> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistsFiles>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistsFiles.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistsFiles-objects as value to a dart map
  static Map<String, List<GistsFiles>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistsFiles>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistsFiles.listFromJson(value);
       });
     }
     return map;
  }
}

