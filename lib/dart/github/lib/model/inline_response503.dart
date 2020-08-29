part of openapi.api;

class InlineResponse503 {
  
  String code = null;
  
  String documentationUrl = null;
  
  String message = null;

  InlineResponse503({
    this.code,
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse503[code=$code, documentationUrl=$documentationUrl, message=$message, ]';
  }

  InlineResponse503.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    documentationUrl = json['documentation_url'];
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (code != null)
      json['code'] = code;
    if (documentationUrl != null)
      json['documentation_url'] = documentationUrl;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse503> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse503>() : json.map((value) => InlineResponse503.fromJson(value)).toList();
  }

  static Map<String, InlineResponse503> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse503>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse503.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse503-objects as value to a dart map
  static Map<String, List<InlineResponse503>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse503>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse503.listFromJson(value);
       });
     }
     return map;
  }
}

