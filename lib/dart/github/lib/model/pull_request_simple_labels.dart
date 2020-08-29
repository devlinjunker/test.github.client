part of openapi.api;

class PullRequestSimpleLabels {
  
  String color = null;
  
  bool default_ = null;
  
  String description = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  
  String url = null;

  PullRequestSimpleLabels({
    this.color,
    this.default_,
    this.description,
    this.id,
    this.name,
    this.nodeId,
    this.url,
  });

  @override
  String toString() {
    return 'PullRequestSimpleLabels[color=$color, default_=$default_, description=$description, id=$id, name=$name, nodeId=$nodeId, url=$url, ]';
  }

  PullRequestSimpleLabels.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    color = json['color'];
    default_ = json['default'];
    description = json['description'];
    id = json['id'];
    name = json['name'];
    nodeId = json['node_id'];
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (color != null)
      json['color'] = color;
    if (default_ != null)
      json['default'] = default_;
    if (description != null)
      json['description'] = description;
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<PullRequestSimpleLabels> listFromJson(List<dynamic> json) {
    return json == null ? List<PullRequestSimpleLabels>() : json.map((value) => PullRequestSimpleLabels.fromJson(value)).toList();
  }

  static Map<String, PullRequestSimpleLabels> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, PullRequestSimpleLabels>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = PullRequestSimpleLabels.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of PullRequestSimpleLabels-objects as value to a dart map
  static Map<String, List<PullRequestSimpleLabels>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<PullRequestSimpleLabels>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = PullRequestSimpleLabels.listFromJson(value);
       });
     }
     return map;
  }
}

