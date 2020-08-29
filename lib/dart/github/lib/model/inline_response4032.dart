part of openapi.api;

class InlineResponse4032 {
  
  String documentationUrl = null;
  
  List<String> errors = [];
  
  String message = null;

  InlineResponse4032({
    this.documentationUrl,
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse4032[documentationUrl=$documentationUrl, errors=$errors, message=$message, ]';
  }

  InlineResponse4032.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    documentationUrl = json['documentation_url'];
    errors = (json['errors'] == null) ?
      null :
      (json['errors'] as List).cast<String>();
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (documentationUrl != null)
      json['documentation_url'] = documentationUrl;
    if (errors != null)
      json['errors'] = errors;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse4032> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse4032>() : json.map((value) => InlineResponse4032.fromJson(value)).toList();
  }

  static Map<String, InlineResponse4032> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse4032>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse4032.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse4032-objects as value to a dart map
  static Map<String, List<InlineResponse4032>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse4032>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse4032.listFromJson(value);
       });
     }
     return map;
  }
}

