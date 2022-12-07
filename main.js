const days = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet"
];

const headColors = [
  "#FF0000",
  "#FF8300",
  "#EEEB00",
  "#47D400",
  "#00CBEB",
  "#0059EB",
  "#C800F0"
]

const classes = [
  [1, 2, 3, 4],
  [5, 6, 7, 1],
  [2, 3, 4, 5],
  [6, 7, 1, 2],
  [3, 4, 5, 6],
  [7, 1, 2, 3],
  [4, 5, 6, 7]
];

const times = [
  [ //Regular+Adv
    "7:55 - 9:14", //P1
    "9:18 - 10:36", //P2
    "10:40 - 11:11", //SP
    [
      [
        "11:13 - 11:43",
        "11:45 - 1:03"
      ], //MS
      [
        "11:15 - 12:33",
        "12:33 - 1:03"
      ] //HS
    ], //L+P3
    "1:07 - 2:25" //P4
  ],
  [ //ExtSP
    "7:55 - 9:07", //P1
    "9:11 - 10:22", //P2
    [
      [
        "10:26 - 10:58", //Lunch
        "11:00 - 12:11" //P3
      ], //MS
      [
        "10:26 - 11:41", //P3
        "11:41 - 12:11" //Lunch
      ] //HS
    ], //L+P3
    "12:11 - 1:10", //SP
    "1:14 - 2:25" //P4
  ],
  [ //EarlyRelease
    "7:55 - 8:38", //P1
    "8:42 - 9:24", //P2
    "9:28 - 9:52", //SP
    "9:56 - 10:37", //P3
    [
      [
        "10:41 - 11:01", //Lunch
        "11:03 - 11:45" //P4
      ], //MS
      [
        "10:41 - 11:23", //P4
        "11:25 - 11:45" //Lunch
      ] //HS
    ] //L+P4
  ]
];

let hs;
let classnames;
if (userData != null) {
  hs = userData.hs;
  classnames = [
    userData.p1,
    userData.p2,
    userData.p3,
    userData.p4,
    userData.p5,
    userData.p6,
    userData.p7,
  ];
} else {
  hs = false;
  classnames = [
    "Class1",
    "Class2",
    "Class3",
    "Class4",
    "Class5",
    "Class6",
    "Class7",
  ];
};

function setText(id, part1, part2, spanid) {
  const element = document.getElementById(id);
  element.innerHTML = "<span>" + part1 + "</span> | " + part2;
  if (spanid != null) {
    element.firstChild.id = "colorp" + spanid
  }
};

let date = new Date()

function printCalendar() {
  // The "Calendar ID" from your calendar settings page, "Calendar Integration" secion:
  var calendarId = 'region-12.org_ve18sviq51v3kg6u5m0lj5ro50@group.calendar.google.com';

  // 1. Create a project using google's wizzard: https://console.developers.google.com/start/api?id=calendar
  // 2. Create credentials:
  //    a) Go to https://console.cloud.google.com/apis/credentials
  //    b) Create Credentials / API key
  //    c) Since your key will be called from any of your users' browsers, set "Application restrictions" to "None",
  //       leave "Website restrictions" blank; you may optionally set "API restrictions" to "Google Calendar API"
  var apiKey = 'AIzaSyAUNBIUm7J44JAxxi8-AWpZiVB3piW12-c';
  // You can get a list of time zones from here: http://www.timezoneconverter.com/cgi-bin/zonehelp
  var userTimeZone = "America/New_York";

  // Initializes the client with the API key and the Translate API.
  gapi.client.init({
    'apiKey': apiKey,
    // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  }).then(function () {
    // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
    // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list
    return gapi.client.calendar.events.list({
      'calendarId': calendarId,
      'timeZone': userTimeZone,
      'singleEvents': true,
      'timeMin': date.toISOString(),
      'maxResults': 10,
      'orderBy': 'startTime'
    });
  }).then(function (response) {
    console.log(response.result.items);

    let items = response.result.items;
    if (items.length > 0) {
      let name;
      for (let index = 0; index < items.length; index++) { //Find day name
        const element = items[index];
        if (element.summary.length < 50 && element.summary.length > 5) {
          name = element.summary;
          break;
        }
      }
      console.log("Day Name: " + name);
      document.getElementById("name").innerText = (date.getMonth() + 1) + "/" + date.getDate() + " - " + name;

      let args = name.split(" ");

      let day;
      for (let index = 0; index < days.length; index++) { //Find day id
        const element = days[index];
        if (name.includes(element)) {
          day = index;
          break;
        };
      };

      if (colorheader) {
        document.getElementById("name").style = "cursor: pointer; color: " + headColors[day] + ";"
      } else {
        document.getElementById("name").style = "cursor: pointer;"
      }

      let named = [];
      for (let index = 0; index < classes[day].length; index++) { //Find class names
        const element = classes[day][index];
        named[index] = classnames[element - 1];
      };
      console.log(named);


      if (args.length == 3 || args.length == 4) { //Regular+Adv
        setText("class0", named[0], times[0][0], classes[day][0]);
        setText("class1", named[1], times[0][1], classes[day][1]);

        if (args.length == 3) {
          setText("class2", "Spartan Period", times[0][2]);
        } else {
          setText("class2", "Advisory", times[0][2]);
        }

        if (hs) {
          setText("class3", named[2], times[0][3][1][0], classes[day][2]);
          setText("class4", "Lunch", times[0][3][1][1]);
        } else {
          setText("class3", "Lunch", times[0][3][0][0]);
          setText("class4", named[2], times[0][3][0][1], classes[day][2]);
        }

        setText("class5", named[3], times[0][4], classes[day][3]);
      } else if (args.length == 6) { //ExtSP
        setText("class0", named[0], times[1][0], classes[day][0]);
        setText("class1", named[1], times[1][1], classes[day][1]);

        if (hs) {
          setText("class2", named[2], times[1][2][1][0], classes[day][2]);
          setText("class3", "Lunch", times[1][2][1][1]);
        } else {
          setText("class2", "Lunch", times[1][2][0][0]);
          setText("class3", named[2], times[1][2][0][1], classes[day][2]);
        }

        setText("class4", "Spartan Period", times[1][3]);
        setText("class5", named[3], times[1][4], classes[day][3]);
      } else if (args.length == 5) { //EarlyRelease
        setText("class0", named[0], times[2][0], classes[day][0]);
        setText("class1", named[1], times[2][1], classes[day][1]);
        setText("class2", "Spartan Period", times[2][0]);
        setText("class3", named[2], times[2][3], classes[day][2]);
//         setText("class4", named[3], times[2][4], classes[day][3]);
        if (hs) {
          setText("class4", named[3], times[2][4][1][0], classes[day][3]);
          setText("class5", "Lunch", times[2][4][1][1]);
        } else {
          setText("class4", "Lunch", times[2][4][0][0]);
          setText("class5", named[3], times[2][4][0][1], classes[day][3]);
        }
      };

      const ids = [
        "colorp1",
        "colorp2",
        "colorp3",
        "colorp4",
        "colorp5",
        "colorp6",
        "colorp7",
      ];

      for (let index = 0; index < ids.length; index++) {
        const element = ids[index]
        const child = document.getElementById(element)
        if (child != null && colorData != null) {
          child.style = "color:" + colorData["c" + (index + 1)] + ";"
        }
      }
    };
  }, function (reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};

gapi.load('client', printCalendar);
