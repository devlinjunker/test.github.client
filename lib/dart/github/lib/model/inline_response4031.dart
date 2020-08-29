part of openapi.api;

class InlineResponse4031 {
  
  String documentationUrl = null;
  
  String message = null;

  InlineResponse4031({
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse4031[documentationUrl=$documentationUrl, message=$message, ]';
  }

  InlineResponse4031.fromJson(Map<String, dynamic> json) {
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

  static List<InlineResponse4031> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse4031>() : json.map((value) => InlineResponse4031.fromJson(value)).toList();
  }

  static Map<String, InlineResponse4031> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse4031>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse4031.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse4031-objects as value to a dart map
  static Map<String, List<InlineResponse4031>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse4031>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse4031.listFromJson(value);
       });
     }
     return map;
  }
}

