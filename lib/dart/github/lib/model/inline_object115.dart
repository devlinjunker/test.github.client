part of openapi.api;

class InlineObject115 {
  /* Text describing the contents of the tag. */
  String body = null;
  /* `true` to create a draft (unpublished) release, `false` to create a published one. */
  bool draft = false;
  /* The name of the release. */
  String name = null;
  /* `true` to identify the release as a prerelease. `false` to identify the release as a full release. */
  bool prerelease = false;
  /* The name of the tag. */
  String tagName = null;
  /* Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`). */
  String targetCommitish = null;

  InlineObject115({
    this.body,
    this.draft,
    this.name,
    this.prerelease,
    this.tagName,
    this.targetCommitish,
  });

  @override
  String toString() {
    return 'InlineObject115[body=$body, draft=$draft, name=$name, prerelease=$prerelease, tagName=$tagName, targetCommitish=$targetCommitish, ]';
  }

  InlineObject115.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    draft = json['draft'];
    name = json['name'];
    prerelease = json['prerelease'];
    tagName = json['tag_name'];
    targetCommitish = json['target_commitish'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (draft != null)
      json['draft'] = draft;
    if (name != null)
      json['name'] = name;
    if (prerelease != null)
      json['prerelease'] = prerelease;
    if (tagName != null)
      json['tag_name'] = tagName;
    if (targetCommitish != null)
      json['target_commitish'] = targetCommitish;
    return json;
  }

  static List<InlineObject115> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject115>() : json.map((value) => InlineObject115.fromJson(value)).toList();
  }

  static Map<String, InlineObject115> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject115>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject115.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject115-objects as value to a dart map
  static Map<String, List<InlineObject115>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject115>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject115.listFromJson(value);
       });
     }
     return map;
  }
}

