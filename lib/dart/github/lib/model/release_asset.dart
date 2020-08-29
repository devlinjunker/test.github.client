part of openapi.api;

class ReleaseAsset {
  
  String browserDownloadUrl = null;
  
  String contentType = null;
  
  DateTime createdAt = null;
  
  int downloadCount = null;
  
  int id = null;
  
  String label = null;
  /* The file name of the asset. */
  String name = null;
  
  String nodeId = null;
  
  int size = null;
  /* State of the release asset. */
  String state = null;
  //enum stateEnum {  uploaded,  };{
  
  DateTime updatedAt = null;
  
  SimpleUser uploader = null;
  
  String url = null;

  ReleaseAsset({
    this.browserDownloadUrl,
    this.contentType,
    this.createdAt,
    this.downloadCount,
    this.id,
    this.label,
    this.name,
    this.nodeId,
    this.size,
    this.state,
    this.updatedAt,
    this.uploader,
    this.url,
  });

  @override
  String toString() {
    return 'ReleaseAsset[browserDownloadUrl=$browserDownloadUrl, contentType=$contentType, createdAt=$createdAt, downloadCount=$downloadCount, id=$id, label=$label, name=$name, nodeId=$nodeId, size=$size, state=$state, updatedAt=$updatedAt, uploader=$uploader, url=$url, ]';
  }

  ReleaseAsset.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    browserDownloadUrl = json['browser_download_url'];
    contentType = json['content_type'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    downloadCount = json['download_count'];
    id = json['id'];
    label = json['label'];
    name = json['name'];
    nodeId = json['node_id'];
    size = json['size'];
    state = json['state'];
    updatedAt = (json['updated_at'] == null) ?
      null :
      DateTime.parse(json['updated_at']);
    uploader = (json['uploader'] == null) ?
      null :
      SimpleUser.fromJson(json['uploader']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (browserDownloadUrl != null)
      json['browser_download_url'] = browserDownloadUrl;
    if (contentType != null)
      json['content_type'] = contentType;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (downloadCount != null)
      json['download_count'] = downloadCount;
    if (id != null)
      json['id'] = id;
      json['label'] = label;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (size != null)
      json['size'] = size;
    if (state != null)
      json['state'] = state;
    if (updatedAt != null)
      json['updated_at'] = updatedAt == null ? null : updatedAt.toUtc().toIso8601String();
      json['uploader'] = uploader;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<ReleaseAsset> listFromJson(List<dynamic> json) {
    return json == null ? List<ReleaseAsset>() : json.map((value) => ReleaseAsset.fromJson(value)).toList();
  }

  static Map<String, ReleaseAsset> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ReleaseAsset>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ReleaseAsset.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ReleaseAsset-objects as value to a dart map
  static Map<String, List<ReleaseAsset>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ReleaseAsset>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ReleaseAsset.listFromJson(value);
       });
     }
     return map;
  }
}

