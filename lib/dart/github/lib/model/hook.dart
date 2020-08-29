part of openapi.api;

class Hook {
  /* Determines whether the hook is actually triggered on pushes. */
  bool active = null;
  
  HookConfig config = null;
  
  DateTime createdAt = null;
  /* Determines what events the hook is triggered for. Default: ['push']. */
  List<String> events = [];
  /* Unique identifier of the webhook. */
  int id = null;
  
  HookResponse lastResponse = null;
  /* The name of a valid service, use 'web' for a webhook. */
  String name = null;
  
  String pingUrl = null;
  
  String testUrl = null;
  
  String type = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  Hook({
    this.active,
    this.config,
    this.createdAt,
    this.events,
    this.id,
    this.lastResponse,
    this.name,
    this.pingUrl,
    this.testUrl,
    this.type,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Hook[active=$active, config=$config, createdAt=$createdAt, events=$events, id=$id, lastResponse=$lastResponse, name=$name, pingUrl=$pingUrl, testUrl=$testUrl, type=$type, updatedAt=$updatedAt, url=$url, ]';
  }

  Hook.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    config = (json['config'] == null) ?
      null :
      HookConfig.fromJson(json['config']);
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    id = json['id'];
    lastResponse = (json['last_response'] == null) ?
      null :
      HookResponse.fromJson(json['last_response']);
    name = json['name'];
    pingUrl = json['ping_url'];
    testUrl = json['test_url'];
    type = json['type'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (active != null)
      json['active'] = active;
    if (config != null)
      json['config'] = config;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (events != null)
      json['events'] = events;
    if (id != null)
      json['id'] = id;
    if (lastResponse != null)
      json['last_response'] = lastResponse;
    if (name != null)
      json['name'] = name;
    if (pingUrl != null)
      json['ping_url'] = pingUrl;
    if (testUrl != null)
      json['test_url'] = testUrl;
    if (type != null)
      json['type'] = type;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Hook> listFromJson(List<dynamic> json) {
    return json == null ? List<Hook>() : json.map((value) => Hook.fromJson(value)).toList();
  }

  static Map<String, Hook> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Hook>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Hook.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Hook-objects as value to a dart map
  static Map<String, List<Hook>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Hook>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Hook.listFromJson(value);
       });
     }
     return map;
  }
}

