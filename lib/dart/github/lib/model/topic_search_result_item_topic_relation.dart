part of openapi.api;

class TopicSearchResultItemTopicRelation {
  
  int id = null;
  
  String name = null;
  
  String relationType = null;
  
  int topicId = null;

  TopicSearchResultItemTopicRelation({
    this.id,
    this.name,
    this.relationType,
    this.topicId,
  });

  @override
  String toString() {
    return 'TopicSearchResultItemTopicRelation[id=$id, name=$name, relationType=$relationType, topicId=$topicId, ]';
  }

  TopicSearchResultItemTopicRelation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    name = json['name'];
    relationType = json['relation_type'];
    topicId = json['topic_id'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (id != null)
      json['id'] = id;
    if (name != null)
      json['name'] = name;
    if (relationType != null)
      json['relation_type'] = relationType;
    if (topicId != null)
      json['topic_id'] = topicId;
    return json;
  }

  static List<TopicSearchResultItemTopicRelation> listFromJson(List<dynamic> json) {
    return json == null ? List<TopicSearchResultItemTopicRelation>() : json.map((value) => TopicSearchResultItemTopicRelation.fromJson(value)).toList();
  }

  static Map<String, TopicSearchResultItemTopicRelation> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TopicSearchResultItemTopicRelation>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TopicSearchResultItemTopicRelation.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TopicSearchResultItemTopicRelation-objects as value to a dart map
  static Map<String, List<TopicSearchResultItemTopicRelation>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TopicSearchResultItemTopicRelation>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TopicSearchResultItemTopicRelation.listFromJson(value);
       });
     }
     return map;
  }
}

