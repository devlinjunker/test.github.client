part of openapi.api;

class Enterprise {
  
  String avatarUrl = null;
  
  DateTime createdAt = null;
  /* A short description of the enterprise. */
  String description = null;
  
  String htmlUrl = null;
  /* Unique identifier of the enterprise */
  int id = null;
  /* The name of the enterprise. */
  String name = null;
  
  String nodeId = null;
  /* The slug url identifier for the enterprise. */
  String slug = null;
  
  DateTime updatedAt = null;
  /* The enterprise's website URL. */
  String websiteUrl = null;

  Enterprise({
    this.avatarUrl,
    this.createdAt,
    this.description,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.slug,
    this.updatedAt,
    this.websiteUrl,
  });

  @override
  String toString() {
    return 'Enterprise[avatarUrl=$avatarUrl, createdAt=$createdAt, description=$description, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, slug=$slug, updatedAt=$updatedAt, websiteUrl=$websiteUrl, ]';
  }

  Enterprise.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    avatarUrl = json['avatar_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    description = json['description'];
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    slug = json['slug'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    websiteUrl = json['website_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (avatarUrl != null)
      json['avatar_url'] = avatarUrl;
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['description'] = description;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (slug != null)
      json['slug'] = slug;
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
      json['website_url'] = websiteUrl;
    return json;
  }

  static List<Enterprise> listFromJson(List<dynamic> json) {
    return json == null ? List<Enterprise>() : json.map((value) => Enterprise.fromJson(value)).toList();
  }

  static Map<String, Enterprise> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Enterprise>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Enterprise.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Enterprise-objects as value to a dart map
  static Map<String, List<Enterprise>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Enterprise>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Enterprise.listFromJson(value);
       });
     }
     return map;
  }
}

