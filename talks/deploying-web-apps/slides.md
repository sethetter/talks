# Deploying Web Apps

talks.sethetter.com/deploying-web-apps

---

You've built the **Best App Ever**, and you're ready to share your creation with
the world.

---

<small>_How do I launch this thing?_</small>

---

![](/img/deploy-option-logos.png)

---

**How do you choose?**

---

## How do I know what I need?

Focus on what you need now,

not what you'll need in 5 years.

---

## What if I choose the wrong tool?

- Paying more than you have to
- Unnecessary complexity
- Tons of features you don't need
- Less time to focus on your actual idea

---

## Components of increasing complexity

- Front end
- Serverless functions
- External integrations
- Database server
- Application server
- Kubernetes?!

---

# Questions!

---

## Do I need a front end?

- Are your users going to interact with a UI?
- Do you need to display information to your users?
- Will people access your product through a browser?

---

## Do I need a database?

- Do you need to store data?
- Can you use a managed service like Firebase?
- Is a no-code datastore like Airtable viable?

---

## Do I need a back end?

Anything from serverless functions to running servers

- If you need a database, yes
- If you need a place to hold sensitive data
- If you need to integrate with other services
  - ..and can't expose your credentials on the front end

---

## Do I need other services?

- Send emails, texts, or other SaaS services
- Can happen with no-code as well (Zapier!)

---

<small>_Full disclosure, I work at Zapier, and am working on some cool things! Lets' talk about it :)_</snall>

---

## What about doing it "The Right Way"?

It's never quite so binary.

- What's the goal of this project?
- Launching is the most important thing
- DBs and backends are security concerns
- Managing infrastructure is it's own job

---

# Some options!

---

## No code solutions!

- Forms with Google Form or TypeForm
- Data with Airtable or Google Sheets
- Automation with [Zapier](https://zapier.com)

---

# Front-end only!

---

## Netlify

Free, convenient hosting for front end applications.

- Custom domains
- HTTPS out of the box
- GitHub auto deploys
- Serverless functions

https://netlify.com

---

# Managed backends

---

## Vercel

- Bonus points if you're using nextjs
- API functions for easy backend functionality
- Still have to decide on a datastore

https://vercel.com

---

## Firebase / Supabase

- Datastore, auth, storage, and more
- No infrastructure to manage
- Avoid wheel reinvention

Supabase is open source!

---

# Always running server

---

## Fly.io

- Platform as a Service (PaaS)
- Run docker containers for free, scale easily
- Free tier for postgres DBs!

https://fly.io

---

## Digital Ocean

- Plain old servers, do what you want with them
- _Starts at $5 a month!_
- Blank slate, set up and run whatever you need

https://digitalocean.com

---

# Full Cloud

---

## AWS / Google Cloud / Azure

- Cloud behemoths, all the power you could need
- Offer some flavor of the managed services above
  - Just harder to work with
- Can become very complex very easily
- **_Don't go this route unless you're sure you need it!_**

---

## Kubernetes

- Container orchestration platform
- Can do awesome things for internal operations
- Highest complexity option, plan accordingly

---

## Terraform!

- Infrastructure as code, version controlled
- Single source of truth for your infrastrcture
- Many "providers": AWS, Netlify, etc etc

---

## When is complexity worth it?

- **_Know what you're gaining_**
- Need more control: performance, cost, etc
- Large scales, hitting limits of other services
- You can afford engineers to manage it

---

## What about migrating later?

- Understand..
  - where your data is stored
  - what format it is in
  - how you can move it between services
- Zapier Transfer for moving data around!

---

## Some caveats

- Maybe the simple option is poorly designed
- Maybe the simple option is expensive
- Maybe you're comfortable with certain tools
- Maybe you're trying to learn something

---

## What's the moral of this story?

- Infrastructure is it's own beast. Keep it tame!
- Only use what you need, you can adapt later
- Don't reinvent the wheel, use managed services
- If you need the complexity, keep it tame
- No code can accomplish _a lot_ these days

---

**Want to learn more? Join devICT!**

devict.org/slack
