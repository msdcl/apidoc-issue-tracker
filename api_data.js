define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/assignedIssuesToUser",
    "title": "getIssue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All assigned issues\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n            assignee:boolean,\n            status:\"string\",\n            createdOn:\"string\",\n            watch:\"string\",\n            attachments:\"string\"\n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in getting assigned issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1Assignedissuestouser"
  },
  {
    "type": "post",
    "url": "/api/v1/followIssue",
    "title": "followIssue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>issueId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watcherId",
            "description": "<p>watcherId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watcherName",
            "description": "<p>watcherName passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue followed\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n            assignee:boolean,\n            status:\"string\",\n            createdOn:\"string\",\n            watch:\"[string]\",\n            attachments:\"string\"\n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in following issue\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1Followissue"
  },
  {
    "type": "post",
    "url": "/api/v1/getIssueDetails",
    "title": "getIssueById",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue details\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n            assignee:boolean,\n            status:\"string\",\n            createdOn:\"string\",\n            watch:\"string\",\n            attachments:\"string\"\n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in getting issues details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1Getissuedetails"
  },
  {
    "type": "post",
    "url": "/api/v1/reportIssue",
    "title": "reportIssue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignee",
            "description": "<p>assignee passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachment",
            "description": "<p>attachment passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>epoch time passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watch",
            "description": "<p>watcher array passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"issue created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n            assignee:boolean,\n            status:\"string\",\n            createdOn:\"string\",\n            watch:\"string\",\n            attachments:\"string\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in reporting issue\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1Reportissue"
  },
  {
    "type": "post",
    "url": "/api/v1/searchIssue",
    "title": "searchIssue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All issues related to text\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n            assignee:boolean,\n            status:\"string\",\n            createdOn:\"string\",\n            watch:\"string\",\n            attachments:\"string\"\n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in getting issues related to text\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1Searchissue"
  },
  {
    "type": "post",
    "url": "/api/v1/updateIssue",
    "title": "updateIssue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>issueId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue updated\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n            assignee:boolean,\n            status:\"string\",\n            createdOn:\"string\",\n            watch:\"string\",\n            attachments:\"string\"\n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in updating issue\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1Updateissue"
  },
  {
    "type": "post",
    "url": "/api/v1/addCommentsToIssue",
    "title": "addComment",
    "version": "0.0.1",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>text passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueName",
            "description": "<p>issueName passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time epoch passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watcher",
            "description": "<p>wachter array passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"comment added\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\t issueId: \"string\",\n\t\t\t\t\t\ttext: \"string\",\n            by:\"string\",\n            date:\"string\",\n           \n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in adding comment\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "comment",
    "name": "PostApiV1Addcommentstoissue"
  },
  {
    "type": "post",
    "url": "/api/v1/allCommentsForIssue",
    "title": "getComment",
    "version": "0.0.1",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"all comments\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\tissueId: \"string\",\n\t\t\t\t\t\ttext: \"string\",\n            date:\"string\",\n            by:\"string\",\n           \n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in getting comment\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "comment",
    "name": "PostApiV1Allcommentsforissue"
  },
  {
    "type": "post",
    "url": "/api/v1/notifications",
    "title": "notifications",
    "version": "0.0.1",
    "group": "notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All notifications\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t[{\n\t\t\t\t\t\tid: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\ttext: \"string\",\n            isSeen:boolean,\n            issueId:\"string\"\n\t\t\t\t\t}]\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"error in getting notifications\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "notifications",
    "name": "PostApiV1Notifications"
  },
  {
    "type": "post",
    "url": "/api/v1/notificationSeen",
    "title": "notificationSeen",
    "version": "0.0.1",
    "group": "notifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"notification seen\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t {\n                     n:1\n                 }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"notification mark as seen failed\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "notifications",
    "name": "PostApiV1Notificationseen"
  },
  {
    "type": "post",
    "url": "/api/v1/changePassword",
    "title": "changePassword",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"Password has been changed\",\n      \"status\": 200,\n      \"data\": [\n                  {\n                      email: \"string\",\n                  }\n              ]\n          }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Changepassword"
  },
  {
    "type": "post",
    "url": "/api/v1/forgotPassword",
    "title": "forgot Password",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"We have sent an email\",\n      \"status\": 200,\n      \"data\": [\n                  {\n                      email: \"string\",\n                  }\n              ]\n          }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Forgotpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "login",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"login successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\ttoken: \"string\"\n                       \n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Login"
  },
  {
    "type": "post",
    "url": "/api/v1/logout",
    "title": "logout",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"logout successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\tn=1\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To logout\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Logout"
  },
  {
    "type": "post",
    "url": "/api/v1/signup",
    "title": "signup",
    "version": "0.0.1",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>user name passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"signup successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tuserId: \"string\",\n                        userName: \"string\",\n                        email:\"string\"\n\t\t\t\t\t\tmobileNumber: \"string\",\n\t\t\t\t\t\tpassword: \"string\",\n                        createdOn:Date\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user",
    "name": "PostApiV1Signup"
  }
] });
