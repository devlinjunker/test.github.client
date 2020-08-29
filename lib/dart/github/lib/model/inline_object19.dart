part of openapi.api;

class InlineObject19 {
  /* Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications. */
  bool active = true;
  
  OrgsOrgHooksConfig config = null;
  /* Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. */
  List<String> events = [];
  /* Must be passed as \"web\". */
  String name = null;

  InlineObject19({
    this.active,
    this.config,
    this.events,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject19[active=$active, config=$config, events=$events, name=$name, ]';
  }

  InlineObject19.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    config = (json['config'] == null) ?
      null :
      OrgsOrgHooksConfig.fromJson(json['config']);
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    name = json['name'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (active != null)
      json['active'] = active;
    if (config != null)
      json['config'] = config;
    if (events != null)
      json['events'] = events;
    if (name != null)
      json['name'] = name;
    return json;
  }

  static List<InlineObject19> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject19>() : json.map((value) => InlineObject19.fromJson(value)).toList();
  }

  static Map<String, InlineObject19> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject19>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject19.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject19-objects as value to a dart map
  static Map<String, List<InlineObject19>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject19>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject19.listFromJson(value);
       });
     }
     return map;
  }
}

