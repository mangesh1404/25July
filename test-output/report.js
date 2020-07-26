$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo.feature");
formatter.feature({
  "line": 1,
  "name": "JBK Test",
  "description": "",
  "id": "jbk-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7182163500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user enter  \"file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html",
      "offset": 13
    }
  ],
  "location": "demoStepdef.user_enter(String)"
});
formatter.result({
  "duration": 4091278000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "logo test",
  "description": "",
  "id": "jbk-test;logo-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@logo"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "logo should display",
  "keyword": "Then "
});
formatter.match({
  "location": "demoStepdef.logo_should_display()"
});
formatter.result({
  "duration": 349362600,
  "status": "passed"
});
formatter.after({
  "duration": 2895921600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "login Test",
  "description": "",
  "id": "jbk-test;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "jbk-test;login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "jbk-test;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 20,
      "id": "jbk-test;login-test;;2"
    },
    {
      "cells": [
        "mangesh",
        "12345678"
      ],
      "line": 21,
      "id": "jbk-test;login-test;;3"
    },
    {
      "cells": [
        "Neelam",
        "abc123"
      ],
      "line": 22,
      "id": "jbk-test;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3184317300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user enter  \"file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html",
      "offset": 13
    }
  ],
  "location": "demoStepdef.user_enter(String)"
});
formatter.result({
  "duration": 1296476600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "login Test",
  "description": "",
  "id": "jbk-test;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user enter \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 34
    }
  ],
  "location": "demoStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 2270119100,
  "status": "passed"
});
formatter.match({
  "location": "demoStepdef.user_should_on_home_page()"
});
formatter.result({
  "duration": 34247100,
  "status": "passed"
});
formatter.after({
  "duration": 2483707600,
  "status": "passed"
});
formatter.before({
  "duration": 3287147100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user enter  \"file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html",
      "offset": 13
    }
  ],
  "location": "demoStepdef.user_enter(String)"
});
formatter.result({
  "duration": 2930888400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "login Test",
  "description": "",
  "id": "jbk-test;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user enter \"mangesh\" and \"12345678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "demoStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 803307900,
  "status": "passed"
});
formatter.match({
  "location": "demoStepdef.user_should_on_home_page()"
});
formatter.result({
  "duration": 19930900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.demoStepdef.user_should_on_home_page(demoStepdef.java:53)\r\n\tat ✽.Then user should on home page(demo.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2318842300,
  "status": "passed"
});
formatter.before({
  "duration": 3216547000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user enter  \"file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html",
      "offset": 13
    }
  ],
  "location": "demoStepdef.user_enter(String)"
});
formatter.result({
  "duration": 4474648000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "login Test",
  "description": "",
  "id": "jbk-test;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user enter \"Neelam\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Neelam",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "demoStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 679571600,
  "status": "passed"
});
formatter.match({
  "location": "demoStepdef.user_should_on_home_page()"
});
formatter.result({
  "duration": 13344900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.demoStepdef.user_should_on_home_page(demoStepdef.java:53)\r\n\tat ✽.Then user should on home page(demo.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2263294600,
  "status": "passed"
});
});