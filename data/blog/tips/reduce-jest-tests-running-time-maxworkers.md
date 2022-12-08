---
title: Reduce your Jest tests running time (especially on hooks!) with the maxWorkers option
date: '2022-12-08'
draft: false
tags: ['web development', 'jest', 'testing']
summary: 'How tweaking the maxWorkers option can increase tests efficiency'
---

Many applications have hundreds (and sometimes thousands!) of tests. Sometimes those tests are run only manually; more often they're attached to some hook. For example, we can use 'husky' to run some action before the commit or the push. In my case, lint and prettier before the commit and tests before the push.
Or the tests can be run during some actions on a CI/CD tool.

I'm with a MacBook Pro 2020, and I've got around 170 unit and integration tests running on a frontend application. That means that at least half of it needs rendering the components many times - hence consuming much memory and CPU.

When I run my tests manually, they usually are pretty fast, around 1 minute and some seconds of execution time.
However, I found that when I'm pushing the code to our repository, many times the test suites fail on timeout. They exceed the default time limit of 5 seconds.

Of course, this limit can be increased. But if 5 seconds is not enough for running a test, there's something wrong!

Now, although Jest runs with Javascript (which is single-threaded), it uses workers to divide the workload among many Jest processes, imitating multi-threading.
Jest calculates -on many factors- how many workers can activate and runs them. In my case, there were around 8. When I was running them continuously, my laptop fan started running as if it was going to melt.

CPU got slower with the heating up and tests were starting to timeout because there was no more computational power to let them run properly.

Luckily, Jest let us customize this option with --maxWorkers.
On my CRA (Create React App) I added this option cutting in half the workers to the test command:
```
"test": "react-scripts test --maxWorkers=50%"
```

This lets just 4 workers be spun and let the tests pass without timeout issues. Their execution was anyway fairly quick, and it prevented me from any more trouble! 
Of course, the option can be set even lower (or higher). It depends on many factors, so you can try and test yourself (pun intended)!

Thank you for reading! Let's connect on [Twitter](https://twitter.com/AlexBuaiscia)!
