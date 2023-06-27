export type Template = {
  id: string;
  title: string;
  prompt: string;
  common_sections: string[];
  placeholder: string;
  category: string;
  guidance?: string;
};

export const templates: Template[] = [
  {
    id: "basic_document",
    title: "Basic Document",
    category: "basic",
    prompt: `
    - This is a basic document.
    `,
    common_sections: ["Introduction", "Body", "Conclusion"],
    placeholder: "My Document",
  },
  {
    id: "study_notes",
    title: "Study Notes",
    prompt: `
    - These are study notes for a class you're taking.
    - Use the [Cornell Method](https://www.cultofpedagogy.com/cornell-notes/) for your notes.
    `,
    common_sections: ["Introduction", "Body", "Conclusion"],
    placeholder: "AI Ethics",
    category: "education",
  },
  {
    id: "lesson_plan",
    title: "Lesson Plan",
    prompt: `
    This is a lesson plan for a class you teach.
    You will use this lesson plan to teach the class.
    `,
    common_sections: [
      "Introduction",
      "Materials",
      "Procedure",
      "Assessment",
      "Conclusion",
    ],
    placeholder: "History of the Roman Empire",
    category: "education",
  },
  {
    id: "grant_application",
    title: "Grant Application",
    prompt: `
    - This is a grant application for a project you're working on.
    - Use the [ACRE](https://www.acrepub.org/) format for your application.
    `,
    common_sections: [
      "Introduction",
      "Background",
      "Goals",
      "Budget",
      "Conclusion",
    ],
    placeholder: "Project to fund a new school library",
    category: "business",
  },
  {
    id: "interview_answer",
    title: "Interview Answer",
    prompt: `
    - This is an answer to an interview question.
    - Use the [STAR](https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique) format for your answer.
    `,
    common_sections: ["Situation", "Task", "Action", "Result"],
    placeholder: "Tell me about a time you failed",
    category: "business",
  },
  {
    id: "research_paper",
    title: "Research Paper",
    prompt: `
    - Write a research paper.
    - Use the [ACRE](https://www.acrepub.org/) format for your paper.
    `,
    common_sections: [
      "Introduction",
      "Background",
      "Methodology",
      "Results",
      "Conclusion",
    ],
    placeholder: "Effects of climate change",
    category: "education",
    guidance: `
      - Use the [ACRE](https://www.acrepub.org/) format for your paper.
    `,
  },
  {
    id: "syllabus_content",
    title: "Syllabus Content",
    prompt: `
    - This is syllabus content for a class you teach.
    - The audience is your students.
    `,
    common_sections: [
      "Introduction",
      "Course Description",
      "Learning Objectives",
      "Course Outline",
      "Assessment",
      "Conclusion",
    ],
    placeholder: "Intro to Computer Science",
    category: "education",
  },
  {
    id: "blog_post",
    title: "Blog Post",
    prompt: `
    - This is a blog post.
    - The audience is your readers.
    `,
    common_sections: [],
    placeholder: "How to write a blog post",
    category: "personal",
  },
];
