part of openapi.api;

class InlineObject112 {
  
  String event = null;
  /* The message for the pull request review dismissal */
  String message = null;

  InlineObject112({
    this.event,
    this.message,
  });

  @override
  String toString() {
    return 'InlineObject112[event=$event, message=$message, ]';
  }

  InlineObject112.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    event = json['event'];
    message = json['message'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (event != null)
      json['event'] = event;
    if (message != null)
      json['message'] = message;
    return json;
  }

  static List<InlineObject112> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject112>() : json.map((value) => InlineObject112.fromJson(value)).toList();
  }

  static Map<String, InlineObject112> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject112>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject112.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject112-objects as value to a dart map
  static Map<String, List<InlineObject112>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject112>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject112.listFromJson(value);
       });
     }
     return map;
  }
}

