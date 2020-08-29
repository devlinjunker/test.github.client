part of openapi.api;

class OrgHook {
  
  bool active = null;
  
  OrgHookConfig config = null;
  
  DateTime createdAt = null;
  
  List<String> events = [];
  
  int id = null;
  
  String name = null;
  
  String pingUrl = null;
  
  String type = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  OrgHook({
    this.active,
    this.config,
    this.createdAt,
    this.events,
    this.id,
    this.name,
    this.pingUrl,
    this.type,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'OrgHook[active=$active, config=$config, createdAt=$createdAt, events=$events, id=$id, name=$name, pingUrl=$pingUrl, type=$type, updatedAt=$updatedAt, url=$url, ]';
  }

  OrgHook.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    active = json['active'];
    config = (json['config'] == null) ?
      null :
      OrgHookConfig.fromJson(json['config']);
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    id = json['id'];
    name = json['name'];
    pingUrl = json['ping_url'];
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
    if (name != null)
      json['name'] = name;
    if (pingUrl != null)
      json['ping_url'] = pingUrl;
    if (type != null)
      json['type'] = type;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<OrgHook> listFromJson(List<dynamic> json) {
    return json == null ? List<OrgHook>() : json.map((value) => OrgHook.fromJson(value)).toList();
  }

  static Map<String, OrgHook> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, OrgHook>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = OrgHook.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of OrgHook-objects as value to a dart map
  static Map<String, List<OrgHook>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<OrgHook>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = OrgHook.listFromJson(value);
       });
     }
     return map;
  }
}

