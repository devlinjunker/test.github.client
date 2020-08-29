part of openapi.api;

class Stargazer {
  
  DateTime starredAt = null;
  
  SimpleUser user = null;

  Stargazer({
    this.starredAt,
    this.user,
  });

  @override
  String toString() {
    return 'Stargazer[starredAt=$starredAt, user=$user, ]';
  }

  Stargazer.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    starredAt = (json['starred_at'] == null) ?
      null :
      DateTime.parse(json['starred_at']);
    user = (json['user'] == null) ?
      null :
      SimpleUser.fromJson(json['user']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (starredAt != null)
      json['starred_at'] = starredAt == null ? null : starredAt.toUtc().toIso8601String();
      json['user'] = user;
    return json;
  }

  static List<Stargazer> listFromJson(List<dynamic> json) {
    return json == null ? List<Stargazer>() : json.map((value) => Stargazer.fromJson(value)).toList();
  }

  static Map<String, Stargazer> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Stargazer>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Stargazer.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Stargazer-objects as value to a dart map
  static Map<String, List<Stargazer>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Stargazer>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Stargazer.listFromJson(value);
       });
     }
     return map;
  }
}

