part of openapi.api;

class CodeSearchResultItem {
  
  int fileSize = null;
  
  String gitUrl = null;
  
  String htmlUrl = null;
  
  String language = null;
  
  DateTime lastModifiedAt = null;
  
  List<String> lineNumbers = [];
  
  String name = null;
  
  String path = null;
  
  MinimalRepository repository = null;
  
  int score = null;
  
  String sha = null;
  
  List<Object> textMatches = [];
  
  String url = null;

  CodeSearchResultItem({
    this.fileSize,
    this.gitUrl,
    this.htmlUrl,
    this.language,
    this.lastModifiedAt,
    this.lineNumbers,
    this.name,
    this.path,
    this.repository,
    this.score,
    this.sha,
    this.textMatches,
    this.url,
  });

  @override
  String toString() {
    return 'CodeSearchResultItem[fileSize=$fileSize, gitUrl=$gitUrl, htmlUrl=$htmlUrl, language=$language, lastModifiedAt=$lastModifiedAt, lineNumbers=$lineNumbers, name=$name, path=$path, repository=$repository, score=$score, sha=$sha, textMatches=$textMatches, url=$url, ]';
  }

  CodeSearchResultItem.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    fileSize = json['file_size'];
    gitUrl = json['git_url'];
    htmlUrl = json['html_url'];
    language = json['language'];
    lastModifiedAt = (json['last_modified_at'] == null) ?
      null :
      DateTime.parse(json['last_modified_at']);
    lineNumbers = (json['line_numbers'] == null) ?
      null :
      (json['line_numbers'] as List).cast<String>();
    name = json['name'];
    path = json['path'];
    repository = (json['repository'] == null) ?
      null :
      MinimalRepository.fromJson(json['repository']);
    score = json['score'];
    sha = json['sha'];
    textMatches = (json['text_matches'] == null) ?
      null :
      Object.listFromJson(json['text_matches']);
    url = json['url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
    if (fileSize != null)
      json['file_size'] = fileSize;
    if (gitUrl != null)
      json['git_url'] = gitUrl;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
      json['language'] = language;
    if (lastModifiedAt != null)
      json['last_modified_at'] = lastModifiedAt == null ? null : lastModifiedAt.toUtc().toIso8601String();
    if (lineNumbers != null)
      json['line_numbers'] = lineNumbers;
    if (name != null)
      json['name'] = name;
    if (path != null)
      json['path'] = path;
    if (repository != null)
      json['repository'] = repository;
    if (score != null)
      json['score'] = score;
    if (sha != null)
      json['sha'] = sha;
    if (textMatches != null)
      json['text_matches'] = textMatches;
    if (url != null)
      json['url'] = url;
    return json;
  }

  static List<CodeSearchResultItem> listFromJson(List<dynamic> json) {
    return json == null ? List<CodeSearchResultItem>() : json.map((value) => CodeSearchResultItem.fromJson(value)).toList();
  }

  static Map<String, CodeSearchResultItem> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, CodeSearchResultItem>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = CodeSearchResultItem.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CodeSearchResultItem-objects as value to a dart map
  static Map<String, List<CodeSearchResultItem>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<CodeSearchResultItem>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = CodeSearchResultItem.listFromJson(value);
       });
     }
     return map;
  }
}

