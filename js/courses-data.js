/*
  LEARNHUB CONTENT MANAGER — EDIT THIS FILE IN VS CODE.

  Add / edit / delete courses, modules, lessons, YouTube videos, notes and PDF links here.
  PDF files belong in the documents/ folder. No Supabase Storage is used.

  VIDEO:
  { type: "youtube", title: "Video title", videoId: "YOUTUBE_VIDEO_ID" }

  LONG NOTES:
  { type: "notes", title: "Lesson notes", content: `<h3>Heading</h3><p>Your notes...</p>` }

  PDF:
  { type: "documents", title: "Download notes", documents: [
      { title: "PDF title", file: "documents/your-file.pdf", size: "PDF · 2 MB" }
  ] }

  Use unique ids for every course, module and lesson.
*/
window.LEARNHUB_COURSES = [

  {
    id: "html-masterclass",
    title: "HTML Masterclass — From Zero to Practical Web Development",
    category: "Web Development",

    description:
      "Learn HTML from absolute basics to practical web development. Study 26 lessons with simple explanations, practical examples, exercises and downloadable notes.",

    icon: "🌐",
    cover: "linear-gradient(135deg,#283e78,#6654b5)",
    featured: true,

    modules: [

      // MODULE 1
      {
        id: "html-foundations",
        title: "Module 1: HTML Foundations",
        lessons: [
          {
            id: "html-welcome",
            title: "01. Introduction to HTML",
            description: "Understand HTML, CSS, JavaScript and how websites work.",
            materials: [
              {
                type: "youtube",
                title: "Complete HTML Tutorial — Apna College",
                videoId: "HcOc7P5BMi4"
              },
              {
                type: "notes",
                title: "Introduction to HTML Notes",
                content: `
                <h2>What is HTML?</h2>
                <p>HTML stands for HyperText Markup Language. It defines the structure of webpages.</p>
                <h3>Three important technologies</h3>
                <ul>
                  <li>HTML – Structure</li>
                  <li>CSS – Styling</li>
                  <li>JavaScript – Behaviour</li>
                </ul>
                <h3>How a website works</h3>
                <ol>
                  <li>Write HTML, CSS and JavaScript.</li>
                  <li>The browser reads the code.</li>
                  <li>The browser displays the webpage.</li>
                </ol>
              `
              },
              {
                type: "documents",
                title: "Download HTML Masterclass Notes",
                documents: [
                  {
                    title: "HTML Masterclass Complete Notes",
                    file: "documents/html-masterclass-notes.pdf",
                    size: "PDF · 33 pages"
                  }
                ]
              }
            ]
          },
          {
            id: "html-workspace",
            title: "02. Setting Up VS Code",
            description: "Create your HTML workspace and learn to run HTML files.",
            materials: [
              {
                type: "notes",
                title: "VS Code Setup",
                content: `
                <h2>HTML Workspace</h2>
                <ol>
                  <li>Open VS Code.</li>
                  <li>Create a folder named HTML-Masterclass.</li>
                  <li>Create index.html.</li>
                  <li>Type ! and press Tab.</li>
                  <li>Save and open the file in Chrome.</li>
                </ol>
                <h3>Recommended folder structure</h3>
                <pre>HTML-Masterclass/
  index.html
  images/</pre>
              `
              }
            ]
          },
          {
            id: "html-boilerplate",
            title: "03. HTML Boilerplate",
            description: "Understand DOCTYPE, html, head, body, title and meta tags.",
            materials: [
              {
                type: "notes",
                title: "HTML Boilerplate",
                content: `
                <h2>Basic HTML Structure</h2>
                <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
                <h3>Remember</h3>
                <ul>
                  <li>head: Information about the webpage.</li>
                  <li>body: Visible webpage content.</li>
                  <li>title: Browser tab title.</li>
                </ul>
              `
              }
            ]
          },
          {
            id: "html-tags-elements",
            title: "04. Tags, Elements and Attributes",
            description: "Understand opening tags, closing tags, elements, attributes and nesting.",
            materials: [
              {
                type: "notes",
                title: "HTML Tags and Elements",
                content: `
                <h2>Three Important Concepts</h2>
                <ul>
                  <li>Tag: Defines the type of content.</li>
                  <li>Element: The complete HTML unit.</li>
                  <li>Attribute: Provides additional information.</li>
                </ul>
                <h3>Example</h3>
                <pre>&lt;a href="https://google.com"&gt;Open Google&lt;/a&gt;</pre>
                <p>href specifies the destination of the link.</p>
                <h3>Void elements</h3>
                <p>Examples: br, hr, img, input and meta.</p>
                <h3>Nesting</h3>
                <pre>&lt;p&gt;Learning &lt;strong&gt;HTML&lt;/strong&gt;&lt;/p&gt;</pre>
              `
              }
            ]
          }
        ]
      },

      // MODULE 2
      {
        id: "html-text-content",
        title: "Module 2: HTML Text and Content",
        lessons: [
          {
            id: "html-headings",
            title: "05. Headings and Paragraphs",
            description: "Learn h1 to h6, paragraphs, line breaks and horizontal rules.",
            materials: [
              {
                type: "notes",
                title: "Headings and Paragraphs",
                content: `
                <h2>HTML Headings</h2>
                <p>HTML provides six heading levels.</p>
                <pre>&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h2&gt;Section Heading&lt;/h2&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;</pre>
                <h3>Other elements</h3>
                <ul>
                  <li>p – Paragraph</li>
                  <li>br – Line break</li>
                  <li>hr – Thematic break</li>
                </ul>
                <p>Use headings according to content structure.</p>
              `
              }
            ]
          },
          {
            id: "html-comments",
            title: "06. HTML Comments",
            description: "Write comments and temporarily hide code.",
            materials: [
              {
                type: "notes",
                title: "HTML Comments",
                content: `
                <h2>Comments</h2>
                <pre>&lt;!-- This is a comment --&gt;
&lt;h1&gt;My Website&lt;/h1&gt;</pre>
                <p>Comments are not displayed as normal webpage content.</p>
                <p>Never store passwords or secret information in comments.</p>
              `
              }
            ]
          },
          {
            id: "html-formatting",
            title: "07. Text Formatting Tags",
            description: "Learn strong, bold, emphasis, italic, mark, del, ins, sub and sup.",
            materials: [
              {
                type: "notes",
                title: "Text Formatting",
                content: `
                <h2>Important Formatting Tags</h2>
                <ul>
                  <li>strong – Important content</li>
                  <li>b – Visual attention</li>
                  <li>em – Emphasized content</li>
                  <li>i – Alternate voice or term</li>
                  <li>u – Underlined annotation</li>
                  <li>mark – Highlighted content</li>
                  <li>small – Small print</li>
                  <li>del – Deleted content</li>
                  <li>ins – Inserted content</li>
                  <li>sub – Subscript</li>
                  <li>sup – Superscript</li>
                </ul>
                <pre>&lt;p&gt;&lt;del&gt;₹999&lt;/del&gt; &lt;strong&gt;₹599&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;</pre>
              `
              }
            ]
          },
          {
            id: "html-lists",
            title: "08. Lists in HTML",
            description: "Create unordered, ordered and description lists.",
            materials: [
              {
                type: "notes",
                title: "HTML Lists",
                content: `
                <h2>Three Types of Lists</h2>
                <h3>Unordered List</h3>
                <pre>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
&lt;/ul&gt;</pre>
                <h3>Ordered List</h3>
                <pre>&lt;ol&gt;
  &lt;li&gt;Learn HTML&lt;/li&gt;
  &lt;li&gt;Learn CSS&lt;/li&gt;
&lt;/ol&gt;</pre>
                <h3>Description List</h3>
                <pre>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Webpage structure&lt;/dd&gt;
&lt;/dl&gt;</pre>
              `
              }
            ]
          }
        ]
      },

      // MODULE 3
      {
        id: "html-links-media",
        title: "Module 3: Links, Images and Media",
        lessons: [
          {
            id: "html-links",
            title: "09. Links and Navigation",
            description: "Create external links, internal links, email links and telephone links.",
            materials: [
              {
                type: "notes",
                title: "HTML Anchor Tags",
                content: `
                <h2>Anchor Tag</h2>
                <pre>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</pre>
                <h3>Open in a new tab</h3>
                <pre>&lt;a href="https://google.com"
target="_blank" rel="noopener"&gt;
Google
&lt;/a&gt;</pre>
                <h3>Other links</h3>
                <pre>&lt;a href="contact.html"&gt;Contact&lt;/a&gt;
&lt;a href="#skills"&gt;Skills&lt;/a&gt;
&lt;a href="mailto:test@example.com"&gt;Email&lt;/a&gt;</pre>
              `
              }
            ]
          },
          {
            id: "html-images",
            title: "10. Images in HTML",
            description: "Display images using src, alt, width and height attributes.",
            materials: [
              {
                type: "notes",
                title: "HTML Images",
                content: `
                <h2>Image Element</h2>
                <pre>&lt;img src="images/profile.jpg"
alt="My profile photo"
width="300"&gt;</pre>
                <h3>Important attributes</h3>
                <ul>
                  <li>src – Image location.</li>
                  <li>alt – Alternative text.</li>
                  <li>width – Image width.</li>
                  <li>height – Image height.</li>
                </ul>
                <p>Use descriptive alt text for meaningful images.</p>
              `
              }
            ]
          },
          {
            id: "html-paths",
            title: "11. File Paths",
            description: "Understand relative paths, absolute paths and image folders.",
            materials: [
              {
                type: "notes",
                title: "HTML File Paths",
                content: `
                <h2>Types of Paths</h2>
                <ul>
                  <li>profile.jpg – Current folder.</li>
                  <li>images/profile.jpg – Inside images folder.</li>
                  <li>../profile.jpg – Parent folder.</li>
                  <li>https://example.com/image.jpg – Absolute URL.</li>
                </ul>
                <h3>Debugging</h3>
                <p>Check filename, extension, spelling and folder location when an image fails to load.</p>
              `
              }
            ]
          },
          {
            id: "html-audio",
            title: "12. Audio in HTML",
            description: "Play audio files using audio, source and controls.",
            materials: [
              {
                type: "notes",
                title: "HTML Audio",
                content: `
                <h2>Audio Element</h2>
                <pre>&lt;audio controls&gt;
  &lt;source src="music.mp3" type="audio/mpeg"&gt;
  Your browser does not support audio.
&lt;/audio&gt;</pre>
                <p>Useful attributes include controls, loop and muted.</p>
              `
              }
            ]
          },
          {
            id: "html-video",
            title: "13. Video and Iframes",
            description: "Display local videos and embed YouTube videos using iframe.",
            materials: [
              {
                type: "notes",
                title: "HTML Video and Iframe",
                content: `
                <h2>Local Video</h2>
                <pre>&lt;video controls width="500"&gt;
  &lt;source src="my-video.mp4" type="video/mp4"&gt;
&lt;/video&gt;</pre>
                <h2>YouTube Embed</h2>
                <pre>&lt;iframe
src="https://www.youtube.com/embed/VIDEO_ID"
title="Learning video"
allowfullscreen&gt;
&lt;/iframe&gt;</pre>
                <p>Some websites block embedding through their security settings.</p>
              `
              }
            ]
          }
        ]
      },

      // MODULE 4
      {
        id: "html-tables-forms",
        title: "Module 4: Tables and Forms",
        lessons: [
          {
            id: "html-tables",
            title: "14. Tables in HTML",
            description: "Create tables, rows, columns, captions, colspan and rowspan.",
            materials: [
              {
                type: "notes",
                title: "HTML Tables",
                content: `
                <h2>Table Elements</h2>
                <ul>
                  <li>table – Complete table</li>
                  <li>thead – Header section</li>
                  <li>tbody – Main data</li>
                  <li>tr – Table row</li>
                  <li>th – Header cell</li>
                  <li>td – Data cell</li>
                  <li>tfoot – Footer section</li>
                  <li>caption – Table description</li>
                </ul>
                <h3>Example</h3>
                <pre>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Marks&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Saleem&lt;/td&gt;
      &lt;td&gt;90&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>
                <p>Use colspan to span columns and rowspan to span rows.</p>
              `
              }
            ]
          },
          {
            id: "html-forms",
            title: "15. Introduction to HTML Forms",
            description: "Understand forms, labels, inputs, action, method and submission.",
            materials: [
              {
                type: "notes",
                title: "HTML Forms",
                content: `
                <h2>Basic Form</h2>
                <pre>&lt;form action="/contact" method="post"&gt;
  &lt;label for="name"&gt;Name&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;

  &lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;/form&gt;</pre>
                <h3>Important elements</h3>
                <ul>
                  <li>form – Groups form controls.</li>
                  <li>label – Describes an input.</li>
                  <li>input – Accepts user data.</li>
                  <li>textarea – Multi-line text.</li>
                  <li>button – Performs an action.</li>
                </ul>
                <p>HTML alone does not save form data. A backend is required.</p>
              `
              }
            ]
          },
          {
            id: "html-input-types",
            title: "16. HTML Input Types",
            description: "Learn text, password, email, number, date, radio and checkbox inputs.",
            materials: [
              {
                type: "notes",
                title: "Input Types",
                content: `
                <h2>Common Input Types</h2>
                <pre>&lt;input type="text"&gt;
&lt;input type="password"&gt;
&lt;input type="email"&gt;
&lt;input type="number"&gt;
&lt;input type="date"&gt;
&lt;input type="file"&gt;
&lt;input type="radio"&gt;
&lt;input type="checkbox"&gt;</pre>
                <h3>Other form controls</h3>
                <ul>
                  <li>select and option – Dropdown.</li>
                  <li>textarea – Long messages.</li>
                  <li>button – Form actions.</li>
                </ul>
              `
              }
            ]
          },
          {
            id: "html-form-attributes",
            title: "17. Form Attributes and GET vs POST",
            description: "Understand required, placeholder, value, min, max, checked, disabled and readonly.",
            materials: [
              {
                type: "notes",
                title: "Form Attributes",
                content: `
                <h2>Important Attributes</h2>
                <ul>
                  <li>placeholder – Input hint.</li>
                  <li>required – Mandatory field.</li>
                  <li>value – Initial value.</li>
                  <li>min and max – Allowed limits.</li>
                  <li>checked – Initially selected.</li>
                  <li>disabled – Disables control.</li>
                  <li>readonly – Prevents editing.</li>
                  <li>multiple – Allows multiple selections.</li>
                </ul>
                <h2>GET vs POST</h2>
                <p>GET is commonly used to retrieve information. POST sends submitted data in the request body.</p>
                <p>POST alone does not make data secure. Use HTTPS and server-side validation.</p>
              `
              }
            ]
          }
        ]
      },

      // MODULE 5
      {
        id: "html-advanced",
        title: "Module 5: Advanced HTML Concepts",
        lessons: [
          {
            id: "html-div-span",
            title: "18. Div and Span",
            description: "Understand block containers and inline containers.",
            materials: [
              {
                type: "notes",
                title: "Div and Span",
                content: `
                <h2>Div</h2>
                <p>div is a generic block container used to group content.</p>
                <pre>&lt;div&gt;
  &lt;h2&gt;My Profile&lt;/h2&gt;
  &lt;p&gt;Learning HTML&lt;/p&gt;
&lt;/div&gt;</pre>
                <h2>Span</h2>
                <p>span is a generic inline container.</p>
                <pre>&lt;p&gt;Learning &lt;span&gt;HTML&lt;/span&gt;&lt;/p&gt;</pre>
              `
              }
            ]
          },
          {
            id: "html-semantic",
            title: "19. Semantic HTML",
            description: "Learn header, nav, main, section, article, aside and footer.",
            materials: [
              {
                type: "notes",
                title: "Semantic HTML",
                content: `
                <h2>Important Semantic Elements</h2>
                <ul>
                  <li>header – Introductory content.</li>
                  <li>nav – Navigation links.</li>
                  <li>main – Main content.</li>
                  <li>section – Thematic section.</li>
                  <li>article – Self-contained content.</li>
                  <li>aside – Related content.</li>
                  <li>footer – Footer information.</li>
                  <li>figure and figcaption – Media and caption.</li>
                </ul>
                <h3>Why semantic HTML?</h3>
                <ul>
                  <li>Readable code.</li>
                  <li>Better accessibility.</li>
                  <li>Easier maintenance.</li>
                  <li>Useful structural information for search engines.</li>
                </ul>
              `
              }
            ]
          },
          {
            id: "html-details",
            title: "20. Details and Summary",
            description: "Build expandable content and FAQ sections without JavaScript.",
            materials: [
              {
                type: "notes",
                title: "Details and Summary",
                content: `
                <h2>Expandable Content</h2>
                <pre>&lt;details&gt;
  &lt;summary&gt;What is HTML?&lt;/summary&gt;
  &lt;p&gt;HTML defines webpage structure.&lt;/p&gt;
&lt;/details&gt;</pre>
                <p>The open attribute makes the section expanded by default.</p>
              `
              }
            ]
          },
          {
            id: "html-entities",
            title: "21. HTML Entities",
            description: "Display special characters using HTML entities.",
            materials: [
              {
                type: "notes",
                title: "HTML Entities",
                content: `
                <h2>Common HTML Entities</h2>
                <ul>
                  <li>&amp;lt; displays &lt;</li>
                  <li>&amp;gt; displays &gt;</li>
                  <li>&amp;amp; displays &amp;</li>
                  <li>&amp;quot; displays "</li>
                  <li>&amp;apos; displays '</li>
                  <li>&amp;copy; displays ©</li>
                  <li>&amp;nbsp; creates a non-breaking space.</li>
                </ul>
                <p>Use CSS for ordinary page spacing.</p>
              `
              }
            ]
          }
        ]
      },

      // MODULE 6
      {
        id: "html-professional-projects",
        title: "Module 6: Professional HTML and Projects",
        lessons: [
          {
            id: "html-head",
            title: "22. The Head Section and Metadata",
            description: "Understand meta charset, viewport, title, description and favicon.",
            materials: [
              {
                type: "notes",
                title: "HTML Metadata",
                content: `
                <h2>Head Section</h2>
                <pre>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Portfolio&lt;/title&gt;
  &lt;meta name="description" content="My portfolio"&gt;
  &lt;link rel="icon" href="images/favicon.png"&gt;
&lt;/head&gt;</pre>
                <p>Metadata provides information about the webpage.</p>
              `
              }
            ]
          },
          {
            id: "html-accessibility",
            title: "23. HTML Accessibility",
            description: "Make webpages accessible using labels, alt text, headings and keyboard navigation.",
            materials: [
              {
                type: "notes",
                title: "Accessibility Best Practices",
                content: `
                <h2>Accessibility Rules</h2>
                <ol>
                  <li>Use meaningful heading order.</li>
                  <li>Add descriptive alt text.</li>
                  <li>Connect labels with inputs.</li>
                  <li>Use buttons for actions and links for navigation.</li>
                  <li>Support keyboard navigation.</li>
                  <li>Use semantic elements.</li>
                  <li>Do not depend on colour alone.</li>
                </ol>
              `
              }
            ]
          },
          {
            id: "html-mistakes",
            title: "24. Common HTML Mistakes",
            description: "Identify and fix common beginner errors and debugging problems.",
            materials: [
              {
                type: "notes",
                title: "HTML Debugging",
                content: `
                <h2>Common Mistakes</h2>
                <ul>
                  <li>Forgetting closing tags.</li>
                  <li>Using incorrect image paths.</li>
                  <li>Using href on images instead of src.</li>
                  <li>Using src on normal links instead of href.</li>
                  <li>Forgetting alt text.</li>
                  <li>Repeating the same ID.</li>
                  <li>Using br for all spacing.</li>
                  <li>Using tables for webpage layouts.</li>
                  <li>Expecting HTML alone to save form data.</li>
                </ul>
                <h3>Debugging rule</h3>
                <p>Check spelling, filenames, folder paths and browser errors before rewriting your entire code.</p>
              `
              }
            ]
          },
          {
            id: "html-portfolio",
            title: "25. Build a Complete HTML Portfolio",
            description: "Combine headings, links, images, lists, tables, forms and semantic HTML into a portfolio.",
            materials: [
              {
                type: "notes",
                title: "Portfolio Project",
                content: `
                <h2>Build Your First Portfolio</h2>
                <p>Create a professional personal portfolio using HTML.</p>
                <h3>Required sections</h3>
                <ul>
                  <li>Header and introduction.</li>
                  <li>Navigation bar.</li>
                  <li>About Me.</li>
                  <li>Skills.</li>
                  <li>Projects.</li>
                  <li>Learning progress table.</li>
                  <li>Contact form.</li>
                  <li>Frequently Asked Questions.</li>
                  <li>Footer.</li>
                </ul>
                <h3>Practice</h3>
                <p>Build the entire portfolio yourself without copying the example code.</p>
              `
              }
            ]
          },
          {
            id: "html-practice",
            title: "26. HTML Practice Exercises",
            description: "Test your HTML knowledge with five practical coding challenges.",
            materials: [
              {
                type: "notes",
                title: "HTML Practice Challenges",
                content: `
                <h2>Exercise 1: Basic Webpage</h2>
                <p>Create a page with a title, heading, two paragraphs and a horizontal rule.</p>
                <h2>Exercise 2: Skills and Links</h2>
                <p>Create an unordered list of five skills, an ordered list of three learning steps and an external link.</p>
                <h2>Exercise 3: Product Page</h2>
                <p>Create a product name, image, price, old price, description and product table.</p>
                <h2>Exercise 4: Registration Form</h2>
                <p>Create name, email, password, date of birth, preferred role and skills fields.</p>
                <h2>Exercise 5: Mini Portfolio</h2>
                <p>Build a complete portfolio using HTML without copying the example code.</p>
              `
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "css-masterclass",
    title: "CSS Masterclass — Professional Web Design",
    category: "Web Development",
    description: "Learn styling, spacing, layouts, responsive design and modern CSS techniques.",
    icon: "🎨",
    cover: "linear-gradient(135deg,#15536c,#268ca0)",
    featured: true,
    modules: [
      {
        id: "css-basics", title: "Module 1: CSS Foundations", lessons: [
          {
            id: "css-intro", title: "Introduction to CSS", description: "Understand how CSS controls the appearance of web pages.", materials: [
              { type: "youtube", title: "CSS Full Course", videoId: "OXGznpKZ_sA" },
              { type: "notes", title: "CSS Introduction Notes", content: `<h3>What is CSS?</h3><p>CSS means Cascading Style Sheets. It controls how HTML elements look on the screen.</p><h3>CSS controls</h3><ul><li>Text colour, font and size</li><li>Backgrounds, borders and shadows</li><li>Spacing, alignment and layout</li><li>Responsive design for different screens</li></ul><h3>Three ways to add CSS</h3><ol><li>Inline CSS</li><li>Internal CSS using a <code>style</code> element</li><li>External CSS using a separate .css file</li></ol><p>For larger projects, external CSS is easier to organise and maintain.</p>` }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "javascript-starter",
    title: "JavaScript Starter — Interactive Web Development",
    category: "Programming",
    description: "Start learning variables, conditions, loops, functions and browser interactions.",
    icon: "⚡",
    cover: "linear-gradient(135deg,#755522,#b77a35)",
    featured: false,
    modules: [
      {
        id: "js-intro", title: "Module 1: JavaScript Basics", lessons: [
          {
            id: "js-first-steps", title: "What is JavaScript?", description: "Discover how JavaScript makes websites interactive.", materials: [
              { type: "youtube", title: "JavaScript Introduction", videoId: "W6NZfCO5SIk" },
              { type: "notes", title: "JavaScript Starter Notes", content: `<h3>What is JavaScript?</h3><p>JavaScript is a programming language used to add behaviour and interactivity to websites.</p><h3>Examples</h3><ul><li>Responding when a button is clicked</li><li>Validating a form</li><li>Showing or hiding content</li><li>Updating information without reloading the page</li></ul><h3>Practice</h3><p>Open the browser developer console and run <code>console.log("Hello, LearnHub!");</code>.</p>` }
            ]
          }
        ]
      }
    ]
  }
];