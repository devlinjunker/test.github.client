part of openapi.api;

class InlineObject72 {
  /* Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications. */
  bool active = true;
  
  ReposOwnerRepoHooksConfig config = null;
  /* Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. */
  List<String> events = [];
  /* Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`. */
  String name = null;

  InlineObject72({
    this.active,
    this.config,
    this.events,
    this.name,
  });

  @override
  String toString() {
    return 'InlineObject72[active=$active, config=$config, events=$events, name=$name, ]';
  }

  InlineObject72.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    config = (json['config'] == null) ?
      null :
      ReposOwnerRepoHooksConfig.fromJson(json['config']);
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

  static List<InlineObject72> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject72>() : json.map((value) => InlineObject72.fromJson(value)).toList();
  }

  static Map<String, InlineObject72> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject72>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject72.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject72-objects as value to a dart map
  static Map<String, List<InlineObject72>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject72>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject72.listFromJson(value);
       });
     }
     return map;
  }
}

