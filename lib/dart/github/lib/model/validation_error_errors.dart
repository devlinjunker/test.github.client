part of openapi.api;

class ValidationErrorErrors {
  
  String code = null;
  
  String field = null;
  
  int index = null;
  
  String message = null;
  
  String resource = null;
  
  OneOf<string,integer,array> value = null;

  ValidationErrorErrors({
    this.code,
    this.field,
    this.index,
    this.message,
    this.resource,
    this.value,
  });

  @override
  String toString() {
    return 'ValidationErrorErrors[code=$code, field=$field, index=$index, message=$message, resource=$resource, value=$value, ]';
  }

  ValidationErrorErrors.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    field = json['field'];
    index = json['index'];
    message = json['message'];
    resource = json['resource'];
    value = (json['value'] == null) ?
      null :
      OneOf&lt;string,integer,array&gt;.fromJson(json['value']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (code != null)
      json['code'] = code;
    if (field != null)
      json['field'] = field;
    if (index != null)
      json['index'] = index;
    if (message != null)
      json['message'] = message;
    if (resource != null)
      json['resource'] = resource;
    if (value != null)
      json['value'] = value;
    return json;
  }

  static List<ValidationErrorErrors> listFromJson(List<dynamic> json) {
    return json == null ? List<ValidationErrorErrors>() : json.map((value) => ValidationErrorErrors.fromJson(value)).toList();
  }

  static Map<String, ValidationErrorErrors> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ValidationErrorErrors>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ValidationErrorErrors.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ValidationErrorErrors-objects as value to a dart map
  static Map<String, List<ValidationErrorErrors>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ValidationErrorErrors>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ValidationErrorErrors.listFromJson(value);
       });
     }
     return map;
  }
}

