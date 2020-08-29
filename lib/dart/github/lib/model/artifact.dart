part of openapi.api;

class Artifact {
  
  String archiveDownloadUrl = null;
  
  DateTime createdAt = null;
  /* Whether or not the artifact has expired. */
  bool expired = null;
  
  String expiresAt = null;
  
  int id = null;
  /* The name of the artifact. */
  String name = null;
  
  String nodeId = null;
  /* The size in bytes of the artifact. */
  int sizeInBytes = null;
  
  DateTime updatedAt = null;
  
  String url = null;

  Artifact({
    this.archiveDownloadUrl,
    this.createdAt,
    this.expired,
    this.expiresAt,
    this.id,
    this.name,
    this.nodeId,
    this.sizeInBytes,
    this.updatedAt,
    this.url,
  });

  @override
  String toString() {
    return 'Artifact[archiveDownloadUrl=$archiveDownloadUrl, createdAt=$createdAt, expired=$expired, expiresAt=$expiresAt, id=$id, name=$name, nodeId=$nodeId, sizeInBytes=$sizeInBytes, updatedAt=$updatedAt, url=$url, ]';
  }

  Artifact.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    archiveDownloadUrl = json['archive_download_url'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    expired = json['expired'];
    expiresAt = json['expires_at'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    sizeInBytes = json['size_in_bytes'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (archiveDownloadUrl != null)
      json['archive_download_url'] = archiveDownloadUrl;
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (expired != null)
      json['expired'] = expired;
    if (expiresAt != null)
      json['expires_at'] = expiresAt;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (sizeInBytes != null)
      json['size_in_bytes'] = sizeInBytes;
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<Artifact> listFromJson(List<dynamic> json) {
    return json == null ? List<Artifact>() : json.map((value) => Artifact.fromJson(value)).toList();
  }

  static Map<String, Artifact> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Artifact>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Artifact.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Artifact-objects as value to a dart map
  static Map<String, List<Artifact>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Artifact>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Artifact.listFromJson(value);
       });
     }
     return map;
  }
}

