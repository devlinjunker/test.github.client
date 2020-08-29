part of openapi.api;

class InlineResponse409 {
  
  String documentationUrl = null;
  
  String message = null;

  InlineResponse409({
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse409[documentationUrl=$documentationUrl, message=$message, ]';
  }

  InlineResponse409.fromJson(Map<String, dynamic> json) {
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

  static List<InlineResponse409> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse409>() : json.map((value) => InlineResponse409.fromJson(value)).toList();
  }

  static Map<String, InlineResponse409> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse409>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse409.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse409-objects as value to a dart map
  static Map<String, List<InlineResponse409>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse409>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse409.listFromJson(value);
       });
     }
     return map;
  }
}

