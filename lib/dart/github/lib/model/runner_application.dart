part of openapi.api;

class RunnerApplication {
  
  String architecture = null;
  
  String downloadUrl = null;
  
  String filename = null;
  
  String os = null;

  RunnerApplication({
    this.architecture,
    this.downloadUrl,
    this.filename,
    this.os,
  });

  @override
  String toString() {
    return 'RunnerApplication[architecture=$architecture, downloadUrl=$downloadUrl, filename=$filename, os=$os, ]';
  }

  RunnerApplication.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    architecture = json['architecture'];
    downloadUrl = json['download_url'];
    filename = json['filename'];
    os = json['os'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (architecture != null)
      json['architecture'] = architecture;
    if (downloadUrl != null)
      json['download_url'] = downloadUrl;
    if (filename != null)
      json['filename'] = filename;
    if (os != null)
      json['os'] = os;
    return json;
  }

  static List<RunnerApplication> listFromJson(List<dynamic> json) {
    return json == null ? List<RunnerApplication>() : json.map((value) => RunnerApplication.fromJson(value)).toList();
  }

  static Map<String, RunnerApplication> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, RunnerApplication>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = RunnerApplication.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of RunnerApplication-objects as value to a dart map
  static Map<String, List<RunnerApplication>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<RunnerApplication>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = RunnerApplication.listFromJson(value);
       });
     }
     return map;
  }
}

