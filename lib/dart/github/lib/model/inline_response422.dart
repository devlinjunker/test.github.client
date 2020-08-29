part of openapi.api;

class InlineResponse422 {
  
  List<InlineResponse422Errors> errors = [];
  
  String message = null;

  InlineResponse422({
    this.errors,
    this.message,
  });

  @override
  String toString() {
    return 'InlineResponse422[errors=$errors, message=$message, ]';
  }

  InlineResponse422.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    errors = (json['errors'] == null) ?
      null :
      InlineResponse422Errors.listFromJson(json['errors']);
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (errors != null)
      json['errors'] = errors;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineResponse422> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineResponse422>() : json.map((value) => InlineResponse422.fromJson(value)).toList();
  }

  static Map<String, InlineResponse422> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineResponse422>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineResponse422.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineResponse422-objects as value to a dart map
  static Map<String, List<InlineResponse422>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineResponse422>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineResponse422.listFromJson(value);
       });
     }
     return map;
  }
}

