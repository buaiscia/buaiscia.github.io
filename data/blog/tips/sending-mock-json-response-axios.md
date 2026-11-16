---
title: Mock an Axios call with a JSON file.
date: '2020-11-13'
draft: false
tags: ['nodejs', 'web development', 'api', 'tips']
summary: 'How to avoid test calling a third party API with Axios using a mock JSON file'
---

Every now and then, working on the backend of a project, we have to deal with calling third party APIs via fetch or Axios. It's perfectly doable also during testing if the other API has a development or stage environment to experiment with. But there are some cases in which this isn't happening, unfortunately; or there are other cases in which stage/staging is not available (because, for example, it is busy with another branch of the project).
Or, most commonly, we don't want to make too many calls (they could be billable). After all, tests are made for this.

## Mocking on the way to help!

We know mocking by the testing libraries, like Jest. They are used, for example, for mocking functions and testing the returned/resolved/rejected values, among many other ways to implement them.
But what about Axios? We are in that stage of development that is happening before creating the tests (not TDD, conceded), and we don't know the side effects of updating something or even how the response will look like.

What we have is some good documentation to implement a feature and that's it. So how to mock the Axios call? Axios is returning an object as response. Unfortunately, we can't pass a JSON file directly as request from Axios because the service makes only http requests, hence it thinks we're passing a url string.

Let's show it as an example in NodeJS with Restify as framework:

Before:

```
public getAll = async (req, res, next) => {
        try {
             const url = 'http://url';
             const response = await axios.get(url);
             res.send(response.data)
        } catch (err) {
            next(new InternalError(errorMsg));
        }
        next();
```

After (wrong):

```
public getAll = async (req, res, next) => {
        try {
             const file = './mockFile.json';
             const response = await axios.get(file);
             res.send(response)
        } catch (err) {
            next(new InternalError(errorMsg));
        }
        next();
// send undefined
```

This will throw an exception as response will be undefined (Axios does the request to a string).

## Parsing and sending a JSON

The way to proceed, then, is to override Axios and return the JSON object.
However, there's a catch. If we just send the file, like this:
`res.send(file)`
or even if we prepare it with the correct, relative path, like this:
`const paths = path.normalize(__dirname + '/mockFile.json');`
again it won't be read. It will be undefined because a file is, well, a part of the file system. That gives the answer to this problem: we have to use the in-built Node module 'fs', then parse it and finally send it.
Here's how:

```
import {readFile } from "fs";

public getAll = (req, res, next) => {
        try {
            readFile(__dirname + '/mockFile.json', 'utf8', function (err, data) {
                if (err) throw err;
                data = JSON.parse(data);
                res.send(data);
                next();
            });
        } catch (err) {
            next(new InternalError(errorMsg));
        }
```

If there will be an error, it will be thrown and caught by the catch method. The readFile method of fs in this case has three arguments: the path or the source to read, the encoding (optional, rarely will be different than utf8), and a callback function.
Data will contain, as an object as a matter of fact, the JSON file. We will reassign to data the parsed object and finally we can send it to the next method to use it.

That's it! Now you can mock any kind of response and use it directly in the code to test it!

Thank you for reading and let's connect on [Twitter](https://twitter.com/AlexBuaiscia)!
