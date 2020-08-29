part of openapi.api;

class Release {
  
  List<ReleaseAsset> assets = [];
  
  String assetsUrl = null;
  
  SimpleUser author = null;
  
  String body = null;
  
  String bodyHtml = null;
  
  String bodyText = null;
  
  DateTime createdAt = null;
  /* true to create a draft (unpublished) release, false to create a published one. */
  bool draft = null;
  
  String htmlUrl = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  /* Whether to identify the release as a prerelease or a full release. */
  bool prerelease = null;
  
  DateTime publishedAt = null;
  /* The name of the tag. */
  String tagName = null;
  
  String tarballUrl = null;
  /* Specifies the commitish value that determines where the Git tag is created from. */
  String targetCommitish = null;
  
  String uploadUrl = null;
  
  String url = null;
  
  String zipballUrl = null;

  Release({
    this.assets,
    this.assetsUrl,
    this.author,
    this.body,
    this.bodyHtml,
    this.bodyText,
    this.createdAt,
    this.draft,
    this.htmlUrl,
    this.id,
    this.name,
    this.nodeId,
    this.prerelease,
    this.publishedAt,
    this.tagName,
    this.tarballUrl,
    this.targetCommitish,
    this.uploadUrl,
    this.url,
    this.zipballUrl,
  });

  @override
  String toString() {
    return 'Release[assets=$assets, assetsUrl=$assetsUrl, author=$author, body=$body, bodyHtml=$bodyHtml, bodyText=$bodyText, createdAt=$createdAt, draft=$draft, htmlUrl=$htmlUrl, id=$id, name=$name, nodeId=$nodeId, prerelease=$prerelease, publishedAt=$publishedAt, tagName=$tagName, tarballUrl=$tarballUrl, targetCommitish=$targetCommitish, uploadUrl=$uploadUrl, url=$url, zipballUrl=$zipballUrl, ]';
  }

  Release.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    assets = (json['assets'] == null) ?
      null :
      ReleaseAsset.listFromJson(json['assets']);
    assetsUrl = json['assets_url'];
    author = (json['author'] == null) ?
      null :
      SimpleUser.fromJson(json['author']);
    body = json['body'];
    bodyHtml = json['body_html'];
    bodyText = json['body_text'];
    createdAt = (json['created_at'] == null) ?
      null :
      DateTime.parse(json['created_at']);
    draft = json['draft'];
    htmlUrl = json['html_url'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    prerelease = json['prerelease'];
    publishedAt = (json['published_at'] == null) ?
      null :
      DateTime.parse(json['published_at']);
    tagName = json['tag_name'];
    tarballUrl = json['tarball_url'];
    targetCommitish = json['target_commitish'];
    uploadUrl = json['upload_url'];
    url = json['url'];
    zipballUrl = json['zipball_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (assets != null)
      json['assets'] = assets;
    if (assetsUrl != null)
      json['assets_url'] = assetsUrl;
      json['author'] = author;
      json['body'] = body;
    if (bodyHtml != null)
      json['body_html'] = bodyHtml;
    if (bodyText != null)
      json['body_text'] = bodyText;
    if (createdAt != null)
      json['created_at'] = createdAt == null ? null : createdAt.toUtc().toIso8601String();
    if (draft != null)
      json['draft'] = draft;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
    if (id != null)
      json['id'] = id;
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (prerelease != null)
      json['prerelease'] = prerelease;
      json['published_at'] = publishedAt == null ? null : publishedAt.toUtc().toIso8601String();
    if (tagName != null)
      json['tag_name'] = tagName;
      json['tarball_url'] = tarballUrl;
    if (targetCommitish != null)
      json['target_commitish'] = targetCommitish;
    if (uploadUrl != null)
      json['upload_url'] = uploadUrl;
    if (url != null)
      json['url'] = url;
      json['zipball_url'] = zipballUrl;
    return json;
  }

  static List<Release> listFromJson(List<dynamic> json) {
    return json == null ? List<Release>() : json.map((value) => Release.fromJson(value)).toList();
  }

  static Map<String, Release> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Release>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Release.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Release-objects as value to a dart map
  static Map<String, List<Release>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Release>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Release.listFromJson(value);
       });
     }
     return map;
  }
}

