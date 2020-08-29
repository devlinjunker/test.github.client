part of openapi.api;

class GistSimpleFiles {
  
  String content = null;
  
  String filename = null;
  
  String language = null;
  
  String rawUrl = null;
  
  int size = null;
  
  bool truncated = null;
  
  String type = null;

  GistSimpleFiles({
    this.content,
    this.filename,
    this.language,
    this.rawUrl,
    this.size,
    this.truncated,
    this.type,
  });

  @override
  String toString() {
    return 'GistSimpleFiles[content=$content, filename=$filename, language=$language, rawUrl=$rawUrl, size=$size, truncated=$truncated, type=$type, ]';
  }

  GistSimpleFiles.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    content = json['content'];
    filename = json['filename'];
    language = json['language'];
    rawUrl = json['raw_url'];
    size = json['size'];
    truncated = json['truncated'];
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (content != null)
      json['content'] = content;
    if (filename != null)
      json['filename'] = filename;
    if (language != null)
      json['language'] = language;
    if (rawUrl != null)
      json['raw_url'] = rawUrl;
    if (size != null)
      json['size'] = size;
    if (truncated != null)
      json['truncated'] = truncated;
    if (type != null)
      json['type'] = type;
    return json;
  }

  static List<GistSimpleFiles> listFromJson(List<dynamic> json) {
    return json == null ? List<GistSimpleFiles>() : json.map((value) => GistSimpleFiles.fromJson(value)).toList();
  }

  static Map<String, GistSimpleFiles> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GistSimpleFiles>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GistSimpleFiles.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GistSimpleFiles-objects as value to a dart map
  static Map<String, List<GistSimpleFiles>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GistSimpleFiles>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GistSimpleFiles.listFromJson(value);
       });
     }
     return map;
  }
}

