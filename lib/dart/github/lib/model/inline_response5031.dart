part of openapi.api;

class InlineResponse5031 {
  
  String code = null;
  
  String documentationUrl = null;
  
  List<InlineResponse5031Errors> errors = [];
  
  String message = null;

  InlineResponse5031({
    this.code,
    this.documentationUrl,
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse5031[code=$code, documentationUrl=$documentationUrl, errors=$errors, message=$message, ]';
  }

  InlineResponse5031.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    documentationUrl = json['documentation_url'];
    errors = (json['errors'] == null) ?
      null :
      InlineResponse5031Errors.listFromJson(json['errors']);
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (code != null)
      json['code'] = code;
    if (documentationUrl != null)
      json['documentation_url'] = documentationUrl;
    if (errors != null)
      json['errors'] = errors;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse5031> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse5031>() : json.map((value) => InlineResponse5031.fromJson(value)).toList();
  }

  static Map<String, InlineResponse5031> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse5031>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse5031.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse5031-objects as value to a dart map
  static Map<String, List<InlineResponse5031>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse5031>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse5031.listFromJson(value);
       });
     }
     return map;
  }
}

