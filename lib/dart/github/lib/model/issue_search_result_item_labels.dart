part of openapi.api;

class IssueSearchResultItemLabels {
  
  String color = null;
  
  bool default_ = null;
  
  String description = null;
  
  int id = null;
  
  String name = null;
  
  String nodeId = null;
  
  String url = null;

  IssueSearchResultItemLabels({
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
    return 'IssueSearchResultItemLabels[color=$color, default_=$default_, description=$description, id=$id, name=$name, nodeId=$nodeId, url=$url, ]';
  }

  IssueSearchResultItemLabels.fromJson(Map<String, dynamic> json) {
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

  static List<IssueSearchResultItemLabels> listFromJson(List<dynamic> json) {
    return json == null ? List<IssueSearchResultItemLabels>() : json.map((value) => IssueSearchResultItemLabels.fromJson(value)).toList();
  }

  static Map<String, IssueSearchResultItemLabels> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, IssueSearchResultItemLabels>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = IssueSearchResultItemLabels.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of IssueSearchResultItemLabels-objects as value to a dart map
  static Map<String, List<IssueSearchResultItemLabels>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<IssueSearchResultItemLabels>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = IssueSearchResultItemLabels.listFromJson(value);
       });
     }
     return map;
  }
}

