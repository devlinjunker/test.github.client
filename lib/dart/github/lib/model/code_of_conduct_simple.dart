part of openapi.api;

class CodeOfConductSimple {
  
  String htmlUrl = null;
  
  String key = null;
  
  String name = null;
  
  String url = null;

  CodeOfConductSimple({
    this.htmlUrl,
    this.key,
    this.name,
    this.url,
  });

  @override
  String toString() {
    return 'CodeOfConductSimple[htmlUrl=$htmlUrl, key=$key, name=$name, url=$url, ]';
  }

  CodeOfConductSimple.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    htmlUrl = json['html_url'];
    key = json['key'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['html_url'] = htmlUrl;
    if (key != null)
      json['key'] = key;
    if (name != null)
      json['name'] = name;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CodeOfConductSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<CodeOfConductSimple>() : json.map((value) => CodeOfConductSimple.fromJson(value)).toList();
  }

  static Map<String, CodeOfConductSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CodeOfConductSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CodeOfConductSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CodeOfConductSimple-objects as value to a dart map
  static Map<String, List<CodeOfConductSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CodeOfConductSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CodeOfConductSimple.listFromJson(value);
       });
     }
     return map;
  }
}

