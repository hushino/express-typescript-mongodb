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
-----------------------------------------------
FASTIFY without pm2 mongodb
mongoose, artillery quick --count 100 -n 200 http://localhost:3001
Elapsed time: 35 seconds
Summary report @ 11:16:25(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 565.13
  Request latency:
    min: 9.1
    max: 8093.6
    median: 77.3
    p95: 123.7
    p99: 187.6
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
FASTHTTP simple helloworld with fasthttprouter
22sec
Summary report @ 22:41:26(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 925.93
  Request latency:
    min: 0.2
    max: 280.1
    median: 56.9
    p95: 93.2
    p99: 164.2
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
code from techempower r18 random text 20sec:
Summary report @ 23:08:59(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 978.95
  Request latency:
    min: 0.2
    max: 238.8
    median: 55.1
    p95: 80.7
    p99: 104.5
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
Fastify simple hello world text/ 25sec
Summary report @ 23:13:38(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 808.41
  Request latency:
    min: 0.2
    max: 1901.8
    median: 58.3
    p95: 99.9
    p99: 227.8
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
Hapi v18.4.0, simple hello world text/ 26 seconds
Summary report @ 23:24:42(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 774.59
  Request latency:
    min: 0.5
    max: 402.9
    median: 65.7
    p95: 125.7
    p99: 157.3
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
fastify 21sec simple hello world second round
Summary report @ 23:27:52(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 924.21
  Request latency:
    min: 0.2
    max: 252.2
    median: 55.5
    p95: 93.1
    p99: 137.9
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
hapi mongodb mongoose aprox 666B, 4 doc
Elapsed time: 36 seconds
Summary report @ 23:35:11(-0300) 2019-11-13
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 551.27
  Request latency:
    min: 4.9
    max: 8092.1
    median: 81.2
    p95: 129.1
    p99: 168.3
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
-----------------------------------------------
artillery quick --count 100 -n 200 http://localhost:3000
26sec, simple hello world using http and find-my-way
Summary report @ 12:57:01(-0300) 2019-11-14
  Scenarios launched:  100
  Scenarios completed: 100
  Requests completed:  20000
  RPS sent: 792.39
  Request latency:
    min: 0.3
    max: 349.8
    median: 63.1
    p95: 123.2
    p99: 189.2
  Scenario counts:
    0: 100 (100%)
  Codes:
    200: 20000
23sec second round
RPS sent: 848.9
  Request latency:
    min: 0.2
    max: 242.9
    median: 62.7
    p95: 105.5
    p99: 126
22 sec second round Code Optimized
RPS sent: 886.92
  Request latency:
    min: 0.3
    max: 260.4
    median: 60.5
    p95: 94.8
    p99: 137.2
21 sec third round better code optimization
RPS sent: 922.51
  Request latency:
    min: 0.2
    max: 241.9
    median: 58.3
    p95: 83
    p99: 110.2
-----------------------------------------------
fastify 23 sec simple hello world
RPS sent: 879.89
  Request latency:
    min: 0.3
    max: 430.1
    median: 59.2
    p95: 95.7
    p99: 156.2
fastify 21sec code optimized
 Request latency:
    min: 0.2
    max: 274.6
    median: 57.1
    p95: 83.8
    p99: 122.6
fastify 20sec code optimized x2
RPS sent: 1010.1
  Request latency:
    min: 0.3
    max: 256.9
    median: 53.7
    p95: 76.5
    p99: 96.4
-----------------------------------------------
netty HTTP/2 enabled hello world, java 8 221
29 sec
RPS sent: 687.29
  Request latency:
    min: 0.7
    max: 426.7
    median: 66
    p95: 152.1
    p99: 241.5
-----------------------------------------------

-----------------------------------------------