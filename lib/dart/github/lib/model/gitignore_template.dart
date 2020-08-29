part of openapi.api;

class GitignoreTemplate {
  
  String name = null;
  
  String source_ = null;

  GitignoreTemplate({
    this.name,
    this.source_,
  });

  @override
  String toString() {
    return 'GitignoreTemplate[name=$name, source_=$source_, ]';
  }

  GitignoreTemplate.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    name = json['name'];
    source_ = json['source'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (name != null)
      json['name'] = name;
    if (source_ != null)
      json['source'] = source_;
    return json;
  }

  static List<GitignoreTemplate> listFromJson(List<dynamic> json) {
    return json == null ? List<GitignoreTemplate>() : json.map((value) => GitignoreTemplate.fromJson(value)).toList();
  }

  static Map<String, GitignoreTemplate> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, GitignoreTemplate>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = GitignoreTemplate.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of GitignoreTemplate-objects as value to a dart map
  static Map<String, List<GitignoreTemplate>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<GitignoreTemplate>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = GitignoreTemplate.listFromJson(value);
       });
     }
     return map;
  }
}

