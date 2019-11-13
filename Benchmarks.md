artillery quick --count 100 -n 200 http://localhost:3000/photos
guide to pm2: pm2 stop all, pm2 start index.js -i max
notebook: i5 4210u, 4gb ram, ssd 120gb
mongodb 4.2, mongoose 5.7, nodejs 12, express 4.17 with router and middlewares.

Scenarios launched is the number of virtual users created in the preceding 10 seconds (or in total)
Scenarios completed is the number of virtual users that completed their scenarios in the preceding 10 seconds (or in the whole test). Note: this is the number of completed sessions, not the number of sessions started and completed in a 10 second interval.
Requests completed is the number of HTTP requests and responses or WebSocket messages sent
RPS sent is the average number of requests per second completed in the preceding 10 seconds (or throughout the test)
Request latency is in milliseconds, and p95 and p99 values are the 95th and 99th percentile values (a request latency p99 value of 500ms means that 99 out of 100 requests took 500ms or less to complete).
Codes provides the breakdown of HTTP response codes received.

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
npm run dev = 1m6s
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 300.53
  Request latency:
    min: 3.5
    max: 8270
    median: 268.1
    p95: 438.8
    p99: 560.4
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
Elapsed time: 1 minute, 18 seconds
async.parallel without pm2
Summary report @ 10:30:21(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 257.86
  Request latency:
    min: 5.4
    max: 8279.6
    median: 325
    p95: 504.5
    p99: 644.9
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000