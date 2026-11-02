# LearnHub Premium — Code-managed LMS starter

A responsive, polished learning portal made with **HTML5, CSS3 and vanilla JavaScript**.

## Included
- Premium dark interface with light theme toggle
- Responsive course library for desktop, tablet and mobile
- Search, category filters and sorting
- Course → module → lesson navigation
- Embedded YouTube lessons
- Long formatted lesson notes
- Downloadable PDF resources
- Lesson completion tracking and course progress
- Bookmarks saved in the current browser
- Focus mode and collapsible modules
- Previous / next lesson navigation
- Code-managed content in `js/courses-data.js`

## Open in VS Code
1. Extract the ZIP file.
2. Open the `LearnHub-Premium` folder in VS Code.
3. Install the **Live Server** extension if it is not installed.
4. Right-click `index.html` → **Open with Live Server**.

You can also open `index.html` directly, but Live Server is recommended.

## Manage courses in code
Open `js/courses-data.js`. This is the only content file you need to edit.

- Add a course: add an object to `window.LEARNHUB_COURSES`.
- Add a module: add an object to a course's `modules` array.
- Add a lesson: add an object to a module's `lessons` array.
- Delete content: remove the matching object from its array.
- Keep every `id` unique.

## Add a YouTube video
Copy the video ID from the YouTube URL. For `https://www.youtube.com/watch?v=VIDEO_ID`, the ID is `VIDEO_ID`.

Add:
```js
{ type: "youtube", title: "Lesson video", videoId: "VIDEO_ID" }
```
Some YouTube creators disable embedding. Those videos may not play inside the course page.

## Add long notes
```js
{
  type: "notes",
  title: "Detailed lesson notes",
  content: `<h3>Topic heading</h3><p>Write your notes here.</p><ul><li>Point one</li></ul>`
}
```
Notes support headings, paragraphs, lists, bold text, inline code and preformatted code blocks. Only put HTML you trust and wrote yourself into `content`.

## Add downloadable PDF notes
1. Copy your PDF into the `documents/` folder.
2. Add a documents material entry in the lesson:
```js
{
  type: "documents",
  title: "Downloadable notes",
  documents: [
    { title: "HTML Complete Notes", file: "documents/html-complete-notes.pdf", size: "PDF · 2 MB" }
  ]
}
```
The file path and filename must match exactly. Delete the PDF from the folder when you remove its entry from the data file.

## Deploy to Netlify
1. Test locally first.
2. Sign in to Netlify.
3. Choose **Add new site → Deploy manually**.
4. Drag the extracted `LearnHub-Premium` folder into the deployment area.
5. Wait for Netlify to finish.

After editing course data or adding/removing PDFs, deploy the updated folder again. The deployed website will then show the updated content on mobile and laptop.

## Important limitations
- This is a **static, code-managed website**, not a full online multi-user LMS backend.
- Course content is public on the deployed site. Do not put private or restricted documents here.
- Course data and PDFs are updated on the public website after you redeploy.
- Progress and bookmarks are saved in the visitor's browser only. They do not sync between devices.
- No admin login, student accounts, cloud database, payments or online file storage are included.
- No paid service is required. Google Fonts and YouTube embeds need an internet connection.
