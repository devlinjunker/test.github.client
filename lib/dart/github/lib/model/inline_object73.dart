part of openapi.api;

class InlineObject73 {
  /* Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications. */
  bool active = true;
  /* Determines a list of events to be added to the list of events that the Hook triggers for. */
  List<String> addEvents = [];
  
  ReposOwnerRepoHooksHookIdConfig config = null;
  /* Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events. */
  List<String> events = [];
  /* Determines a list of events to be removed from the list of events that the Hook triggers for. */
  List<String> removeEvents = [];

  InlineObject73({
    this.active,
    this.addEvents,
    this.config,
    this.events,
    this.removeEvents,
  });

  @override
  String toString() {
    return 'InlineObject73[active=$active, addEvents=$addEvents, config=$config, events=$events, removeEvents=$removeEvents, ]';
  }

  InlineObject73.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    addEvents = (json['add_events'] == null) ?
      null :
      (json['add_events'] as List).cast<String>();
    config = (json['config'] == null) ?
      null :
      ReposOwnerRepoHooksHookIdConfig.fromJson(json['config']);
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    removeEvents = (json['remove_events'] == null) ?
      null :
      (json['remove_events'] as List).cast<String>();
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (active != null)
      json['active'] = active;
    if (addEvents != null)
      json['add_events'] = addEvents;
    if (config != null)
      json['config'] = config;
    if (events != null)
      json['events'] = events;
    if (removeEvents != null)
      json['remove_events'] = removeEvents;
    return json;
  }

  static List<InlineObject73> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject73>() : json.map((value) => InlineObject73.fromJson(value)).toList();
  }

  static Map<String, InlineObject73> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject73>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject73.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject73-objects as value to a dart map
  static Map<String, List<InlineObject73>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject73>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject73.listFromJson(value);
       });
     }
     return map;
  }
}

