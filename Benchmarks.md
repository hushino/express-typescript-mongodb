artillery quick --count 100 -n 200 http://localhost:3000/photos
guide to pm2: pm2 stop all, pm2 start index.js -i max
notebook: i5 4210u, 4gb ram, ssd 120gb
mongodb 4.2, mongoose 5.7, nodejs 12, express 4.17 with router and middlewares.
6 documents with size of 666B
Elapsed time: 1 minute, 14 seconds
Summary report @ 23:28:21(-0300) 2019-11-12
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 271.37
  Request latency:
    min: 9.5
    max: 8133.3
    median: 299.4
    p95: 512.1
    p99: 739
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
pm2 start index.js -i 3
Elapsed time: 45 seconds
Summary report @ 23:30:36(-0300) 2019-11-12
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 440.33
  Request latency:
    min: 5.9
    max: 8221.8
    median: 137.1
    p95: 254.7
    p99: 375
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
pm2 start index.js -i 4
Summary report @ 23:32:35(-0300) 2019-11-12
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 417.01
  Request latency:
    min: 1.8
    max: 8230
    median: 135.6
    p95: 291.3
    p99: 403.7
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
pm2 start index.js -i max
Elapsed time: 52 seconds
Summary report @ 23:39:15(-0300) 2019-11-12
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 384.32
  Request latency:
    min: 3.3
    max: 8218.5
    median: 139.8
    p95: 314.8
    p99: 496.6
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------