part of openapi.api;

class ValidationError {
  
  String documentationUrl = null;
  
  List<ValidationErrorErrors> errors = [];
  
  String message = null;

  ValidationError({
    this.documentationUrl,
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'ValidationError[documentationUrl=$documentationUrl, errors=$errors, message=$message, ]';
  }

  ValidationError.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    documentationUrl = json['documentation_url'];
    errors = (json['errors'] == null) ?
      null :
      ValidationErrorErrors.listFromJson(json['errors']);
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

  static List<ValidationError> listFromJson(List<dynamic> json) {
    return json == null ? List<ValidationError>() : json.map((value) => ValidationError.fromJson(value)).toList();
  }

  static Map<String, ValidationError> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ValidationError>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ValidationError.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ValidationError-objects as value to a dart map
  static Map<String, List<ValidationError>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ValidationError>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ValidationError.listFromJson(value);
       });
     }
     return map;
  }
}

