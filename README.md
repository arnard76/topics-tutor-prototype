# COMPSCI 705 HCI Prototype - Socratic Tutor UI

This app can be accessed without installation through the [web app](https://topics-tutor-prototype.vercel.app/). The system requirements for this web app is desktop because it is not currently responsive (extended to work on multiple device types).

## General Functionality

The socratic tutor UI is friendly and in the background we are using a WoZ tool to actually reply to the students so we can evalutate the UI without making a Socratic AI model.

### Reading Material Page (for phase 1)

[`/reading-material`](https://topics-tutor-prototype.vercel.app/reading-material)

This page is for the first phase of the user study. It is where the student starts and finishes the prototype walkthrough. At any point during the reading of several text extracts on the same topic, they can choose to click the 'Ask tutor' button to get access to the Socratic tutor or the ChatGPT tutor (depending on which experiment group they are).

![](https://topics-tutor-prototype.vercel.app/phase1-reading.png)

### Socratic Tutor (for phase 2, for 1/2 experiment participants)

[`/tutor`](https://topics-tutor-prototype.vercel.app/tutor)

This page is to have a conversation with a Socratic tutor.

![](https://topics-tutor-prototype.vercel.app/phase2-tutoring.png)

There is no actual tutor! Behind the scenes it is simply a researcher answering the questions because we are using the Wizard-of-Oz technique. This is so we can evaluate the UI without creating a Socratic AI model, resulting in faster feedback!

The WoZ researcher answering the questions does so through the WoZ page available at [`/tutor/wizard-of-oz`](https://topics-tutor-prototype.vercel.app/tutor/wizard-of-oz).

## Developing

This application was developed using [SvelteKit](https://svelte.dev/) and [Firebase](https://firebase.google.com/).

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
