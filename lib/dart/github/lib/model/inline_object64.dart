part of openapi.api;

class InlineObject64 {
  /* JSON payload with extra information about the webhook event that your action or worklow may use. */
  Map<String, Object> clientPayload = {};
  /* **Required:** A custom webhook event name. */
  String eventType = null;

  InlineObject64({
    this.clientPayload,
    this.eventType,
  });

  @override
  String toString() {
    return 'InlineObject64[clientPayload=$clientPayload, eventType=$eventType, ]';
  }

  InlineObject64.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clientPayload = (json['client_payload'] == null) ?
      null :
      Object.mapFromJson(json['client_payload']);
    eventType = json['event_type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (clientPayload != null)
      json['client_payload'] = clientPayload;
    if (eventType != null)
      json['event_type'] = eventType;
    return json;
  }

  static List<InlineObject64> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject64>() : json.map((value) => InlineObject64.fromJson(value)).toList();
  }

  static Map<String, InlineObject64> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject64>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject64.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject64-objects as value to a dart map
  static Map<String, List<InlineObject64>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject64>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject64.listFromJson(value);
       });
     }
     return map;
  }
}

