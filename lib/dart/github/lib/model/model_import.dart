part of openapi.api;

class ModelImport {
  
  int authorsCount = null;
  
  String authorsUrl = null;
  
  int commitCount = null;
  
  String errorMessage = null;
  
  String failedStep = null;
  
  bool hasLargeFiles = null;
  
  String htmlUrl = null;
  
  int importPercent = null;
  
  int largeFilesCount = null;
  
  int largeFilesSize = null;
  
  String message = null;
  
  List<ImportProjectChoices> projectChoices = [];
  
  int pushPercent = null;
  
  String repositoryUrl = null;
  
  String status = null;
  //enum statusEnum {  auth,  error,  none,  detecting,  choose,  auth_failed,  importing,  mapping,  waiting_to_push,  pushing,  complete,  setup,  unknown,  detection_found_multiple,  detection_found_nothing,  detection_needs_auth,  };{
  
  String statusText = null;
  
  String svcRoot = null;
  
  String svnRoot = null;
  
  String tfvcProject = null;
  
  String url = null;
  
  String useLfs = null;
  
  String vcs = null;
  /* The URL of the originating repository. */
  String vcsUrl = null;

  ModelImport({
    this.authorsCount,
    this.authorsUrl,
    this.commitCount,
    this.errorMessage,
    this.failedStep,
    this.hasLargeFiles,
    this.htmlUrl,
    this.importPercent,
    this.largeFilesCount,
    this.largeFilesSize,
    this.message,
    this.projectChoices,
    this.pushPercent,
    this.repositoryUrl,
    this.status,
    this.statusText,
    this.svcRoot,
    this.svnRoot,
    this.tfvcProject,
    this.url,
    this.useLfs,
    this.vcs,
    this.vcsUrl,
  });

  @override
  String toString() {
    return 'ModelImport[authorsCount=$authorsCount, authorsUrl=$authorsUrl, commitCount=$commitCount, errorMessage=$errorMessage, failedStep=$failedStep, hasLargeFiles=$hasLargeFiles, htmlUrl=$htmlUrl, importPercent=$importPercent, largeFilesCount=$largeFilesCount, largeFilesSize=$largeFilesSize, message=$message, projectChoices=$projectChoices, pushPercent=$pushPercent, repositoryUrl=$repositoryUrl, status=$status, statusText=$statusText, svcRoot=$svcRoot, svnRoot=$svnRoot, tfvcProject=$tfvcProject, url=$url, useLfs=$useLfs, vcs=$vcs, vcsUrl=$vcsUrl, ]';
  }

  ModelImport.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    authorsCount = json['authors_count'];
    authorsUrl = json['authors_url'];
    commitCount = json['commit_count'];
    errorMessage = json['error_message'];
    failedStep = json['failed_step'];
    hasLargeFiles = json['has_large_files'];
    htmlUrl = json['html_url'];
    importPercent = json['import_percent'];
    largeFilesCount = json['large_files_count'];
    largeFilesSize = json['large_files_size'];
    message = json['message'];
    projectChoices = (json['project_choices'] == null) ?
      null :
      ImportProjectChoices.listFromJson(json['project_choices']);
    pushPercent = json['push_percent'];
    repositoryUrl = json['repository_url'];
    status = json['status'];
    statusText = json['status_text'];
    svcRoot = json['svc_root'];
    svnRoot = json['svn_root'];
    tfvcProject = json['tfvc_project'];
    url = json['url'];
    useLfs = json['use_lfs'];
    vcs = json['vcs'];
    vcsUrl = json['vcs_url'];
  }

  Map<String, dynamic> toJson() {
    Map <String, dynamic> json = {};
      json['authors_count'] = authorsCount;
    if (authorsUrl != null)
      json['authors_url'] = authorsUrl;
      json['commit_count'] = commitCount;
      json['error_message'] = errorMessage;
      json['failed_step'] = failedStep;
    if (hasLargeFiles != null)
      json['has_large_files'] = hasLargeFiles;
    if (htmlUrl != null)
      json['html_url'] = htmlUrl;
      json['import_percent'] = importPercent;
    if (largeFilesCount != null)
      json['large_files_count'] = largeFilesCount;
    if (largeFilesSize != null)
      json['large_files_size'] = largeFilesSize;
    if (message != null)
      json['message'] = message;
    if (projectChoices != null)
      json['project_choices'] = projectChoices;
      json['push_percent'] = pushPercent;
    if (repositoryUrl != null)
      json['repository_url'] = repositoryUrl;
    if (status != null)
      json['status'] = status;
      json['status_text'] = statusText;
    if (svcRoot != null)
      json['svc_root'] = svcRoot;
    if (svnRoot != null)
      json['svn_root'] = svnRoot;
    if (tfvcProject != null)
      json['tfvc_project'] = tfvcProject;
    if (url != null)
      json['url'] = url;
    if (useLfs != null)
      json['use_lfs'] = useLfs;
      json['vcs'] = vcs;
    if (vcsUrl != null)
      json['vcs_url'] = vcsUrl;
    return json;
  }

  static List<ModelImport> listFromJson(List<dynamic> json) {
    return json == null ? List<ModelImport>() : json.map((value) => ModelImport.fromJson(value)).toList();
  }

  static Map<String, ModelImport> mapFromJson(Map<String, dynamic> json) {
    var map = Map<String, ModelImport>();
    if (json != null && json.isNotEmpty) {
      json.forEach((String key, dynamic value) => map[key] = ModelImport.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ModelImport-objects as value to a dart map
  static Map<String, List<ModelImport>> mapListFromJson(Map<String, dynamic> json) {
    var map = Map<String, List<ModelImport>>();
     if (json != null && json.isNotEmpty) {
       json.forEach((String key, dynamic value) {
         map[key] = ModelImport.listFromJson(value);
       });
     }
     return map;
  }
}

