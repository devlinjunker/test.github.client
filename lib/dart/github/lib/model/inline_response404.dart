part of openapi.api;

class InlineResponse404 {
  
  String documentationUrl = null;
  
  String message = null;

  InlineResponse404({
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse404[documentationUrl=$documentationUrl, message=$message, ]';
  }

  InlineResponse404.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    documentationUrl = json['documentation_url'];
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (documentationUrl != null)
      json['documentation_url'] = documentationUrl;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse404> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse404>() : json.map((value) => InlineResponse404.fromJson(value)).toList();
  }

  static Map<String, InlineResponse404> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse404>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse404.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse404-objects as value to a dart map
  static Map<String, List<InlineResponse404>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse404>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse404.listFromJson(value);
       });
     }
     return map;
  }
}

