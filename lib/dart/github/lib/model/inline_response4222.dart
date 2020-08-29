part of openapi.api;

class InlineResponse4222 {
  
  String documentationUrl = null;
  
  List<InlineResponse422Errors> errors = [];
  
  String message = null;

  InlineResponse4222({
    this.documentationUrl,
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse4222[documentationUrl=$documentationUrl, errors=$errors, message=$message, ]';
  }

  InlineResponse4222.fromJson(Map<String, dynamic> json) {
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

  static List<InlineResponse4222> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse4222>() : json.map((value) => InlineResponse4222.fromJson(value)).toList();
  }

  static Map<String, InlineResponse4222> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse4222>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse4222.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse4222-objects as value to a dart map
  static Map<String, List<InlineResponse4222>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse4222>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse4222.listFromJson(value);
       });
     }
     return map;
  }
}

