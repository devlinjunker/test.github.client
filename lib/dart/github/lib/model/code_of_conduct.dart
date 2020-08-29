part of openapi.api;

class CodeOfConduct {
  
  String body = null;
  
  String htmlUrl = null;
  
  String key = null;
  
  String name = null;
  
  String url = null;

  CodeOfConduct({
    this.body,
    this.htmlUrl,
    this.key,
    this.name,
    this.url,
  });

  @override
  String toString() {
    return 'CodeOfConduct[body=$body, htmlUrl=$htmlUrl, key=$key, name=$name, url=$url, ]';
  }

  CodeOfConduct.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    htmlUrl = json['html_url'];
    key = json['key'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
      json['html_url'] = htmlUrl;
    if (key != null)
      json['key'] = key;
    if (name != null)
      json['name'] = name;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CodeOfConduct> listFromJson(List<dynamic> json) {
    return json == null ? List<CodeOfConduct>() : json.map((value) => CodeOfConduct.fromJson(value)).toList();
  }

  static Map<String, CodeOfConduct> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CodeOfConduct>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CodeOfConduct.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CodeOfConduct-objects as value to a dart map
  static Map<String, List<CodeOfConduct>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CodeOfConduct>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CodeOfConduct.listFromJson(value);
       });
     }
     return map;
  }
}

