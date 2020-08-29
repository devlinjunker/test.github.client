part of openapi.api;

class Integration {
  
  String clientId = null;
  
  String clientSecret = null;
  
  DateTime createdAt = null;
  
  String description = null;
  /* The list of events for the GitHub app */
  List<String> events = [];
  
  String externalUrl = null;
  
  String htmlUrl = null;
  /* Unique identifier of the GitHub app */
  int id = null;
  /* The number of installations associated with the GitHub app */
  int installationsCount = null;
  /* The name of the GitHub app */
  String name = null;
  
  String nodeId = null;
  
  SimpleUser owner = null;
  
  String pem = null;
  /* The set of permissions for the GitHub app */
  Map<String, String> permissions = {};
  /* The slug name of the GitHub app */
  String slug = null;
  
  DateTime updatedAt = null;
  
  String webhookSecret = null;

  Integration({
    this.clientId,
    this.clientSecret,
    this.createdAt,
    this.description,
    this.events,
    this.externalUrl,
    this.htmlUrl,
    this.id,
    this.installationsCount,
    this.name,
    this.nodeId,
    this.owner,
    this.pem,
    this.permissions,
    this.slug,
    this.updatedAt,
    this.webhookSecret,
  });

  @override
  String toString() {
    return 'Integration[clientId=$clientId, clientSecret=$clientSecret, createdAt=$createdAt, description=$description, events=$events, externalUrl=$externalUrl, htmlUrl=$htmlUrl, id=$id, installationsCount=$installationsCount, name=$name, nodeId=$nodeId, owner=$owner, pem=$pem, permissions=$permissions, slug=$slug, updatedAt=$updatedAt, webhookSecret=$webhookSecret, ]';
  }

  Integration.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    clientId = json['client_id'];
    clientSecret = json['client_secret'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    description = json['description'];
    events = (json['events'] == null) ?
      null :
      (json['events'] as List).cast<String>();
    externalUrl = json['external_url'];
    htmlUrl = json['html_url'];
    id = json['id'];
    installationsCount = json['installations_count'];
    name = json['name'];
    nodeId = json['node_id'];
    owner = (json['owner'] == null) ?
      null :
      SimpleUser.fromJson(json['owner']);
    pem = json['pem'];
    permissions = (json['permissions'] == null) ?
      null :
      (json['permissions'] as Map).cast<String, String>();
    slug = json['slug'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    webhookSecret = json['webhook_secret'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (clientId != null)
      json['client_id'] = clientId;
    if (clientSecret != null)
      json['client_secret'] = clientSecret;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
      json['description'] = description;
    if (events != null)
      json['events'] = events;
    if (externalUrl != null)
      json['external_url'] = externalUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
    if (installationsCount != null)
      json['installations_count'] = installationsCount;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
      json['owner'] = owner;
    if (pem != null)
      json['pem'] = pem;
    if (permissions != null)
      json['permissions'] = permissions;
    if (slug != null)
      json['slug'] = slug;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (webhookSecret != null)
      json['webhook_secret'] = webhookSecret;
    return json;
  }

  static List<Integration> listFromJson(List<dynamic> json) {
    return json == null ? List<Integration>() : json.map((value) => Integration.fromJson(value)).toList();
  }

  static Map<String, Integration> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Integration>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Integration.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Integration-objects as value to a dart map
  static Map<String, List<Integration>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Integration>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Integration.listFromJson(value);
       });
     }
     return map;
  }
}

