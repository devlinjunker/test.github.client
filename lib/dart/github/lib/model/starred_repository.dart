part of openapi.api;

class StarredRepository {
  
  Repository repo = null;
  
  DateTime starredAt = null;

  StarredRepository({
    this.repo,
    this.starredAt,
  });

  @override
  String toString() {
    return 'StarredRepository[repo=$repo, starredAt=$starredAt, ]';
  }

  StarredRepository.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    repo = (json['repo'] == null) ?
      null :
      Repository.fromJson(json['repo']);
    starredAt = (json['starred_at'] == null) ?
      null :
      DateTime.parse(json['starred_at']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (repo != null)
      json['repo'] = repo;
    if (starredAt != null)
      json['starred_at'] = starredAt == null ? null : starredAt.toUtc().toIso8601String();
    return json;
  }

  static List<StarredRepository> listFromJson(List<dynamic> json) {
    return json == null ? List<StarredRepository>() : json.map((value) => StarredRepository.fromJson(value)).toList();
  }

  static Map<String, StarredRepository> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, StarredRepository>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = StarredRepository.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of StarredRepository-objects as value to a dart map
  static Map<String, List<StarredRepository>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<StarredRepository>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = StarredRepository.listFromJson(value);
       });
     }
     return map;
  }
}

