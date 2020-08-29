part of openapi.api;

class InlineResponse4221 {
  
  String documentationUrl = null;
  
  List<InlineResponse422Errors> errors = [];
  
  String message = null;

  InlineResponse4221({
    this.documentationUrl,
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse4221[documentationUrl=$documentationUrl, errors=$errors, message=$message, ]';
  }

  InlineResponse4221.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    documentationUrl = json['documentation_url'];
    errors = (json['errors'] == null) ?
      null :
      InlineResponse422Errors.listFromJson(json['errors']);
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

  static List<InlineResponse4221> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse4221>() : json.map((value) => InlineResponse4221.fromJson(value)).toList();
  }

  static Map<String, InlineResponse4221> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse4221>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse4221.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse4221-objects as value to a dart map
  static Map<String, List<InlineResponse4221>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse4221>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse4221.listFromJson(value);
       });
     }
     return map;
  }
}

