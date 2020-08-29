part of openapi.api;

class BasicError {
  
  String documentationUrl = null;
  
  String message = null;

  BasicError({
    this.documentationUrl,
    this.message,
  });

  @override
  String toString() {
    return 'BasicError[documentationUrl=$documentationUrl, message=$message, ]';
  }

  BasicError.fromJson(Map<String, dynamic> json) {
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

  static List<BasicError> listFromJson(List<dynamic> json) {
    return json == null ? List<BasicError>() : json.map((value) => BasicError.fromJson(value)).toList();
  }

  static Map<String, BasicError> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, BasicError>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = BasicError.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of BasicError-objects as value to a dart map
  static Map<String, List<BasicError>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<BasicError>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = BasicError.listFromJson(value);
       });
     }
     return map;
  }
}

