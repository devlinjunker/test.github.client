part of openapi.api;

class InlineObject70 {
  /* The tag message. */
  String message = null;
  /* The SHA of the git object this is tagging. */
  String object = null;
  /* The tag's name. This is typically a version (e.g., \"v0.0.1\"). */
  String tag = null;
  
  ReposOwnerRepoGitTagsTagger tagger = null;
  /* The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`. */
  String type = null;
  //enum typeEnum {  commit,  tree,  blob,  };{

  InlineObject70({
    this.message,
    this.object,
    this.tag,
    this.tagger,
    this.type,
  });

  @override
  String toString() {
    return 'InlineObject70[message=$message, object=$object, tag=$tag, tagger=$tagger, type=$type, ]';
  }

  InlineObject70.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    message = json['message'];
    object = json['object'];
    tag = json['tag'];
    tagger = (json['tagger'] == null) ?
      null :
      ReposOwnerRepoGitTagsTagger.fromJson(json['tagger']);
    type = json['type'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (message != null)
      json['message'] = message;
    if (object != null)
      json['object'] = object;
    if (tag != null)
      json['tag'] = tag;
    if (tagger != null)
      json['tagger'] = tagger;
    if (type != null)
      json['type'] = type;
    return json;
  }

  static List<InlineObject70> listFromJson(List<dynamic> json) {
    return json == null ? List<InlineObject70>() : json.map((value) => InlineObject70.fromJson(value)).toList();
  }

  static Map<String, InlineObject70> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, InlineObject70>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = InlineObject70.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of InlineObject70-objects as value to a dart map
  static Map<String, List<InlineObject70>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<InlineObject70>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = InlineObject70.listFromJson(value);
       });
     }
     return map;
  }
}

