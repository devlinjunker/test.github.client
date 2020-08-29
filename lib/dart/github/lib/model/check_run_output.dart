part of openapi.api;

class CheckRunOutput {
  
  int annotationsCount = null;
  
  String annotationsUrl = null;
  
  String summary = null;
  
  String text = null;
  
  String title = null;

  CheckRunOutput({
    this.annotationsCount,
    this.annotationsUrl,
    this.summary,
    this.text,
    this.title,
  });

  @override
  String toString() {
    return 'CheckRunOutput[annotationsCount=$annotationsCount, annotationsUrl=$annotationsUrl, summary=$summary, text=$text, title=$title, ]';
  }

  CheckRunOutput.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    annotationsCount = json['annotations_count'];
    annotationsUrl = json['annotations_url'];
    summary = json['summary'];
    text = json['text'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (annotationsCount != null)
      json['annotations_count'] = annotationsCount;
    if (annotationsUrl != null)
      json['annotations_url'] = annotationsUrl;
      json['summary'] = summary;
      json['text'] = text;
      json['title'] = title;
    return json;
  }

  static List<CheckRunOutput> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckRunOutput>() : json.map((value) => CheckRunOutput.fromJson(value)).toList();
  }

  static Map<String, CheckRunOutput> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckRunOutput>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckRunOutput.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckRunOutput-objects as value to a dart map
  static Map<String, List<CheckRunOutput>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckRunOutput>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckRunOutput.listFromJson(value);
       });
     }
     return map;
  }
}

