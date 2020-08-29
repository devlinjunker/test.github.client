part of openapi.api;

class ContentReferenceAttachment {
  /* The body of the attachment */
  String body = null;
  /* The ID of the attachment */
  int id = null;
  /* The node_id of the content attachment */
  String nodeId = null;
  /* The title of the attachment */
  String title = null;

  ContentReferenceAttachment({
    this.body,
    this.id,
    this.nodeId,
    this.title,
  });

  @override
  String toString() {
    return 'ContentReferenceAttachment[body=$body, id=$id, nodeId=$nodeId, title=$title, ]';
  }

  ContentReferenceAttachment.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    body = json['body'];
    id = json['id'];
    nodeId = json['node_id'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (body != null)
      json['body'] = body;
    if (id != null)
      json['id'] = id;
    if (nodeId != null)
      json['node_id'] = nodeId;
    if (title != null)
      json['title'] = title;
    return json;
  }

  static List<ContentReferenceAttachment> listFromJson(List<dynamic> json) {
    return json == null ? List<ContentReferenceAttachment>() : json.map((value) => ContentReferenceAttachment.fromJson(value)).toList();
  }

  static Map<String, ContentReferenceAttachment> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ContentReferenceAttachment>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ContentReferenceAttachment.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ContentReferenceAttachment-objects as value to a dart map
  static Map<String, List<ContentReferenceAttachment>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ContentReferenceAttachment>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ContentReferenceAttachment.listFromJson(value);
       });
     }
     return map;
  }
}

