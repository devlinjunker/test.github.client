part of openapi.api;

class InlineResponse4033Errors {
  
  String code = null;
  
  String field = null;
  
  String message = null;
  
  String resource = null;

  InlineResponse4033Errors({
    this.code,
    this.field,
    this.message,
    this.resource,
  });

  @override
  String toString() {
    return 'InlineResponse4033Errors[code=$code, field=$field, message=$message, resource=$resource, ]';
  }

  InlineResponse4033Errors.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    field = json['field'];
    message = json['message'];
    resource = json['resource'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (code != null)
      json['code'] = code;
    if (field != null)
      json['field'] = field;
    if (message != null)
      json['message'] = message;
    if (resource != null)
      json['resource'] = resource;
    return json;
  }

  static List<InlineResponse4033Errors> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse4033Errors>() : json.map((value) => InlineResponse4033Errors.fromJson(value)).toList();
  }

  static Map<String, InlineResponse4033Errors> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse4033Errors>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse4033Errors.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse4033Errors-objects as value to a dart map
  static Map<String, List<InlineResponse4033Errors>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse4033Errors>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse4033Errors.listFromJson(value);
       });
     }
     return map;
  }
}

