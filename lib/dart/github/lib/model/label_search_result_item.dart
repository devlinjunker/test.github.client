part of openapi.api;

class LabelSearchResultItem {
  
  String color = null;
  
  bool default_ = null;
  
  String description = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  
  int score = null;
  
  List<Object> textMatches = [];
  
  String url = null;

  LabelSearchResultItem({
    this.color,
    this.default_,
    this.description,
    this.id,
    this.name,
    this.nodeId,
    this.score,
    this.textMatches,
    this.url,
  });

  @override
  String toString() {
    return 'LabelSearchResultItem[color=$color, default_=$default_, description=$description, id=$id, name=$name, nodeId=$nodeId, score=$score, textMatches=$textMatches, url=$url, ]';
  }

  LabelSearchResultItem.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    color = json['color'];
    default_ = json['default'];
    description = json['description'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    score = json['score'];
    textMatches = (json['text_matches'] == null) ?
      null :
      Object.listFromJson(json['text_matches']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (color != null)
      json['color'] = color;
    if (default_ != null)
      json['default'] = default_;
      json['description'] = description;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (score != null)
      json['score'] = score;
    if (textMatches != null)
      json['text_matches'] = textMatches;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<LabelSearchResultItem> listFromJson(List<dynamic> json) {
    return json == null ? List<LabelSearchResultItem>() : json.map((value) => LabelSearchResultItem.fromJson(value)).toList();
  }

  static Map<String, LabelSearchResultItem> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, LabelSearchResultItem>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = LabelSearchResultItem.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of LabelSearchResultItem-objects as value to a dart map
  static Map<String, List<LabelSearchResultItem>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<LabelSearchResultItem>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = LabelSearchResultItem.listFromJson(value);
       });
     }
     return map;
  }
}

