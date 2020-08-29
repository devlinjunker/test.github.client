part of openapi.api;

class InlineResponse422Errors {
  
  String code = null;
  
  String field = null;
  
  String resource = null;

  InlineResponse422Errors({
    this.code,
    this.field,
    this.resource,
  });

  @override
  String toString() {
    return 'InlineResponse422Errors[code=$code, field=$field, resource=$resource, ]';
  }

  InlineResponse422Errors.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    field = json['field'];
    resource = json['resource'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (code != null)
      json['code'] = code;
    if (field != null)
      json['field'] = field;
    if (resource != null)
      json['resource'] = resource;
    return json;
  }

  static List<InlineResponse422Errors> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse422Errors>() : json.map((value) => InlineResponse422Errors.fromJson(value)).toList();
  }

  static Map<String, InlineResponse422Errors> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse422Errors>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse422Errors.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse422Errors-objects as value to a dart map
  static Map<String, List<InlineResponse422Errors>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse422Errors>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse422Errors.listFromJson(value);
       });
     }
     return map;
  }
}

