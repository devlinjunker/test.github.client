part of openapi.api;

class Label {
  /* 6-character hex code, without the leading #, identifying the color */
  String color = null;
  
  bool default_ = null;
  
  String description = null;
  
  int id = null;
  /* The name of the label. */
  String name = null;
  
  String nodeId = null;
  /* URL for the label */
  String url = null;

  Label({
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
    return 'Label[color=$color, default_=$default_, description=$description, id=$id, name=$name, nodeId=$nodeId, url=$url, ]';
  }

  Label.fromJson(Map<String, dynamic> json) {
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

  static List<Label> listFromJson(List<dynamic> json) {
    return json == null ? List<Label>() : json.map((value) => Label.fromJson(value)).toList();
  }

  static Map<String, Label> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, Label>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = Label.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of Label-objects as value to a dart map
  static Map<String, List<Label>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<Label>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = Label.listFromJson(value);
       });
     }
     return map;
  }
}

