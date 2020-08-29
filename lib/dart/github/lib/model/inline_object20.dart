part of openapi.api;

class InlineObject20 {
  /* Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications. */
  bool active = true;
  
  OrgsOrgHooksHookIdConfig config = null;
  /* Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. */
  List<String> events = [];
  
  String name = null;

  InlineObject20({
    this.active,
    this.config,
    this.events,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject20[active=$active, config=$config, events=$events, name=$name, ]';
  }

  InlineObject20.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    config = (json['config'] == null) ?
      null :
      OrgsOrgHooksHookIdConfig.fromJson(json['config']);
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

  static List<InlineObject20> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject20>() : json.map((value) => InlineObject20.fromJson(value)).toList();
  }

  static Map<String, InlineObject20> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject20>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject20.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject20-objects as value to a dart map
  static Map<String, List<InlineObject20>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject20>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject20.listFromJson(value);
       });
     }
     return map;
  }
}

