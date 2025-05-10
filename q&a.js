//object to hold all questions

const allQuestions = [
  {
    id: "startingQuestion",
    text: "What is the color used for?",
    answers: [
      { id: "answer1-1", text: "Text", nextQuestion: "textBranch-q1" },
      { id: "answer1-2", text: "Icon", nextQuestion: "iconBranch-q1" },
      {
        id: "answer1-3",
        text: "Background",
        nextQuestion: "backgroundBranch-q1",
      }, // Corrected from user's file which had answer1-1
      { id: "answer1-4", text: "Border", nextQuestion: "borderBranch-q1" }, // Corrected from user's file which had answer1-2
      {
        id: "answer1-5",
        text: "Data vis or Chart",
        nextQuestion: "textBranch-q1",
      }, // Corrected from user's file which had answer1-1
      { id: "answer1-6", text: "Shadow", nextQuestion: "shadowbranch-q1" }, // Corrected from user's file which had answer1-2
    ],
  },

  // Text branch
  // key: tb- text branch, q1- question 1, a1- answer 1
  {
    id: "textBranch-q1",
    text: "What kind of text?",
    answers: [
      { id: "tb-q1-a1", text: "Neutral", nextQuestion: "textBranch-q2-1" },
      { id: "tb-q1-a2", text: "Link", nextQuestion: "textBranch-q2-2" },
      { id: "tb-q1-a3", text: "Coloured", nextQuestion: "textBranch-q2-3" },
    ],
  },

  {
    id: "textBranch-q2-1",
    text: "What's the purpose of the text?",
    answers: [
      { id: "tb-q2-a1", text: "Default" },
      { id: "tb-q2-a2", text: "Subtle" },
      { id: "tb-q2-a3", text: "Disabled" },
      { id: "tb-q2-a4", text: "Inversed" },
    ],
  },
  // Ensure all 'nextQuestion' values correctly point to an existing 'id' in this array.
  // Add other branches (iconBranch-q1, backgroundBranch-q1 etc.) here if they exist.
];
