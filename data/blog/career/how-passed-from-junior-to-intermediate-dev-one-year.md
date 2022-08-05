---
title: How I passed from Junior to Intermediate developer in one year
date: '2021-12-15'
draft: false
tags: ['insights', 'career']
summary: 'Learning from going above junior is not easy. This is why I think I did it and what I could learn in this passage'
---

In 2020 I started my transition into development. I wrote two posts about it, that you can find here:

- [How I transitioned from humanistic jobs to tech and development and why it is possible to start from the basics](https://buaiscia.github.io/blog/how-transitioned-from-humanistic-to-tech-and-helped)
- [What I learnt in my first six months as a working (self-taught) developer](https://buaiscia.github.io/blog/what-learnt-in-first-six-months-self-taught-developer)

After one year and half, here I am. I learned a ton, and I'm still learning a ton. What happened then, that let me declare that I'm not a junior anymore? Well, follow my story here below :)

### Table of Content

- [6 months into the job](#6-months-into-the-job)
- [10 months into the job](#10-months-into-the-job)
- [One month into the new job](#one-month-into-the-new-job)
- [Six months into the new job (1 year and half since started)](#six-months-into-the-new-job-1-year-and-half-since-started)
- [Few more lessons that I gathered in all this time](#few-more-lessons-that-i-gathered-in-all-this-time)

## 6 months into the job

To sum up the post that I wrote about, experience comes with practice. In the first six months I felt overwhelmed, but never too much under pressure as my colleagues (senior devs) were very supportive. I had to learn tools, best practices and so on. I did that, but of course I was not mastering any of those.
However, after six months, I realized that I could do some coding faster. I could find bugs more easily than before. I had less comments in my PRs (Pull Request) during code review.

## 10 months into the job

After almost a year I started dragging a little. I always had some ticket to work on, or some new feature to implement. However, even though I was coding all the time, I felt more and more bored on the job. There were many reasons:

- a little bad management with the client: having to start something and then stopping it before shipping it, because requirements changed or QA (on client side) could not test it for time issues;
- the features were less and less (in quantity and in quality), because the main project was done, missing only things here and there;
- the tech stack was kind of the same all the time (plus, using old React class components) but I didn't have the time to upgrade the code or create tests. Moreover, all the most interesting stuff was taken by the more experienced devs, leaving me with the crumbs.

I became unsatisfied. So, on Twitter, I saw somebody posting about a full remote position, and I got in touch. Long story short, things moved very quickly, and I got the first interview and a take home project.
Here comes the interesting thing. The project was about writing a vanilla JS program with an algorithm inside, as a backend part of a larger, hypothetical program.
The estimated time would have been 2-3 hours for the algorithm, plus some more for the rest, but as I was working full time, they'd given me a week to make it whenever I could.

To my surprise, I did manage to create the algorithm in 3 hours. I had to study the problem in the beginning, check something on the Internet about some ideas, but eventually I had the wow! moment. Then, I started creating everything around it: creating management of edge cases, some tests (the application was running on Node); commitlint and husky; the readme.
That took me a lot longer than expected, maybe another 3 hours. And before sending it, I upgraded some dependencies for a test and all the application broke down. So I had to spend another 20 minutes or more fixing it. Basically, finding a way to roll back to the previous version. And no, I didn't commit just before that (rookie error).

So here there was the first lesson (for me): all my experience of the previous 10 months led to that project, which had much of my knowledge in it. Every interview/take home experience are precious points in your brain on how to solve problems.

The second lesson was: why did I forget to commit? Well, about that, I was careful in creating the commits for the interview (I wanted to keep it clean).
With the knowledge of now I understand it makes no sense, because you can always change message or squash commits together afterwards.

And the third lesson: keep it simple, and think more about the cases, the specs of the project (I did miss a keyword in the assignment), the memory and optimization; and less about the fuzz around.

I passed to the third interview, which was a meat grinder to test my stress level (at least they announced that in the beginning) and it was very long. One hour of hard questions.

I felt I had 20% or less chance after the call. They told me they'd let me know within the week. But they called me after 15 minutes and had another talk, and I passed all of it.

They liked the project, but most importantly, they liked me as a person, how I was interacting with the questions. Basically, my soft skills! So eventually, my humanistic education paid off. Also, admittedly by them, many of the people on the call wouldn't know how to answers some questions they were giving me.

## One month into the new job

I gave my two months notification letter and I started negotiating the terms of the new contract, that eventually became quite good. It's too early to say, but so far I'm really satisfied with the change.
The first effect is that I get to work in totally new projects, with new technologies that I have to learn. And I've to learn now so much, that I became more accustomed and I know better how to look and where.

In this new job, as they are accepting external projects, I had to do quite a bunch of interviews and take home (additional) projects - although, this time, paid ones. And I realized that every time I was going faster, and better.
I failed some of them, and some others I passed. Also, sometimes there's a misunderstanding, or the requirements/specs are not clear, so there's little chance to pass these ones anyway.

But, back to the initial point, I realized that I was not a junior anymore. I could ship a project in a way lesser time and lesser effort than a year before. I'm not a senior, and won't be for a long time probably, but this is enough for now.

The problem is that for reaching it I had to make a very big effort for the whole last year, although I was not realizing it. I pushed myself, I got corrected, I spoke myself out when I felt was needed (and sometimes it wasn't, but still). I almost never stayed in a comfort zone, and when I did, I had to change job to step out. And it was much needed.

## Six months into the new job (1 year and half since started)

The past six months brought up new challenges. I was involved in 3 projects: the first one was temporary and lasted few weeks (just as maintenance); the second one was supposed to last 3 months but it was almost 5; and the last one is where I'm actually involved.

That's one advantage of working for a smaller company that continuously receives new clients, comparing to tech giants: I got to work with three totally different frameworks and tech stacks in less than a year. This widened a lot my knowledge. Or to better say, it helped me understand the common thinking allowing to work with whatever you're given.

Another important thing that I learned was caused by the second project. It was really badly managed. We were just two developers for frontend and backend for a huge promised product to finish in three months.
Here are the signs that the project was ill-fated since the beginning:

- it was over-promised before devs came in to work with it
- even soon after we came in and had the first meetings, we had to take decisions on its delivery based on design drafts (yes, not even stories, features description or similar)
- as it seemed from the drafts ok, we decided to give it a go
- after we started working, the real designs and tickets came in and...surprise surprise, the scope of the project raised twice or even thrice
- the devs were starting to be annoyed. The sprints were a joke. The client was at the obscure of everything because our Product Owner (PO, the person taking care of the project who is usually talking to the client and intermediate with the team) decided many times to still promise undeliverable stuff.
- eventually we delivered a third of what was promised in the beginning, and it was 6 weeks after the "project end".
- there was no time to create tests and we passed the last weeks solving bugs because
- everything was to be done in a rush

The situation changed a little when the developers (the two of us plus another external to the project) pushed -strongly- back to the PO, but it was already too late. It got better for the developers, but not for the client. He didn't understand what was happening.

So from this phase, and making a comparison with my actual project where I have a good leadership, PO and scrum master, I took the following lessons:

- I was (am?) somehow bad at estimating a ticket, imagine a whole project. Committing to such an effort with almost no information was a bad mistake
- After I started, I was underestimating for a long time the effort on the tickets/features. There was a lot of bad psychological pressure, so maybe I'm not 100% guilty of that.
- When a PO or project manager push you for delivering something in a not deliverable timeframe, push back. It's the duty of a developer to tell them how much time they need to do quality work, because the PO or the project manager usually don't know how to code. If they won't be happy, it's better to be unhappy before and more satisfied at the end.
- As in that case, given the type of project, it happens that there is no time to create tests or a product of more quality. It's the client project so if the company sold it this way, it's not your problem. Just be sure that the client knows.
- Don't get stressed after bad management decisions. It's their fault, not yours. But take your time to speak out.

## Few more lessons that I gathered in all this time

- Learn how to read docs instead of Stack Overflow and random googling (I know that we all do it anyway :) )
- Learn how to divide logic in the backend from the frontend (basically, everything in the BE as the FE should be just a dummy fetching and visualizing)
- Learn how to give priorities. This includes times of switching between projects, but it's valid also in life.
- It's really not necessary to learn new tech and code off working hours. It took time to shut off the urge to do that, but I feel better. I learn what I need for the job (or more if I want to expand my clients)
- Write down your points every week of what you've accomplished and tickets you've worked on. I took this advice from Randall Kann books, and in some cases worked very well for the evaluation.
- Learn about abstractions and all principles
- Learn how to work in different environments (dev, test, prod etc)
- There are more often than not communication issues during remote working. Take some time to talk to the manager/scrum master if some issue arise, in order to solve it quickly before it adds up or escalate.

Let me know if you had similar experiences or what you learned after you started your journey!

Thank you for reading and let's connect on [Twitter](https://twitter.com/AlexBuaiscia)!
