part of openapi.api;

class EventRepo {
  
  int id = null;
  
  String name = null;
  
  String url = null;

  EventRepo({
    this.id,
    this.name,
    this.url,
  });

  @override
  String toString() {
    return 'EventRepo[id=$id, name=$name, url=$url, ]';
  }

  EventRepo.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    name = json['name'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<EventRepo> listFromJson(List<dynamic> json) {
    return json == null ? List<EventRepo>() : json.map((value) => EventRepo.fromJson(value)).toList();
  }

  static Map<String, EventRepo> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, EventRepo>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = EventRepo.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of EventRepo-objects as value to a dart map
  static Map<String, List<EventRepo>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<EventRepo>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = EventRepo.listFromJson(value);
       });
     }
     return map;
  }
}

