part of openapi.api;

class TopicSearchResultItem {
  
  List<TopicSearchResultItemAliases> aliases = [];
  
  DateTime createdAt = null;
  
  String createdBy = null;
  
  bool curated = null;
  
  String description = null;
  
  String displayName = null;
  
  bool featured = null;
  
  String logoUrl = null;
  
  String name = null;
  
  List<TopicSearchResultItemAliases> related = [];
  
  String released = null;
  
  int repositoryCount = null;
  
  int score = null;
  
  String shortDescription = null;
  
  List<Object> textMatches = [];
  
  DateTime updatedAt = null;

  TopicSearchResultItem({
    this.aliases,
    this.createdAt,
    this.createdBy,
    this.curated,
    this.description,
    this.displayName,
    this.featured,
    this.logoUrl,
    this.name,
    this.related,
    this.released,
    this.repositoryCount,
    this.score,
    this.shortDescription,
    this.textMatches,
    this.updatedAt,
  });

  @override
  String toString() {
    return 'TopicSearchResultItem[aliases=$aliases, createdAt=$createdAt, createdBy=$createdBy, curated=$curated, description=$description, displayName=$displayName, featured=$featured, logoUrl=$logoUrl, name=$name, related=$related, released=$released, repositoryCount=$repositoryCount, score=$score, shortDescription=$shortDescription, textMatches=$textMatches, updatedAt=$updatedAt, ]';
  }

  TopicSearchResultItem.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    aliases = (json['aliases'] == null) ?
      null :
      TopicSearchResultItemAliases.listFromJson(json['aliases']);
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    createdBy = json['created_by'];
    curated = json['curated'];
    description = json['description'];
    displayName = json['display_name'];
    featured = json['featured'];
    logoUrl = json['logo_url'];
    name = json['name'];
    related = (json['related'] == null) ?
      null :
      TopicSearchResultItemAliases.listFromJson(json['related']);
    released = json['released'];
    repositoryCount = json['repository_count'];
    score = json['score'];
    shortDescription = json['short_description'];
    textMatches = (json['text_matches'] == null) ?
      null :
      Object.listFromJson(json['text_matches']);
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['aliases'] = aliases;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['created_by'] = createdBy;
    if (curated != null)
      json['curated'] = curated;
      json['description'] = description;
      json['display_name'] = displayName;
    if (featured != null)
      json['featured'] = featured;
      json['logo_url'] = logoUrl;
    if (name != null)
      json['name'] = name;
      json['related'] = related;
      json['released'] = released;
      json['repository_count'] = repositoryCount;
    if (score != null)
      json['score'] = score;
      json['short_description'] = shortDescription;
    if (textMatches != null)
      json['text_matches'] = textMatches;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    return json;
  }

  static List<TopicSearchResultItem> listFromJson(List<dynamic> json) {
    return json == null ? List<TopicSearchResultItem>() : json.map((value) => TopicSearchResultItem.fromJson(value)).toList();
  }

  static Map<String, TopicSearchResultItem> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TopicSearchResultItem>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TopicSearchResultItem.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TopicSearchResultItem-objects as value to a dart map
  static Map<String, List<TopicSearchResultItem>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TopicSearchResultItem>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TopicSearchResultItem.listFromJson(value);
       });
     }
     return map;
  }
}

