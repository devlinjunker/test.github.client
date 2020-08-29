part of openapi.api;

class InlineResponse5031Errors {
  
  String code = null;
  
  String message = null;

  InlineResponse5031Errors({
    this.code,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse5031Errors[code=$code, message=$message, ]';
  }

  InlineResponse5031Errors.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    code = json['code'];
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (code != null)
      json['code'] = code;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse5031Errors> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse5031Errors>() : json.map((value) => InlineResponse5031Errors.fromJson(value)).toList();
  }

  static Map<String, InlineResponse5031Errors> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse5031Errors>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse5031Errors.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse5031Errors-objects as value to a dart map
  static Map<String, List<InlineResponse5031Errors>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse5031Errors>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse5031Errors.listFromJson(value);
       });
     }
     return map;
  }
}

