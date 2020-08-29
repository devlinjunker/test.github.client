part of openapi.api;

class BaseGistFiles {
  
  String filename = null;
  
  String language = null;
  
  String rawUrl = null;
  
  int size = null;
  
  String type = null;

  BaseGistFiles({
    this.filename,
    this.language,
    this.rawUrl,
    this.size,
    this.type,
  });

  @override
  String toString() {
    return 'BaseGistFiles[filename=$filename, language=$language, rawUrl=$rawUrl, size=$size, type=$type, ]';
  }

  BaseGistFiles.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    filename = json['filename'];
    language = json['language'];
    rawUrl = json['raw_url'];
    size = json['size'];
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (filename != null)
      json['filename'] = filename;
    if (language != null)
      json['language'] = language;
    if (rawUrl != null)
      json['raw_url'] = rawUrl;
    if (size != null)
      json['size'] = size;
    if (type != null)
      json['type'] = type;
    return json;
  }

  static List<BaseGistFiles> listFromJson(List<dynamic> json) {
    return json == null ? List<BaseGistFiles>() : json.map((value) => BaseGistFiles.fromJson(value)).toList();
  }

  static Map<String, BaseGistFiles> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BaseGistFiles>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BaseGistFiles.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BaseGistFiles-objects as value to a dart map
  static Map<String, List<BaseGistFiles>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BaseGistFiles>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BaseGistFiles.listFromJson(value);
       });
     }
     return map;
  }
}

