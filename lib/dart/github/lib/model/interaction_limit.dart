part of openapi.api;

class InteractionLimit {
  
  DateTime expiresAt = null;
  /* The interaction limit to enable. */
  String limit = null;
  //enum limitEnum {  existing_users,  contributors_only,  collaborators_only,  };{
  
  String origin = null;

  InteractionLimit({
    this.expiresAt,
    this.limit,
    this.origin,
  });

  @override
  String toString() {
    return 'InteractionLimit[expiresAt=$expiresAt, limit=$limit, origin=$origin, ]';
  }

  InteractionLimit.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    expiresAt = (json['expires_at'] == null) ?
      null :
      DateTime.parse(json['expires_at']);
    limit = json['limit'];
    origin = json['origin'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (expiresAt != null)
      json['expires_at'] = expiresAt == null ? null : expiresAt.toUtc().toIso8601String();
    if (limit != null)
      json['limit'] = limit;
    if (origin != null)
      json['origin'] = origin;
    return json;
  }

  static List<InteractionLimit> listFromJson(List<dynamic> json) {
    return json == null ? List<InteractionLimit>() : json.map((value) => InteractionLimit.fromJson(value)).toList();
  }

  static Map<String, InteractionLimit> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InteractionLimit>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InteractionLimit.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InteractionLimit-objects as value to a dart map
  static Map<String, List<InteractionLimit>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InteractionLimit>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InteractionLimit.listFromJson(value);
       });
     }
     return map;
  }
}

