part of openapi.api;

class InlineObject117 {
  /* Text describing the contents of the tag. */
  String body = null;
  /* `true` makes the release a draft, and `false` publishes the release. */
  bool draft = null;
  /* The name of the release. */
  String name = null;
  /* `true` to identify the release as a prerelease, `false` to identify the release as a full release. */
  bool prerelease = null;
  /* The name of the tag. */
  String tagName = null;
  /* Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`). */
  String targetCommitish = null;

  InlineObject117({
    this.body,
    this.draft,
    this.name,
    this.prerelease,
    this.tagName,
    this.targetCommitish,
  });

  @override
  String toString() {
    return 'InlineObject117[body=$body, draft=$draft, name=$name, prerelease=$prerelease, tagName=$tagName, targetCommitish=$targetCommitish, ]';
  }

  InlineObject117.fromJson(Map<String, dynamic> json) {
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

  static List<InlineObject117> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject117>() : json.map((value) => InlineObject117.fromJson(value)).toList();
  }

  static Map<String, InlineObject117> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject117>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject117.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject117-objects as value to a dart map
  static Map<String, List<InlineObject117>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject117>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject117.listFromJson(value);
       });
     }
     return map;
  }
}

