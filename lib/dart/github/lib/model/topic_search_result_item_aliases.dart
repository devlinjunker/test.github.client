part of openapi.api;

class TopicSearchResultItemAliases {
  
  TopicSearchResultItemTopicRelation topicRelation = null;

  TopicSearchResultItemAliases({
    this.topicRelation,
  });

  @override
  String toString() {
    return 'TopicSearchResultItemAliases[topicRelation=$topicRelation, ]';
  }

  TopicSearchResultItemAliases.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    topicRelation = (json['topic_relation'] == null) ?
      null :
      TopicSearchResultItemTopicRelation.fromJson(json['topic_relation']);
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (topicRelation != null)
      json['topic_relation'] = topicRelation;
    return json;
  }

  static List<TopicSearchResultItemAliases> listFromJson(List<dynamic> json) {
    return json == null ? List<TopicSearchResultItemAliases>() : json.map((value) => TopicSearchResultItemAliases.fromJson(value)).toList();
  }

  static Map<String, TopicSearchResultItemAliases> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, TopicSearchResultItemAliases>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = TopicSearchResultItemAliases.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TopicSearchResultItemAliases-objects as value to a dart map
  static Map<String, List<TopicSearchResultItemAliases>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<TopicSearchResultItemAliases>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = TopicSearchResultItemAliases.listFromJson(value);
       });
     }
     return map;
  }
}

