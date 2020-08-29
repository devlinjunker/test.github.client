part of openapi.api;

class ValidationErrorSimple {
  
  String documentationUrl = null;
  
  List<String> errors = [];
  
  String message = null;

  ValidationErrorSimple({
    this.documentationUrl,
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'ValidationErrorSimple[documentationUrl=$documentationUrl, errors=$errors, message=$message, ]';
  }

  ValidationErrorSimple.fromJson(Map<String, dynamic> json) {
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

  static List<ValidationErrorSimple> listFromJson(List<dynamic> json) {
    return json == null ? List<ValidationErrorSimple>() : json.map((value) => ValidationErrorSimple.fromJson(value)).toList();
  }

  static Map<String, ValidationErrorSimple> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ValidationErrorSimple>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ValidationErrorSimple.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ValidationErrorSimple-objects as value to a dart map
  static Map<String, List<ValidationErrorSimple>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ValidationErrorSimple>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ValidationErrorSimple.listFromJson(value);
       });
     }
     return map;
  }
}

