part of openapi.api;

class ContentFileLinks {
  
  String git = null;
  
  String html = null;
  
  String self = null;

  ContentFileLinks({
    this.git,
    this.html,
    this.self,
  });

  @override
  String toString() {
    return 'ContentFileLinks[git=$git, html=$html, self=$self, ]';
  }

  ContentFileLinks.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    git = json['git'];
    html = json['html'];
    self = json['self'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['git'] = git;
      json['html'] = html;
    if (self != null)
      json['self'] = self;
    return json;
  }

  static List<ContentFileLinks> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentFileLinks>() : json.map((value) => ContentFileLinks.fromJson(value)).toList();
  }

  static Map<String, ContentFileLinks> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentFileLinks>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentFileLinks.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentFileLinks-objects as value to a dart map
  static Map<String, List<ContentFileLinks>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentFileLinks>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentFileLinks.listFromJson(value);
       });
     }
     return map;
  }
}

