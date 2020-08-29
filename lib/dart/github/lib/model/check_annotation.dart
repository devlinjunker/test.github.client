part of openapi.api;

class CheckAnnotation {
  
  String annotationLevel = null;
  
  String blobHref = null;
  
  int endColumn = null;
  
  int endLine = null;
  
  String message = null;
  
  String path = null;
  
  String rawDetails = null;
  
  int startColumn = null;
  
  int startLine = null;
  
  String title = null;

  CheckAnnotation({
    this.annotationLevel,
    this.blobHref,
    this.endColumn,
    this.endLine,
    this.message,
    this.path,
    this.rawDetails,
    this.startColumn,
    this.startLine,
    this.title,
  });

  @override
  String toString() {
    return 'CheckAnnotation[annotationLevel=$annotationLevel, blobHref=$blobHref, endColumn=$endColumn, endLine=$endLine, message=$message, path=$path, rawDetails=$rawDetails, startColumn=$startColumn, startLine=$startLine, title=$title, ]';
  }

  CheckAnnotation.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    annotationLevel = json['annotation_level'];
    blobHref = json['blob_href'];
    endColumn = json['end_column'];
    endLine = json['end_line'];
    message = json['message'];
    path = json['path'];
    rawDetails = json['raw_details'];
    startColumn = json['start_column'];
    startLine = json['start_line'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['annotation_level'] = annotationLevel;
    if (blobHref != null)
      json['blob_href'] = blobHref;
      json['end_column'] = endColumn;
    if (endLine != null)
      json['end_line'] = endLine;
      json['message'] = message;
    if (path != null)
      json['path'] = path;
      json['raw_details'] = rawDetails;
      json['start_column'] = startColumn;
    if (startLine != null)
      json['start_line'] = startLine;
      json['title'] = title;
    return json;
  }

  static List<CheckAnnotation> listFromJson(List<dynamic> json) {
    return json == null ? List<CheckAnnotation>() : json.map((value) => CheckAnnotation.fromJson(value)).toList();
  }

  static Map<String, CheckAnnotation> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CheckAnnotation>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CheckAnnotation.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CheckAnnotation-objects as value to a dart map
  static Map<String, List<CheckAnnotation>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CheckAnnotation>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CheckAnnotation.listFromJson(value);
       });
     }
     return map;
  }
}

