part of openapi.api;

class Event {
  
  Actor actor = null;
  
  DateTime createdAt = null;
  
  String id = null;
  
  Actor org = null;
  
  EventPayload payload = null;
  
  bool public = null;
  
  EventRepo repo = null;
  
  String type = null;

  Event({
    this.actor,
    this.createdAt,
    this.id,
    this.org,
    this.payload,
    this.public,
    this.repo,
    this.type,
  });

  @override
  String toString() {
    return 'Event[actor=$actor, createdAt=$createdAt, id=$id, org=$org, payload=$payload, public=$public, repo=$repo, type=$type, ]';
  }

  Event.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    actor = (json['actor'] == null) ?
      null :
      Actor.fromJson(json['actor']);
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    id = json['id'];
    org = (json['org'] == null) ?
      null :
      Actor.fromJson(json['org']);
    payload = (json['payload'] == null) ?
      null :
      EventPayload.fromJson(json['payload']);
    public = json['public'];
    repo = (json['repo'] == null) ?
      null :
      EventRepo.fromJson(json['repo']);
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (actor != null)
      json['actor'] = actor;
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (id != null)
      json['id'] = id;
    if (org != null)
      json['org'] = org;
    if (payload != null)
      json['payload'] = payload;
    if (public != null)
      json['public'] = public;
    if (repo != null)
      json['repo'] = repo;
      json['type'] = type;
    return json;
  }

  static List<Event> listFromJson(List<dynamic> json) {
    return json == null ? List<Event>() : json.map((value) => Event.fromJson(value)).toList();
  }

  static Map<String, Event> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Event>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Event.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Event-objects as value to a dart map
  static Map<String, List<Event>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Event>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Event.listFromJson(value);
       });
     }
     return map;
  }
}

