part of openapi.api;

class InlineResponse415 {
  
  String documentationUrl = null;
  
  String message = null;

  InlineResponse415({
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse415[documentationUrl=$documentationUrl, message=$message, ]';
  }

  InlineResponse415.fromJson(Map<String, dynamic> json) {
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

  static List<InlineResponse415> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse415>() : json.map((value) => InlineResponse415.fromJson(value)).toList();
  }

  static Map<String, InlineResponse415> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse415>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse415.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse415-objects as value to a dart map
  static Map<String, List<InlineResponse415>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse415>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse415.listFromJson(value);
       });
     }
     return map;
  }
}

