part of openapi.api;

class CommunityProfile {
  
  String description = null;
  
  String documentation = null;
  
  CommunityProfileFiles files = null;
  
  int healthPercentage = null;
  
  DateTime updatedAt = null;

  CommunityProfile({
    this.description,
    this.documentation,
    this.files,
    this.healthPercentage,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'CommunityProfile[description=$description, documentation=$documentation, files=$files, healthPercentage=$healthPercentage, updatedAt=$updatedAt, ]';
  }

  CommunityProfile.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    description = json['description'];
    documentation = json['documentation'];
    files = (json['files'] == null) ?
      null :
      CommunityProfileFiles.fromJson(json['files']);
    healthPercentage = json['health_percentage'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['description'] = description;
      json['documentation'] = documentation;
    if (files != null)
      json['files'] = files;
    if (healthPercentage != null)
      json['health_percentage'] = healthPercentage;
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    return json;
  }

  static List<CommunityProfile> listFromJson(List<dynamic> json) {
    return json == null ? List<CommunityProfile>() : json.map((value) => CommunityProfile.fromJson(value)).toList();
  }

  static Map<String, CommunityProfile> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CommunityProfile>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CommunityProfile.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CommunityProfile-objects as value to a dart map
  static Map<String, List<CommunityProfile>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CommunityProfile>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CommunityProfile.listFromJson(value);
       });
     }
     return map;
  }
}

