(function(window, undefined) {
  var dictionary = {
    "db98051c-9f02-411d-8e63-ee7b28044aa2": "Course Descriptions",
    "5b48fd8d-7927-40f3-977b-e70ca384c6b0": "Students",
    "09276eba-15b1-4036-bd0a-633be5d75b0c": "Student Profile",
    "d183f124-3a88-47f7-bf75-25f2dfbfe6bc": "Calendars",
    "184c1b2f-7f85-426f-8eb9-a6a42ff0fd3e": "Staff Profile",
    "fbcd9574-cc65-4386-b7b7-a01ab3333729": "Template",
    "f59703af-d6c7-442e-bf74-ed2f73529667": "Home Page",
    "8c994559-33f8-4e48-8c09-e8ad2061b158": "Staff",
    "fa0de845-6774-40e3-8e3b-c13d220217c9": "Course Page",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "5234a8a3-5b5c-497a-8d40-fc947c2788d3": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "e45fd423-2376-48f9-acb8-1d955e7630bb": "default imported"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);